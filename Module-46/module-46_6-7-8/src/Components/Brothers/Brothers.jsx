import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brothers = () => {
    const grandpaMoney = useContext(MoneyContext)
    return (
        <div>
            <h2>Brothers</h2>
            <p>Granpa has:{grandpaMoney.money}tk</p>
        </div>
    );
};

export default Brothers;