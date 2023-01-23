import React from "react";
import "./Card.css";

type Props = {
  name: any;
  image: any;
  details: any;
};

// { name, image, price, details }: Props

const MenuItemcard = ({name ,image  ,details} : Props) => {
  return (
    <>
      <div className="cardss">
        <div className="max-w-sm rounded overflow-hidden shadow-lg  w-96">
      {image}
          <div className="px-6 py-4 h-72">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
            </p>
            <p>{details}</p>
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
            Get Details
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItemcard;
