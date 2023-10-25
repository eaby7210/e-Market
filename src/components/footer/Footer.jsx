import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";

export default function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <footer
      className="text-gray-600 body-font bg-gray-300  left-0 w-full z-50"
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Order
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Local For Vocal
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Cart
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Customer Service
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/returnpolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Services
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/privacypolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div
        className="bg-gray-200"
        style={{
          backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <Link to={"/"} className="flex">
            <div className="flex ">
              <h1
                className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                E-Market
              </h1>
            </div>
          </Link>
          <p
            className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            © 2023 E-Market www.emaket.in
          </p>
        </div>
      </div>
    </footer>
  );
}
