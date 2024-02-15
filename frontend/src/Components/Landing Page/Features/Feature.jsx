import React from "react";

function Feature({ header, description }) {
  return (
    <div className="bg-orange-50 px-1 py-5 rounded-md">
      <h3 className="text-lg font-semibold mb-2">{header}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
