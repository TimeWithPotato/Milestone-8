import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import SectionTitle from "../SectionTitle/SectionTitle";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [data, setData] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
    document.title = "Home";
  },[])

  useEffect(() => {
    if (Array.isArray(loaderData)) {
      setData(loaderData);
    } else {
      setData([]);
    }
  }, [loaderData]);

  const sectionTitle = "Explore Cutting-Edge Gadgets";

  return (
    <section className="mt-60">
      <SectionTitle sectionTitle={sectionTitle} />
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {data.length > 0 ? (
            data.map((datum) => (
              <Product key={datum.product_id} datum={datum} />
            ))
          ) : (
            <p>Reload the page</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
