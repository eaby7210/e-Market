// import React from 'react';

// import { useContext } from "react";
import BannerPanel from "../../components/bannerpanel/BannerPanel";
import Filter from "../../components/filter/Filter";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productsCard/ProductCard";
// import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  console.log(cartItem);
  const addCart = () => {
    dispatch(addToCart("shirt"));
  };
  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  return (
    <Layout>
      <div className="flex flex-row justify-around items-center m-auto"></div>
      <BannerPanel />
      <Filter />
      <ProductCard />
    </Layout>
  );
};

export default Home;
