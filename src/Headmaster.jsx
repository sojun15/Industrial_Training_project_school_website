import React from "react";

function Headmaster() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center">
        <img
          src="/public/head.jpg"
          alt="Headmaster picture"
          className="h-32 w-32 object-cover rounded-full "
        />
        <h1>Md Shafiqul Islam</h1>
        <p>He is the headmaster of kasba govt high school</p>
      </div>
    </div>
  );
}

export default Headmaster;
