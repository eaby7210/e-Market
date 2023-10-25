// import React from "react";

import { useContext } from "react";
import myContext from "../../context/data/myContext";

const Filter = () => {
  const context = useContext(myContext);
  const { mode, filterType, setFilterType, product } = context;
  const categoryList = [];
  for (const index in product) {
    const product_item = product[index];
    const category = product_item.category;

    // Check if the category is not already in the list
    if (!categoryList.includes(category)) {
      categoryList.push(category);
    }
  }
  console.log(categoryList);

  return (
    <div>
      <div className=" flex justify-center mx-auto px-4 mt-5 border-b-4 ">
        <div
          className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border-2 border-gray-200 w-3/4"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="flex items-center justify-between mt-4">
            <p className=" font-medium text-xl">Filters</p>
          </div>
          <div>
            <div className="flex flex-row justify-around bg-blue-100">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 w-full rounded-md bg-red-100 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value={null} selected>
                  All Products
                </option>
                {categoryList.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
