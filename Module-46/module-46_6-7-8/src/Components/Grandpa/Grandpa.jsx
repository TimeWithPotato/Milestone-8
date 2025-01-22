import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);
const Grandpa = () => {
    const asset = "diamond";
    const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa">
          <h2>Grandpa Paradox...</h2>
          <h1>Money: {money}</h1>
      <section className="flex">
              <MoneyContext.Provider value={{ money, setMoney }}>
          <AssetContext.Provider value={"Gold"}>
            <Dad asset={asset} />
            <Uncle asset={asset} />
            <Aunty />
          </AssetContext.Provider>
        </MoneyContext.Provider>
      </section>
    </div>
  );
};

export default Grandpa;
