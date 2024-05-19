import React from "react";
import banner from "../../images/banner.png";

export default function CardHorizontal() {
  return (
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={banner}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <h3 className="text-2xl font-bold">Bientôt disponible</h3>
          </header>
          <p>
           Bientôt votre compte à rebours ! N'hésitez pas à nous contacter pour plus d'informations. 
          </p>
        </div>
      </div>
  );
}
