import React from "react";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-white shadow-lg  dark:bg-gray-800  border-t-2 border-slate-200 shadow-slate-700/5">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <span className="hover:underline"> Willy NOUBISSIE</span>. Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              A Propos
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contactez-nous
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
