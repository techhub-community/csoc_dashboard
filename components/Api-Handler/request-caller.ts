import React from "react";
import axios, { AxiosRequestConfig } from "axios";
import store from "@/store/store";
import { DOMAIN, FE_DOMAIN } from "@/constant/endpoints";

interface ResponseType {
  message: string;
  success: boolean;
  code: number;
  data: {};
}
interface headerProps {
  Authorization: string;
}
interface apiPropsType {
  method?: "post" | "put" | "delete" | "get";
  endpoint: string;
  data?: {};

  authRequired?: boolean;
}


export const ApiErrorResponse={
    message:"",
    success:false,
    code:400,
    data:{},
}

export default function request_caller({
  method = "post",
  endpoint = "",
  data = {},
}: apiPropsType): Promise<ResponseType> {
  return new Promise(async (resolve, reject) => {
    // const headers: { Authorization?: string } = {};
    const request_data: AxiosRequestConfig = {
      method: method,
      url: FE_DOMAIN + endpoint,
      // url:DOMAIN+"api/v1/user/token/",
      ...(method === "get" ? {} : { data: data }),
      responseType: "json",
    }; 

    console.log("access_token_from_redux",store.getState()?.user?.access_token)
    // if (authRequired) {
    //   headers.Authorization = `Bearer ${store.getState()?.user?.access_token}`;
    // }
    console.log("=34-30-304903904-3-43=============");

    console.log("this is the data before call",request_data)
    console.log("=34-30-304903904-3-43=============");
    console.log("=34-30-304903904-3-43=============");
    console.log("request_data",request_data);
    function axios_caller() {
      console.log("Request call start ===================");
      console.log("Request call start ===================");
      axios
        .request(request_data)
        .then((response) => {
          console.log("first response");
          const res_data = response?.data;
          console.log(
            "resonse data=---------=--=-=-=-=-==--==-",
            response?.data
          );
          if (response?.status) {
            console.log("success data+++++++++++++++++");
            resolve(res_data);
          }
          else if(!response?.data?.success && response?.data?.code){
            console.log("login first");
              return response?.data?.code;
          }
           else {
            console.log("data rejected");
            reject(data);
          }
        })
        .catch((error) => {
          console.log("axios_caller_start Error1 =================");
          console.log("---------------------");
          console.log("---------------------");
          console.log(error);
        });
    }

    axios_caller();
  });
}
