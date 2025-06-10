import React from "react";
import JumpButton from "../JumpButton";

const Hero = () => {
  return (
    <section id="hero" className="wrapper w-full">
      <div className="h-[800px] grid grid-cols-1 md:grid-cols-2">
        <aside className="md:-mr-20 md:z-100">
          <div className="indent h-full flex flex-col justify-center items-center mt-12">
            <h1 className="my-8 text-4xl md:text-5xl text-center md:text-left font-bold">
              Hello! My name is Lorem ipsum.
            </h1>
            <p className="pb-4 text:md md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="group text-gray scale-effect hover-effect">
              <JumpButton jumpTo="#projects" />
            </div>
          </div>
        </aside>
        <aside className="indent hidden md:block"></aside>
      </div>
    </section>
  );
};

export default Hero;
