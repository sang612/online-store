import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../slices/category";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const handleToggleSearch = () => {
    document.addEventListener("animationstart", function (e) {
      if (e.animationName === "fade-in") {
        e.target.classList.add("did-fade-in");
      }
    });

    document.addEventListener("animationend", function (e) {
      if (e.animationName === "fade-out") {
        e.target.classList.remove("did-fade-in");
      }
    });
    const search = document.getElementById("search");
    search?.classList.toggle("active");

    search?.classList.forEach((item) => {
      if (item.includes("active")) {
        search.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      }
    });
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.height = "50px";
    } else {
      document.getElementById("header").style.height = "65px";
    }
  }

  return (
    <header
      className="header bg-gray-100 w-full fixed z-10 transition-all duration-300 top-0 left-0"
      id="header"
    >
      <div className="header-container flex flex-row justify-between px-20 py-3">
        <Link to="/" className="font-bold text-2xl italic">
          FakeStore
        </Link>
        <nav>
          <ul className="flex flex-row uppercase">
            <li className="mr-5 font-bold text-sm">
              <Link to="/">trang chủ</Link>
            </li>

            <li className="mr-5 font-bold text-sm">
              <div>
                <div className="dropdown inline-block relative">
                  <button className=" inline-flex items-center">
                    <span className="mr-1 uppercase">Sản phẩm</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute min-w-max  text-gray-700 pt-1">
                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/"
                      >
                        Tất cả sản phẩm
                      </Link>
                    </li>

                    {categoryList.length
                      ? categoryList.map((item, index) => {
                          return (
                            <li className="" key={index}>
                              <Link
                                className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                                to={`/category/${item}`}
                              >
                                {item}
                              </Link>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </div>
              </div>
            </li>

            <li className="mr-5 font-bold text-sm">
              <div>
                <div className="dropdown inline-block relative">
                  <button className=" inline-flex items-center">
                    <span className="mr-1 uppercase">
                      hướng dẫn - chính sách
                    </span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute min-w-max  text-gray-700 pt-1">
                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/size-tutorial"
                      >
                        hướng dẫn chọn size
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/doitra"
                      >
                        chính sách đổi trả
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/dathang"
                      >
                        hướng dẫn đặt hàng
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/khachhang"
                      >
                        chính sách khách hàng
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/nganhang"
                      >
                        tài khoản ngân hàng
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/donhang"
                      >
                        kiểm tra đơn hàng
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        className=" bg-white uppercase hover:text-orange-500 py-2 px-5 pr-10 text-left block whitespace-no-wrap border-b border-gray-300"
                        to="/kiemtrasp"
                      >
                        kiểm tra sản phẩm tại chi nhánh
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="mr-5 font-bold text-sm">
              <Link to="/gioithieu">giới thiệu</Link>
            </li>

            <li className="mr-5 font-bold text-sm">
              <Link to="/news">news</Link>
            </li>
          </ul>
        </nav>
        <div className="header-item flex flex-row">
          <Link to="/userDetail" className="ml-3 text-2xl">
            <i className="fa-solid fa-user"></i>
          </Link>
          <button className="ml-3 text-2xl" onClick={handleToggleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link to="/cart" className="ml-3 text-2xl">
            <i className="fa-solid fa-bag-shopping relative shopping_cart">
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white text-xs">
                {cart.length}
              </span>
            </i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
