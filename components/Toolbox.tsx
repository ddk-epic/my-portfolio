import React from "react";
import { icons } from "@/constants/collections";

const Toolbox = () => {
  return (
    <section id="toolbox" className="wrapper bg-primary">
      <div className="px-4 py-20">
        <h2 className="h2">Toolbox</h2>
        <div className="flex flex-col justify-center items-center gap-2">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-8 justify-center">
            {icons.map(({ name, Icon }) => (
              <div key={name}>
                <Icon key={name} className="w-18 md:h-18 m-auto" />
                <p className="flex justify-center py-2 text-light">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
