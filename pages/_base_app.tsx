import Layout from "@/components/LAYOUT";
import { authPages, urls } from "@/constant/urls";
import { AppProps } from "next/app";
import { Fragment, useEffect, useMemo, useRef } from "react";

export default function BaseApp(props: AppProps) {
  const { Component, pageProps, router } = props;
  const showLayout = [...authPages].includes(router.pathname);
  const LayoutWrap = showLayout ? Fragment : Layout;
  
  useEffect(()=>{
    console.log("cookie",document.cookie);
    const access_token=document.cookie.split(';').find((cookie)=>cookie.startsWith('access_token'));
    console.log("access_token: ",access_token)
    if(!access_token && !authPages.includes(router.pathname))
    {
        router.push(urls.login);
    }
    else if(access_token && authPages.includes(router.pathname))
    {
        router.push(urls.dsa);
    }
  },[router])
  return <LayoutWrap>{Component && <Component {...pageProps} />}</LayoutWrap>;
}
