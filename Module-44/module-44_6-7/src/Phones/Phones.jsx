import React, { useState, useEffect } from "react";
import { use } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import axios from "axios";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
      //   .then((data) => setPhones(data.data));
      
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
          .then(data => {
            const phonesData = data.data.data;
            const fakePhonesData = phonesData.map((phoneData) => {
                const pricePart = phoneData.slug.split("-")[1];
                return {
                    name: phoneData.phone_name.replace("iPhone", "iph"),
                    price: parseInt(pricePart) || 0
                };
            });
            

              return setPhones(fakePhonesData);
          })
  }, []);
  console.log(phones);
  return (
    <div>
      <h2 className="text-lg font-bold">{phones.length}</h2>

      <section>
        <BarChart width={1000} height={250} data={phones}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" className="text-sm font-semibold" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </section>
    </div>
  );
};

export default Phones;
