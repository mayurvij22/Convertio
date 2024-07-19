import React from "react";
import { SiPhpmyadmin } from "react-icons/si";
function Footer() {
  return (
    <footer className="footer bg-slate-950 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="flex flex-col items-center md:items-start">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-3"
            aria-label="ACME Logo"
          ></svg>
          <p className="text-center md:text-left">
            <div className="text-7xl">
              <SiPhpmyadmin />
            </div>
            MayorZ Limited
            <br className="ml-2" />
            2024
          </p>
        </aside>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title text-lg font-semibold mb-4"></h6>
          <div className="flex space-x-4"></div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
