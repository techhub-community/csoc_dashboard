import { DOMAIN, LOCAL, api_urls, current_env } from "@/constant/endpoints";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { serialize } from "cookie";
import { error } from "console";
interface loginTypes {
  req: NextApiRequest;
  res: NextApiResponse;
}

interface optionsType {
  method: "POST";
  url: string;
  data: object;
  responseType: "json";
  timeout: number;
  headers: object;
}
export default function LoginHandler({ req, res }: loginTypes) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  console.log("--------------------------ddddddddddddddd-------");
  console.log("--------------------------ddddddddddddddd-------");
  console.log("--------------------------ddddddddddddddd-------");
  if (req.method !== "POST") {
    console.log("method not allowed");
    return;
  }
  const data = req?.body;
  const headers = {};
  console.log("data from login server handler", data);
  const options: optionsType = {
    method: "POST",
    url: DOMAIN + api_urls.auth.login,
    data: {
      ...data,
    },
    responseType: "json",
    timeout: 10000,
    headers,
  };
  return axios
    .request(options)
    .then((response) => {
      const domain =
        current_env === LOCAL ? "localhost" : "csoc.codeshack.codes";
      const res_data = response.data;
      console.log(response);
      if (
        response?.status &&
        response?.data?.access &&
        response?.data?.refresh
      ) {
        res.setHeader("Set-Cookie", [
          serialize("access_token", response?.data?.access, {
            maxAge: 60 * 60 * 24 * 30 * 6,
            sameSite: "strict",
            httpOnly: false,
            path: "/",
            domain: domain,
          }),
          serialize("refresh_token", response?.data?.refresh, {
            maxAge: 60 * 60 * 24 * 30 * 6,
            sameSite: "strict",
            httpOnly: false,
            path: "/",
            domain: domain,
          }),
        ]);
        delete res_data?.data?.access;
        delete res_data?.data?.refresh;
        res.status(200).json(res_data);
      }
      // res.status(400).json(response);
    })
    .catch((error) => {
      console.log("-------------------------------");
      console.log(error);
      res.status(400).json(error);
    });
}
