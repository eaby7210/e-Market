// import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

function Loader() {
  return (
    <div>
      <div
        role="status"
        className="absolute top-0 right-0 bottom-0 left-0 m-auto w-[3em] h-10 md:h-32 z-50"
      >
        <div aria-hidden="true">
          <AiOutlineLoading className="w-20 h-20 justify-center font-extrabold align-middle m-auto  text-gray-300 animate-spin fill-yellow-600" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
