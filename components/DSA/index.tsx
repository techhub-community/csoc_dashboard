import React from "react";
import { Badges } from "./Badges";
import { Problem } from "./Problem";
import { Submission } from "./Submission";

const DSA: React.FC<{}> = () => {
  return (
    <>
      <div className="ml-2 md:ml-64 mr-2 md:mr-0 ">
        <div className="ml-0 md:ml-10">
          <div className="flex flex-col md:flex-row">
            <Problem />
            <Badges />
          </div>
          <div className="mr-0 md:mr-2">
          <Submission  />
          </div>
        </div>
      </div>
    </>
  );
};

export default DSA;
