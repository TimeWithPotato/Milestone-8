import Brothers from "../Brothers/Brothers";
import Myself from "../Myself/Myself";
import Sisters from "../Sisters/Sisters";

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself asset={asset} />
                <Brothers />
                <Sisters />
            </section>
        </div>
    );
};

export default Dad;