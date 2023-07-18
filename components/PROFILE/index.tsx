import React from "react";
import Member from "./Member";
import Form from "./Form";
import Badge from "./Badge";

function Profile() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-3/4">
        <Form />
      </div>
      <div className="w-full md:w-1/4 flex flex-col md:ml-4">
        <Member />
        <Badge />
      </div>
    </div>
  );
}

export default Profile;