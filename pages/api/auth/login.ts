import { NextApiRequest, NextApiResponse } from "next";
import LoginHandler from "./login.handle";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    return LoginHandler({req,res});
}