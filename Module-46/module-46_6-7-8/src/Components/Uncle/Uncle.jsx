import Cousins from "../Cousins/Cousins";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousins name = {'Rafsan'} asset={asset} />
                <Cousins name = {'Sohana'} />
            </section>
        </div>
    );
};

export default Uncle;