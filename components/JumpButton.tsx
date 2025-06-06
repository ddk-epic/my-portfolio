import React from "react";
import ChevronDown from "./ChevronDown";

const JumpButton = () => {
  return (
    <>
      <a href="#projects">
        <ChevronDown className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer" />
      </a>
    </>
  );
};

export default JumpButton;
