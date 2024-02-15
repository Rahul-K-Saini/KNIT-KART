import React from "react";
import Feature from "./Feature";

function Features() {
  return (
    <div className="w-[90%] m-auto py-2">
      <div className="flex justify-center items-center">
        <span className=" bg-yellow-100 text-yellow-800 text-xl font-medium p-2 rounded">
          Our Features
        </span>
      </div>
      <div className="grid grid-cols-3 gap-7 mt-5 text-center">
        <Feature
          header="Find the Stuff You Need"
          description="Discover and acquire items you require from fellow hostelers"
        />
        <Feature
          header="Easy Belonging Exchange"
          description="Swap your belongings with others hassle-free"
        />
        <Feature
          header="Modern and Professional Design"
          description="Enjoy a visually appealing and user-friendly platform"
        />
        <Feature
          header="Animated Interface"
          description="Engage with interactive animations while using the platform"
        />
      </div>
    </div>
  );
}

export default Features;
