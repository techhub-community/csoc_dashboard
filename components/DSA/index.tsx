import React from "react";
import { Problem } from "./tabs/Problem/Problem";
import { Badges } from "./tabs/Badges/Badges";
import { Submission } from "./tabs/Submission/Submission";

const DSA: React.FC<{}> = () => {
  return (
    <>
       <h1 className="text-black">Data Structure and Algorithms</h1>
     <div className="flex flex-row">
     <Problem/>
     <Badges/>
     </div>
     <Submission/>
    </>
  );
};

export default DSA;
