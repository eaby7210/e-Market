// import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import PropTypes from "prop-types";

import myContext from "../../context/data/myContext";

function UpdateProduct(props) {
  const context = useContext(myContext);
  const { mode, setLoading, edithandle, updateProduct, products, setProducts } =
    context;
  let [isOpen, setIsOpen] = useState(false);
  const { data } = props;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div
        className=" text-2xl cursor-pointer"
        onClick={() => {
          openModal();
          edithandle(data);
        }}
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <AiOutlineEdit />
      </div>

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
                <Dialog.Panel className="w-full h-auto mt-1 max-w-md transform overflow-auto rounded-2xl p-2   align-middle shadow-xl transition-all bg-gray-800">
                  <div>
                    <div className=" flex flex-col justify-end items-center h-screen">
                      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
                        <div className="">
                          <h1 className="text-center text-white text-xl mb-4 font-bold">
                            Update Product
                          </h1>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="title"
                            onChange={(e) =>
                              setProducts({
                                ...products,
                                title: e.target.value,
                              })
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
                              setProducts({
                                ...products,
                                price: e.target.value,
                              })
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
                              setProducts({
                                ...products,
                                imageUrl: e.target.value,
                              })
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
                              setProducts({
                                ...products,
                                category: e.target.value,
                              })
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
                            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
                            onClick={() => {
                              updateProduct();
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                closeModal();
                              }, 900);
                            }}
                          >
                            Update Product
                          </button>
                        </div>
                      </div>
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

UpdateProduct.propTypes = {
  data: PropTypes.shape({
    key1: PropTypes.string,
    key2: PropTypes.string,
    key3: PropTypes.string,
    key4: PropTypes.string,
    key5: PropTypes.string,
    key6: PropTypes.string,
    key7: PropTypes.string,
    key8: PropTypes.shape({
      key9: PropTypes.number,
      key10: PropTypes.number,
    }),
  }).isRequired,
};

export default UpdateProduct;
