// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DOMAIN } from "@/constant/endpoints";
import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosHeaderValue,AxiosRequestConfig,AxiosHeaders } from "axios";
import { ApiErrorResponse } from "@/components/Api-Handler/request-caller";
import {parse} from "cookie";

interface serverPropsType {
  req: NextApiRequest;
  res: NextApiResponse;
  method?: "get" | "post" | "put" | "delete";
  endpoint: string;
  data?: {
    access_token?: string;
  };
  authRequired?: boolean;
  succesCallback?: (_: any) => void;
  errorCallback?: (_: any) => void;
}

type headerType ={
  Authorization?: string;
}

// interface ExtendedAxiosHeaders extends AxiosHeaders {
//   Authorization?: string;
//   // Add other custom headers if needed
// }

export default function server_handler({
  req,
  res,
  method = "get",
  endpoint = "",
  data = {},
  authRequired = true,
  succesCallback,
  errorCallback,
}: serverPropsType) {
  console.log("request and response",req,res);
  console.log(
    "Recheck----------------------------------------------------------------"
  );

  if (!req || !res) return res.status(400).json(ApiErrorResponse);
  console.log(
    "----------------------------------------------------------------"
  );

  console.log("this_is_server_handle_for_request", req);
  console.log(
    "----------------------------------------------------------------"
  );
  try {
    data = {
      ...req.body,
      ...data,
    };
    let cookies;
    const headers:headerType = {};
    let useLoggedIn;

    let options:{
      method:string;
      url:string;
      headers:headerType;
      data?:object;
      params?:object;
      responseType: "json";
    } = {
      method: method,
      url: DOMAIN + endpoint,
      headers: headers,
      responseType: "json",
    };

    if (authRequired) {
      cookies = parse(req.headers.cookie || "");
      console.log("cookies ================ ",cookies);
      useLoggedIn = cookies.access_token;

      if (!useLoggedIn) {
        ApiErrorResponse.message =
          "You are unauthorized to access this page.Please Login First";
        ApiErrorResponse.code = 403;
         res.status(400).json(ApiErrorResponse);
         return;
      }
      const access_token = cookies.access_token;
      options.headers.Authorization = `Bearer ${access_token}`;
    }

    options = {
      ...options,
      params: method === "get" ? data : {},
      ...(method === "get" ? {} : { data: data }),
    };
    return axios
      .request(options)
      .then((response) => {
        console.log("server_side_call_response ==========================");
        console.log(response.data);
        console.log("server_side_call_response ==========================");
        if (response?.status) {
          if (method === "get") {
            res.setHeader(
              "Cache-Control",
              "public,s-maxage=10,stale-while-revalidate=59"
            );
            succesCallback && succesCallback(response?.data);
            res.status(200).json(response?.data);
          } else {
            res.status(400).json(response?.data);
          }
          console.log("sucees_server_response =========================");
        }
      })
      .catch((error) => {
        let err = error?.response?.data;
        errorCallback && errorCallback(err);
        res.status(err?.status === 500 ? 500 : 400).json(err);
      });
  } catch (error) {
    ApiErrorResponse.message = "Server Error";
    ApiErrorResponse.code = 400;
    res.status(500).json(ApiErrorResponse);
  }
}
