import React from "react";
import { PiLightbulbFill } from "react-icons/pi";
const Feature = ({ feature }) => {
  return (
    <div className="flex  gap-2">
      <p className="flex justify-items-center">
        <PiLightbulbFill className="mr-3 mt-1" />
        {feature}
      </p>
    </div>
  );
};

export default Feature;
