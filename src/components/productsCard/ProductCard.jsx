import { useContext } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

import Card from "./card";
// import { toast } from "react-toastify";

function ProductCard() {
  const context = useContext(myContext);
  const { mode, product, filterType } = context;
  // const [f_product, setF_product] = useState();
  // setF_product(
  //   product.filter(
  //     (obj) =>
  //       filterType === null || obj.category.toLowerCase().includes(filterType)
  //   )
  // );

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const addCart = (product) => {
    dispatch(addToCart(product));
    console.log("add to cart");
  };
  console.log(cartItems);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {product
            .filter(
              (obj) =>
                filterType === null ||
                obj.category.toLowerCase().includes(filterType)
            )
            .map((item, index) => {
              const { title, price, imageUrl, category, id } = item;
              return (
                <Card
                  key={index}
                  title={title}
                  price={price}
                  imageUrl={imageUrl}
                  addCart={addCart}
                  item={item}
                  category={category}
                  id={id}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
