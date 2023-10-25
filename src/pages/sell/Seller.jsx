import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { FaCartPlus } from "react-icons/fa";
import { AiFillShopping, AiOutlineDelete } from "react-icons/ai";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

function Seller() {
  const context = useContext(myContext);
  const { mode, product, deleteProduct } = context;
  const userData = JSON.parse(localStorage.getItem("user"));
  const initialSeller = userData ? userData.user.email : "";
  let count = 0;

  //   let [isOpen, setIsOpen] = useState(false);

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   function openModal() {
  //     setIsOpen(true);
  //   }
  return (
    <Layout>
      <div className="container mx-auto mt-7">
        <div className="tab container mx-auto ">
          <Tabs defaultIndex={0} className=" ">
            <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineProductionQuantityLimits />
                    Products
                  </div>{" "}
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500  hover:shadow-green-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center "
                >
                  <div className="flex gap-2 items-center">
                    <AiFillShopping /> Order
                  </div>
                </button>
              </Tab>
              {/* <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center "
                >
                  <div className="flex gap-2 items-center">
                    <FaUser /> Users
                  </div>
                </button>
              </Tab> */}
            </TabList>
            {/*--------  product ------------------  */}
            <TabPanel>
              <div className="  px-4 md:px-0 mb-16">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold underline"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Product Details
                </h1>
                <div className=" flex justify-end">
                  {/* <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    {" "}
                    <div className="flex gap-2 items-center">
                      Add Product <FaCartPlus size={20} />
                    </div>
                  </button> */}
                  <AddProduct />
                </div>
                <div className="relative overflow-x-auto ">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    <thead
                      className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {product.map((item) => {
                      const { title, price, imageUrl, category, date, seller } =
                        item;
                      if (seller === initialSeller) {
                        console.log();
                        count += 1;
                        return (
                          <tbody className="" key={count}>
                            <tr
                              className="bg-gray-50 border-b  dark:border-gray-700"
                              style={{
                                backgroundColor:
                                  mode === "dark" ? "rgb(46 49 55)" : "",
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              <td
                                className="px-6 py-4 text-black "
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {count}
                              </td>
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-black whitespace-nowrap"
                              >
                                <img
                                  className="w-16"
                                  src={imageUrl}
                                  alt="img"
                                />
                              </th>
                              <td
                                className="px-6 py-4 text-black "
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {title}
                              </td>
                              <td
                                className="px-6 py-4 text-black "
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                ${price}
                              </td>
                              <td
                                className="px-6 py-4 text-black "
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {category}
                              </td>
                              <td
                                className="px-6 py-4 text-black "
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {date}
                              </td>
                              <td className="px-6 py-4">
                                <div className=" flex gap-2">
                                  <div
                                    className=" flex justify-around w-4/5  gap-2  text-black "
                                    style={{
                                      color: mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    <div
                                      className=" text-2xl cursor-pointer"
                                      onClick={() => {
                                        deleteProduct(item);
                                      }}
                                    >
                                      <AiOutlineDelete />
                                    </div>

                                    <div className=" text-2xl cursor-pointer hover:shadow-sm">
                                      <UpdateProduct data={item} />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        );
                      }
                    })}
                  </table>
                </div>
              </div>
            </TabPanel>
            {/*--------  order teb ------------------  */}
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-16">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold underline"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Order Details
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    className="text-xs text-black uppercase bg-gray-200 "
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="bg-gray-50 border-b  dark:border-gray-700"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        3393939
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        <img
                          className="w-16"
                          src="https://dummyimage.com/720x400"
                          alt="img"
                        />
                      </th>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Title
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        $100
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        pots
                      </td>

                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        name
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        india
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        82828
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        929929929929
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        kkakka@gmail.com
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        12 Aug 2019
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
            {/* <TabPanel>
             
              <div className="relative overflow-x-auto mb-10">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold underline"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  User Details
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    className="text-xs text-black uppercase bg-gray-200 "
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="bg-gray-50 border-b  dark:border-gray-700"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        1.
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Name
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Address
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        181919
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        1991818818
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        kkk@gmail.com
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        12 Aug 2019
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel> */}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default Seller;
