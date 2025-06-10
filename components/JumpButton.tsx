import React from "react";
import ChevronDown from "./ChevronDown";

const JumpButton = () => {
  return (
    <>
      <a href="#toolbox">
        <ChevronDown className="w-8 h-8 m-auto group-hover:stroke-primary cursor-pointer" />
      </a>
    </>
  );
};

export default JumpButton;
