import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../slices/product";

const Search = () => {
  const [value, setValue] = useState();
  const [tempValue, setTempValue] = useState();
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(
    () => {
      // Wait 1000ms before copying the value of tempValue into value;
      const timeout = setTimeout(() => {
        setValue(tempValue);
      }, 1000);

      // If the hook is called again, cancel the previous timeout
      // This creates a debounce instead of a delay
      return () => clearTimeout(timeout);
    },
    // Run the hook every time the user makes a keystroke
    [tempValue]
  );

  useEffect(() => {
    dispatch(getAllProduct(value));
  }, [value]);

  

  const handleSearch = (e) => {
    e.preventDefault();

    if (tempValue) {
      dispatch(getAllProduct(tempValue));
    }
  };

  return (
    <form className="mb-20 px-20 search" id="search" >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Type product name, category..."
          onChange={(e) => {
            setTempValue(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          onClick={handleSearch}
       >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
