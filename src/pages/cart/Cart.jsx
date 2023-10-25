// import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/modal/Modal";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteFromCart } from "../../redux/cartSlice";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
// // import { toast } from "react-toastify";

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // delete cartItem
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    console.log("deleted cart item");
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });
    setTotalAmount(temp);

    const newShipping = temp !== 0 ? parseInt(2) : 0;
    setShipping(newShipping);

    const newGrandTotal = temp !== 0 ? parseInt(newShipping + totalAmount) : 0;
    setGrandTotal(newGrandTotal);
  }, [cartItems, totalAmount, shipping, grandTotal]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emptyCart, setEmptyCart] = useState(false);
  function randomCode(length) {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    return code;
  }
  const empty_Cart = () => {
    if (emptyCart === true) {
      cartItems.forEach((item) => {
        deleteCart(item);
      });
    }
  };

  const handleOrderNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return console.error("All fields are required");
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const orderInfo = {
      cartItems,
      addressInfo,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      email: JSON.parse(localStorage.getItem("user")).user.email,
      userid: JSON.parse(localStorage.getItem("user")).user.uid,
      paymentId: randomCode(10),
    };

    try {
      const orderRef = collection(fireDB, "order");
      addDoc(orderRef, orderInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div
        className=" h-max bg-gray-100 pt-5 "
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0  ">
          <div className="rounded-lg md:w-2/3 mb-20">
            {cartItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2
                        className="text-lg font-bold text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {item.title}
                      </h2>
                      <h2
                        className="text-sm  text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {item.description}
                      </h2>
                      <p
                        className="mt-1 text-xs font-semibold text-gray-700"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        ${item.price}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 text-3xl w-max">
                      <AiOutlineDelete
                        className=" w-10 h-10 bg-gray-300 rounded-full p-1 text-red-700 font-extrabold hover:cursor-pointer"
                        onClick={() => {
                          deleteCart(item);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
            style={{
              backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div className="  flex justify-between">
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Subtotal
              </p>
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ${totalAmount}
              </p>
            </div>
            <div className="flex justify-between">
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Shipping
              </p>
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ${shipping}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p
                className="text-lg font-bold"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Total
              </p>
              <div className>
                <p
                  className="mb-1 text-lg font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ${grandTotal}
                </p>
              </div>
            </div>
            {/* <Modal  /> */}
            {/* <button
              type="button"
              className="w-full  bg-violet-600 py-2 text-center rounded-lg text-white font-bold "
            >
              Buy Now
            </button> */}
            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              handleOrderNow={handleOrderNow}
              empty_Cart={empty_Cart}
              setEmptyCart={setEmptyCart}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
