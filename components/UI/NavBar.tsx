import { navLinks } from "@/constants/collections";
import React from "react";

const NavBar = () => {
  return (
    <header className="fixed w-full flex justify-between items-center bg-white z-1000 p-4">
      {/* Logo */}
      <div>
        <a href="#hero" className="px-3 py-1.5 border rounded-md">
          K
        </a>
      </div>
      <div className="flex items-center">
        {/* Nav Links */}
        <nav className="hidden sm:inline-block">
          <ul className="flex gap-8 pr-8">
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <a href={link}>
                  <span>{name}</span>
                </a>
              </li>
            ))}
            <li key="About">
              <a href="/about">
                <span>About</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Contact Me */}
        <div className="group">
          <a
            href="#contact"
            className="items-center bg-light text-foreground px-4 pb-1.5 pt-0.5 rounded-md group-hover:bg-primary group-hover:text-light hover-effect"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
