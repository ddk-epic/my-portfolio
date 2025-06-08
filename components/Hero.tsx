import React from "react";
import JumpButton from "./JumpButton";

const Hero = () => {
  return (
    <section id="hero" className="wrapper w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <aside className="h-[750px] bg-secondary">
          <div className="h-full flex flex-col justify-center items-center mx-2 lg:mx-4">
            <h1 className="my-8 text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </h1>
            <p className="text:md md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
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
