import { navLinks } from "@/constants/navLinks";
import React from "react";

const NavBar = () => {
  return (
    <header className="flex justify-between bg-primary text-light p-4">
      {/* Logo */}
      <div>
        <a href="#hero" className="logo">
          Logo
        </a>
      </div>
      <div className="flex">
        {/* Nav Links */}
        <nav className="hidden sm:block">
          <ul className="flex gap-6">
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
        <div className="pl-6">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
