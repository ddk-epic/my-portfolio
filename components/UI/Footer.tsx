import React from "react";
import { contactLinks } from "@/constants/collections";
import { NextIcon } from "../DevIcons";

const Footer = () => {
  return (
    <>
      <section id="contact" className="wrapper">
        <div className="flex pt-20 pb-12">
          {/* Footer text */}
          <div className="indent max-w-2/3 w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold">
              Thanks for stopping by!
            </h1>
          </div>
          {/* Contact me */}
          <div className="w-32">
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
      </section>
      {/* Small print */}
      <div className="absolute right-0 text-gray text-sm py-2 pr-4">
        powered by{" "}
        <span>
          <NextIcon className="w-5 h-5 inline-flex text-gray fill-current" />
        </span>{" "}
        Nextjs
      </div>
    </>
  );
};

export default Footer;
