import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const Statistics = () => {
  const [data, setData] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
    document.title = "Statistics"
  },[])

  useEffect(() => {
    const scaledData = loaderData.map((item) => ({
      ...item,
      scaledRating: item.rating * 20,
    }));
    setData(scaledData);
  }, [loaderData]);

  return (
    <div className="flex items-center justify-center mt-10">
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
        <Bar dataKey="scaledRating" fill="#82ca9d" name="Rating (scaled)" />
      </BarChart>
    </div>
  );
};

export default Statistics;
