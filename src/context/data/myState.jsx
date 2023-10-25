import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MyContext from "./myContext";
// // import { toast } from "react-toastify";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

// import React from "react";

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    seller: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  //  Add Product Section
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.seller == null ||
      products.category == null ||
      products.description == null
    ) {
      return console.error("Please fill all fields"); //toast here
    }

    const productRef = collection(fireDB, "products");
    setLoading(true);
    try {
      await addDoc(productRef, products);
      console.log("Product Add successfully"); //toast here
      getProductData();
      // closeModal();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const edithandle = (item) => {
    setProducts(item);
  };
  // update product
  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      console.log("Product Updated successfully"); //toast here
      getProductData();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    setProducts("");
  };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      console.log("Product Deleted successfully"); //toast here
      setLoading(false);
      getProductData();
    } catch (error) {
      // toast.fa('Product Deleted Falied')
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const [user, setUser] = useState([]);
  const getUserData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false);
      });
      setUser(usersArray);
      console.log(usersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [filterType, setFilterType] = useState("");
  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
        updateProduct,
        deleteProduct,
        getUserData,
        filterType,
        setFilterType,
        user,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

MyState.propTypes = {
  children: PropTypes.node,
};

export default MyState;
