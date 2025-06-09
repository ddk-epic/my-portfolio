import React from "react";
import JumpButton from "../JumpButton";

const Hero = () => {
  return (
    <section id="hero" className="tempborder wrapper w-full">
      <div className="h-[750px] grid grid-cols-1 md:grid-cols-2 gap-2">
        <aside>
          <div className="indent h-full flex flex-col justify-center items-center mt-12">
            <h1 className="my-8 text-4xl md:text-5xl text-center lg:text-left font-bold">
              Hello! My name is Lorem ipsum.
            </h1>
            <p className="text:md mx-4 lg:mx-0 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="mt-6">
              <JumpButton />
            </div>
          </div>
        </aside>
        <aside className="hidden md:block"></aside>
      </div>
    </section>
  );
};

export default Hero;
