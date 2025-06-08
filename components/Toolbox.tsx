import React from "react";
import { icons } from "@/constants/collections";

const Toolbox = () => {
  return (
    <section className="wrapper bg-primary">
      <div className="py-20">
        <h2 className="h2">Toolbox</h2>
        <div className="flex justify-center items-center gap-2">
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-5 justify-center">
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
