import Friends from "../Friends/Friends";
import Special from "../Special/Special";

const Cousins = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousins</h2>
      <p>{name}</p>
      <section className="flex">
        {asset && <Special asset={asset} />}
        {name === "Rubaiya" && <Friends />}
      </section>
    </div>
  );
};

export default Cousins;
