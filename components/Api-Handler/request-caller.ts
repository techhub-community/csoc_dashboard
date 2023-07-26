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
  headers?:{};
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
  headers={},
}: apiPropsType): Promise<ResponseType> {
  return new Promise(async (resolve, reject) => {
    // const headers: { Authorization?: string } = {};
    const request_data: AxiosRequestConfig = {
      method: method,
      url: FE_DOMAIN + endpoint,
      ...(method === "get" ? {} : { data: data }),
      responseType: "json",
      headers:headers,
    }; 

    console.log("access_token_from_redux",store.getState()?.user?.access_token)
    // if (authRequired) {
    //   headers.Authorization = `Bearer ${store.getState()?.user?.access_token}`;
    // }

    console.log("this is the data before call",request_data)
    console.log("this is the header",headers);
    
    function axios_caller() {
      console.log("Request call start ===================");
      axios
        .request(request_data)
        .then((response) => {
          console.log("first response");
          const res_data = response?.data;
          
          if (response?.status) {
            console.log("success data+++++++++++++++++");
            resolve(res_data);
          }
          else if(!response?.data?.success && response?.data?.code){
              return response?.data?.code;
          }
           else {
            reject(data);
          }
        })
        .catch((error) => {
          console.log("axios_caller_start Error1 =================");
          console.log(error);
        });
    }

    axios_caller();
  });
}
