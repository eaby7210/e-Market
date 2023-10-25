// import React from 'react';

import { useContext } from "react";
import myContext from "../../context/data/myContext";
import PropTypes from "prop-types";

const Card = ({ key, title, price, imageUrl, addCart, item, category, id }) => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div key={key} className="p-4 md:w-1/4  drop-shadow-lg ">
      <div
        className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => (window.location.href = `/productinfo/${id}`)}
        >
          <img
            className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
            src={imageUrl}
            alt="blog"
          />
        </div>
        <div className="p-5 border-t-2">
          <h2
            className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            {category}
          </h2>
          <h1
            className="title-font text-lg font-medium text-gray-900 mb-3"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            {title}
          </h1>
          {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
          <p
            className="leading-relaxed mb-3"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            ₹{price}
          </p>
          <div className=" flex justify-center">
            <button
              type="button"
              onClick={() => addCart(item)}
              className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  addCart: PropTypes.string,
  item: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
