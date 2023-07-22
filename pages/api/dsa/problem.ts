import { NextApiRequest, NextApiResponse } from "next";
import server_handler from "../server.handler";
import { api_urls } from "@/constant/endpoints";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log("responseand response",req,res);
// return server_handler({
//   req,
//   res,
//   method: "get",
//   endpoint: api_urls?.dsa?.dsa_problem,
// });
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return server_handler({
    req:req,
    res:res,
    endpoint: api_urls?.dsa?.dsa_problem,
    method: "get",
    authRequired:true
  });
}
