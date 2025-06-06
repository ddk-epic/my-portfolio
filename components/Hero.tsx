import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-4">
        <aside className="h-[750px] bg-secondary">
          <div className="h-full flex flex-col justify-center items-center mx-2 lg:mx-4">
            <h1 className="w-full my-8 text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </h1>
            <p className="w-full text:md md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </aside>
        <aside className="h-[750px] bg-secondary hidden lg:block">right</aside>
      </div>
    </section>
  );
};

export default Hero;
