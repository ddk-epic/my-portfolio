import React from "react";
import ChevronDown from "./ChevronDown";

const JumpButton = ({ jumpTo }: { jumpTo: string }) => {
  return (
    <>
      <a href={jumpTo}>
        <ChevronDown className="w-8 h-8 m-auto group-hover:stroke-primary cursor-pointer" />
      </a>
    </>
  );
};

export default JumpButton;
