import { navLinks } from "@/constants/collections";
import React from "react";

const NavBar = () => {
  return (
    <header className="wrapper flex justify-between items-center bg-primary text-lg text-light p-4">
      {/* Logo */}
      <div>
        <a href="#hero" className="px-3 py-1.5 border-1 rounded-md">
          K
        </a>
      </div>
      <div className="flex items-center">
        {/* Nav Links */}
        <nav className="hidden sm:block">
          <ul className="flex gap-8 pr-8">
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <a href={link}>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Contact Me */}
        <div>
          <a
            href="#contact"
            className="items-center bg-light text-foreground px-4 py-1 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
