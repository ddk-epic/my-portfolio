import React from "react";
import { contactLinks } from "@/constants/collections";
import { NextIcon } from "../DevIcons";

const Footer = () => {
  return (
    <section id="contact" className="tempborder wrapper">
      <div className="flex pt-10 pb-20">
        <div className="indent max-w-2/3 w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold">
            Thanks for stopping by!
          </h1>
        </div>
        <div className="flex-grow">
          <h3 className="pt-4">Contact me</h3>
          <ul>
            {contactLinks.map(({ name, link }) => (
              <li key={name} className="pt-4">
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-gray text-sm p-2">
        powered by{" "}
        <span>
          <NextIcon className="w-5 h-5 inline-flex text-gray fill-current" />
        </span>{" "}
        Nextjs
      </div>
    </section>
  );
};

export default Footer;
