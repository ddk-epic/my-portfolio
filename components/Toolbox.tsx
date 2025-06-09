import React from "react";
import { icons } from "@/constants/collections";

const Toolbox = () => {
  return (
    <section id="toolbox" className="tempborder wrapper">
      <div className="py-20 mx-4">
        <h2 className="h2">Toolbox</h2>
        <div className="flex flex-col justify-center gap-2">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pr-4 my-8">
            {icons.map(({ name, Icon }) => (
              <div key={name} className="group scale-icon">
                <Icon
                  key={name}
                  className="w-18 md:h-18 m-auto group-hover:text-primary hover-icon"
                />
                <p className="flex justify-center py-2 group-hover:text-primary hover-icon">
                  {name}
                </p>
              </div>
            ))}
          </div>
          <p>
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
