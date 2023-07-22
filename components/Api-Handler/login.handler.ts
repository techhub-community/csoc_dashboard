import { urls } from "@/constant/urls";
import request_caller from "./request-caller";
import { error } from "console";

interface loginProps {
  email: string;
  password: string;
}
interface response_props {
  access: string;
  refresh: string;
}
export default function LoginHandler(
  data: loginProps,
//   callBack: (response_data: response_props | {}) => void
callBack:()=>void
) {
  console.log(data);

  request_caller({
    endpoint: urls.api.auth.login,
    data: data,
    method: "post",
  })
    .then((response) => {
      console.log("this 'is from login page from clien ");
      console.log("----------------------------------------------------");
      console.log(response);
      callBack();

      console.log("--------------------------------");
    })
    .catch((error) => {
      console.log("--------------------------------");
      console.log("ewrror");
      console.log("--------------------------------");
    });
}
