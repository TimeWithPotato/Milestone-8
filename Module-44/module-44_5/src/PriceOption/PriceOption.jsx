import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ plan }) => {
    const { price, name, features } = plan;
  return (
    <div className="bg-emerald-500 p-5 rounded-lg shadow-lg w-80 flex flex-col">
      <header className="mb-4">
        <h1 className="text-white">
          <span className="text-5xl">${price}</span>
          <span className="text-xl">/mon</span>
        </h1>
        <h2 className="text-2xl font-bold text-black mt-3">{name}</h2>
      </header>
      <main className="flex flex-col flex-grow">
        <details className="p-2 mt-2 flex-grow" open>
          <summary className="cursor-pointer text-lg font-semibold" style={{listStyle:'none', pointerEvents:'none'}}>Features</summary>
          <div className="mt-2">
            {features.map((feature) => (
              <Feature key={feature} feature={feature} />
            ))}
          </div>
        </details>
        <button className="mt-5 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-all">
          Subscribe
        </button>
      </main>
    </div>
  );
};

export default PriceOption;
