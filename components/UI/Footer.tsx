import React from "react";
import { contactLinks } from "@/constants/collections";
import { NextIcon } from "../DevIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section id="contact" className="wrapper">
        <div className="indent grid grid-cols-[2fr_1fr] py-20">
          {/* Footer text */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mr-8">
              Thanks for stopping by!
            </h1>
          </div>
          {/* Contact me */}
          <div className="pt-1 md:pt-2">
            <h3>Contact me</h3>
            <ul>
              {contactLinks.map(({ name, link }) => (
                <li key={name} className="pt-4">
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Small print */}
      <div className="absolute left-0 flex-1 text-gray text-sm py-2 px-4">
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
