import request_caller from "@/components/Api-Handler/request-caller";
import DSA from "@/components/DSA";
import { urls } from "@/constant/urls";
import { error } from "console";
import { GetServerSideProps } from "next";

export const getServerSideProps = async (context: GetServerSideProps) => {
  try {
    console.log("api call started from server side");
    console.log("api call started from server side");
    console.log("api call started from server side");
    const dsa_response = await request_caller({
      endpoint: urls.api.dsa,
      authRequired: true,
      method: "get",
    });
    console.log("=-===========-=-=");
    console.log("this is from dsa server", dsa_response);
    console.log("=-===========-=-=");
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
