export const DOMAIN="https://csoc.codeshack.codes/";
const FE_LOCALHOST="localhost";
const FE_PORT="3000";
export const FE_DOMAIN=`http://${FE_LOCALHOST}:${FE_PORT}/api/`;
export const api_urls={
    auth:{
        login:"api/v1/user/token/",
    },
    dsa:{
        dsa_problem:"api/v1/dsa/problem/",
    }
} 

const env=process.env.NEXT_PUBLIC_ENV_LOCAL;
export const LOCAL="local" 
export const current_env=env;