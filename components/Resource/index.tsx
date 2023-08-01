import React from "react";
import Dsa from "./dsa";
import Dev from "./dev";

const Resouces: React.FC<{}> = () => {
  return (
    <>
      <div className="ml-0 md:ml-72 mt-28">
        <div className="ml-4">
          <div className="flex flex-col md:flex-row">
            <Dsa />
            <Dev />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resouces;
