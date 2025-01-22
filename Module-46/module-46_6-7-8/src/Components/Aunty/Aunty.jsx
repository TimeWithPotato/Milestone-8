import { useContext } from "react";
import Cousins from "../Cousins/Cousins";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const giveMoney = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousins name={"Momshed"} />
        <Cousins name={"Rubaiya"} />
      </section>

      <button onClick={() => giveMoney.setMoney(giveMoney.money + 1000)}>
        Give money to Grandpa
      </button>
    </div>
  );
};

export default Aunty;
