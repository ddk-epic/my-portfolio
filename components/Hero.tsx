import React from "react";
import JumpButton from "./JumpButton";

const Hero = () => {
  return (
    <section id="hero" className="wrapper w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <aside className="h-[750px] bg-secondary">
          <div className="h-full flex flex-col justify-center items-center mx-2 lg:mx-4">
            <h1 className="m-8 text-4xl md:text-5xl text-center lg:text-left font-bold">
              Hello, my name is Lorem ipsum.
            </h1>
            <p className="mx-8 text:md md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="mt-6">
              <JumpButton />
            </div>
          </div>
        </aside>
        <aside className="h-[750px] bg-secondary hidden lg:block"></aside>
      </div>
    </section>
  );
};

export default Hero;
