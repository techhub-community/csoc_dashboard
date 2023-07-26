import request_caller from "@/components/Api-Handler/request-caller";
import DSA from "@/components/DSA";
import { urls } from "@/constant/urls";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const headers = context.req.headers;
    console.log("api call started from server side");
    const dsa_response = await request_caller({
      endpoint: urls.api.dsa,
      authRequired: true,
      method: "get",
      headers: headers,
    });
    console.log("this is dsa page",dsa_response);
    return {
      props: {
        dsa_res: dsa_response,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default function DSAPage() {
  // console.log("dsa_res_client_heheeh", dsa_res);
  return <DSA />;
}

