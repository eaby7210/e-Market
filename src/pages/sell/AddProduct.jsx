// import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import myContext from "../../context/data/myContext";
import { Timestamp } from "firebase/firestore";

function AddProduct() {
  const context = useContext(myContext);
  const { mode, products, setProducts, addProduct } = context;
  let [isOpen, setIsOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user"));
  const initialSeller = userData ? userData.user.email : "";

  function closeModal() {
    setIsOpen(false);
  }
  function formSubmit() {
    console.log(initialSeller);
    setProducts({
      ...products,
      seller: initialSeller,
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    });
    addProduct();
    closeModal();
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="focus:outline-none text-white bg-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-green-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        {" "}
        <div className="flex gap-2 items-center">
          Add Product <FaCartPlus size={20} />
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-auto justify-end mt-1 max-w-md transform overflow-auto rounded-2xl p-2   align-middle shadow-xl transition-all bg-gray-800">
                  <div className="flex flex-col justify-center w-full items-center h-screen bg-gray-800 px-10 py-10 rounded-xl ">
                    <div className="">
                      <h1 className="text-center text-white text-xl mb-4 font-bold">
                        Add Product
                      </h1>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="title"
                        onChange={(e) =>
                          setProducts({ ...products, title: e.target.value })
                        }
                        value={products.title}
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Product title"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="price"
                        onChange={(e) =>
                          setProducts({ ...products, price: e.target.value })
                        }
                        value={products.price}
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Product price"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="imageurl"
                        onChange={(e) =>
                          setProducts({ ...products, imageUrl: e.target.value })
                        }
                        value={products.imageUrl}
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Product imageUrl"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="category"
                        onChange={(e) =>
                          setProducts({ ...products, category: e.target.value })
                        }
                        value={products.category}
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Product category"
                      />
                    </div>

                    <div>
                      <textarea
                        cols="30"
                        rows="5"
                        name="title"
                        onChange={(e) =>
                          setProducts({
                            ...products,
                            description: e.target.value,
                          })
                        }
                        value={products.description}
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Product Description"
                      ></textarea>
                    </div>
                    <div className=" flex justify-center mb-3">
                      <button
                        className=" bg-green-600 w-full  font-bold text-white  px-2 py-2 rounded-lg"
                        onClick={formSubmit}
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddProduct;
