import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "../../slices/product";
import { addToCart } from "../../slices/cart";

const DetailProduct = () => {
  const navigate = useNavigate();
  const { productDetail, isLoading, error } = useSelector(
    (state) => state.product
  );
  const [productQuantity, setQuantity] = useState(1);
  const [size, setSize] = useState("X");
  const { id } = useParams();

  let productRecentArr = JSON.parse(localStorage.getItem("productRecent"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailProduct(id));
    let productRecentFromLocal = localStorage.getItem("productRecent");

    let productRecentArr = [];
    if (productRecentFromLocal) {
      productRecentArr = JSON.parse(productRecentFromLocal);
      productRecentArr.forEach((item, index) => {
        if (item.id === productDetail.id) {
          productRecentArr = productRecentArr.filter(
            (item) => item.id !== productDetail.id
          );
          return;
        }
      });
      productRecentArr.push(productDetail);

      if (productRecentArr.length > 4) {
        productRecentArr.splice(1, productRecentArr.length - 4);
      }
      localStorage.setItem("productRecent", JSON.stringify(productRecentArr));
    } else {
      productRecentArr.push(productDetail);
      if (productRecentArr.length > 4) {
        productRecentArr.splice(1, productRecentArr.length - 4);
      }
      localStorage.setItem("productRecent", JSON.stringify(productRecentArr));
    }
  }, []);
  const handleOnChangeQuantity = () => {};

  const handleCheckedSize = (event) => {
    for (let i = 1; i <= 4; i++) {
      let clasname = `size${i}`;
      if (clasname === event.currentTarget.id) {
        event.currentTarget.classList.toggle("checked");
      } else {
        document.getElementById(clasname).classList.remove("checked");
      }
      switch (event.currentTarget.id) {
        case "size1":
          setSize("X");
          break;

        case "size2":
          setSize("M");
          break;

        case "size3":
          setSize("L");
          break;

        case "size4":
          setSize("XL");
          break;

        default:
          break;
      }
    }
  };

  const shopping_cart = document.querySelector(".shopping_cart");

  const animation = (e) => {
    let target_parent = e.target.parentNode.parentNode;
    target_parent.style.zIndex = "100";
    let img = target_parent.querySelector("img");
    let flying_img = img.cloneNode();
    flying_img.classList.add("flying-img");

    target_parent.appendChild(flying_img);

    // finding position of flying image
    const flying_img_pos = flying_img.getBoundingClientRect();
    const shopping_cart_pos = shopping_cart.getBoundingClientRect();
    let data = {
      left:
        shopping_cart_pos.left -
        (shopping_cart_pos.width / 2 +
          flying_img_pos.left +
          flying_img_pos.width / 2),
      top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30,
    };

    flying_img.style.cssText = `
      --left: ${data.left.toFixed(2)}px;
      --top: ${data.top.toFixed(2)}px;
    `;

    setTimeout(() => {
      target_parent.style.zIndex = "";
      target_parent.removeChild(flying_img);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="p-5 mt-20">
        <div className="loading">Đang tải</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-5 mt-20">
        <div className="loading">Có lỗi xảy ra</div>
      </div>
    );
  }

  return (
    <div>
      {productDetail ? (
        <div className="detail-product mt-20">
          <div className="container-item flex flex-row item">
            <img
              src={productDetail.image}
              alt={productDetail.title}
              className="w-2/3 h-auto p-20 "
            />
            <div className="prodcut-info w-1/3">
              <h3 className="font-bold text-xl">{productDetail.title}</h3>
              <div className="text-gray-500 mb-3">
                <b>SKU:</b> {productDetail.id}
              </div>
              <hr />
              <div className="my-2 font-bold text-lg">
                {productDetail.price}$
              </div>
              <hr />
              <div className="color mt-3">
                <h5 className="text-sm">Màu sắc</h5>
                <div className="color-item flex flex-row items-center border border-black w-fit mt-2 mb-3">
                  <img
                    src="https://product.hstatic.net/1000253775/product/img_1377_15c97d803d4440739926c2932734cd9b_master.jpg"
                    alt=""
                    className="w-10"
                  />

                  <span className="px-7 text-sm color-text">
                    Trắng
                    <img
                      src="https://theme.hstatic.net/1000253775/1000820059/14/select-pro.png?v=567"
                      alt=""
                      className="selected"
                    />
                  </span>
                </div>
              </div>
              <hr />
              <div className="size">
                <h5 className="text-sm mt-2">Kích thước</h5>
                <div className="size-container flex flex-row mt-2 mb-5">
                  <button
                    id="size1"
                    className="size-item border border-gray-300 py-2 w-10 mr-3 checked"
                    onClick={(e) => {
                      handleCheckedSize(e);
                    }}
                  >
                    S
                    <img
                      src="https://theme.hstatic.net/1000253775/1000820059/14/select-pro.png?v=567"
                      alt=""
                      className="selected"
                    />
                  </button>

                  <button
                    id="size2"
                    className="size-item border border-gray-300 py-2 w-10 mr-3"
                    onClick={(e) => {
                      handleCheckedSize(e);
                    }}
                  >
                    M
                    <img
                      src="https://theme.hstatic.net/1000253775/1000820059/14/select-pro.png?v=567"
                      alt=""
                      className="selected"
                    />
                  </button>
                  <button
                    id="size3"
                    className="size-item border border-gray-300 py-2 w-10 mr-3"
                    onClick={(e) => {
                      handleCheckedSize(e);
                    }}
                  >
                    L
                    <img
                      src="https://theme.hstatic.net/1000253775/1000820059/14/select-pro.png?v=567"
                      alt=""
                      className="selected"
                    />
                  </button>
                  <button
                    id="size4"
                    className="size-item border border-gray-300 py-2 w-10 mr-3"
                    onClick={(e) => {
                      handleCheckedSize(e);
                    }}
                  >
                    XL
                    <img
                      src="https://theme.hstatic.net/1000253775/1000820059/14/select-pro.png?v=567"
                      alt=""
                      className="selected"
                    />
                  </button>
                </div>
              </div>
              <hr />
              <div className="size-tutorial mt-3">
                <button className="bg-black text-white uppercase font-bold py-2 px-10 rounded-md text-xs w-72 text-left">
                  Hướng dẫn chọn size
                </button>
              </div>
              <div className="quantity">
                <div className="input-group">
                  <input
                    type="button"
                    defaultValue="-"
                    className="button-minus"
                    data-field="quantity"
                    onClick={() => {
                      setQuantity(productQuantity - 1);
                    }}
                    disabled={productQuantity < 1}
                  />
                  <input
                    type="number"
                    step={1}
                    max={100}
                    onChange={handleOnChangeQuantity}
                    value={productQuantity}
                    name="quantity"
                    className="quantity-field"
                  />
                  <input
                    type="button"
                    defaultValue="+"
                    className="button-plus"
                    data-field="quantity"
                    onClick={() => {
                      setQuantity(productQuantity + 1);
                    }}
                  />
                </div>
              </div>
              <button
                className="w-full bg-black uppercase font-bold text-white py-1 rounded-md"
                onClick={(e) => {
                  dispatch(
                    addToCart({
                      id: productDetail.id,
                      title: productDetail.title,
                      image: productDetail.image,
                      price: productDetail.price,
                      quantity: productQuantity,
                      size: size,
                    })
                  );

                  animation(e);
                }}
              >
                Đặt hàng
              </button>

              <div className="flex flex-row items-center border border-gray-300 rounded-lg px-2 py-5 mt-4">
                <div className="flex flex-col items-center">
                  <img
                    src="https://theme.hstatic.net/1000253775/1000820059/14/info_img_1_home.png?v=567"
                    width={52}
                    alt=""
                  />
                  <span>FREESHIP Toàn Quốc Đơn Hàng Từ 500K</span>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://theme.hstatic.net/1000253775/1000820059/14/info_img_2_home.png?v=567"
                    width={32}
                    alt=""
                  />
                  <span>Được Kiểm Tra Hàng Trước Khi Thanh Toán</span>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://theme.hstatic.net/1000253775/1000820059/14/info_img_3_home.png?v=567"
                    width={32}
                    alt=""
                  />
                  <span>Đổi Trả Dễ Dàng, Nhanh Chóng</span>
                </div>
              </div>

              <div className="product-info">
                <h3 className="font-bold">Thông tin sản phẩm</h3>
                <p className="mt-3 text-sm">{productDetail.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-20 px-8 gap-8">
            <div className="grid-item border-t-2 border-gray-400 pt-2">
              <h3 className="mb-2">CHÍNH SÁCH GIAO NHẬN - ĐỔI TRẢ HÀNG</h3>
              <p>
                - Free ship cho đơn hàng trên 500,000đ. <br />
                - Mức phí: 20,000đ cho đơn hàng dưới 500,000đ <br />
                - Được kiểm tra hàng trước khi nhận hàng <br />
                - Đổi / Trả trong vòng 7 ngày kể từ khi nhận hàng <br />
                - Không áp dụng đổi/trả
                <br />
                sản phẩm trong CTKM - Miễn phí đổi trả nếu lỗi sai sót từ phía
                160store.com
                <br />
              </p>
            </div>

            <div className="grid-item border-t-2 border-gray-400 pt-2">
              <h3 className="mb-2">ƯU ĐÃI MEMBER</h3>
              <p>
                - Thành viên Silver được giảm 5% khi tích đủ 4 triệu <br />
                - Thành viên Gold được giảm 10% khi tích đủ 12 triệu <br />
                - Thành viên Diamond được giảm 15% khi tích đủ 30 triệu <br />
              </p>
            </div>

            <div className="grid-item border-t-2 border-gray-400 pt-2">
              <h3 className="mb-2">ĐỊA CHỈ CỬA HÀNG</h3>
              <p>
                ■ Hà Nội: <br />
                - số 26 phố Lê Đại Hành, P Lê Đại Hành, Q Hai Bà Trưng, Hà Nội
                <br />- số 2 ngõ 232 Tôn Đức Thắng, P.Hàng Bột, Q.Đống Đa, Hà
                Nội ■ Đà Nẵng: 144 Lý Tự Trọng, P.Thuận Phước, Q.Hải Châu, TP.Đà
                Nẵng <br />
                <br />
                ■ TP.Hồ Chí Minh: - 391/375 Trần Hưng Đạo, P.Cầu Kho, Q.1 <br />
                - 111 Khuông Việt, P.Phú Trung, Q.Tân Phú <br />
                - 297/3 Tô Hiến Thành, P.13, Q.10 - 401 Phan Xích Long, P.3,
                Q.Phú Nhuận <br />
                - 94 Lê Văn Thọ, Q.Gò Vấp (gần chợ Hạnh Thông Tây) <br /> <br />
                ■ Biên Hòa: 157 Phan Trung (đường 5 cũ), P.Tân Mai, TP.Biên Hòa
                <br /> <br />
                ■ Cần Thơ: 35 Trần Phú, Q.Ninh Kiều, TP.Cần Thơ. (gần Vincom
                Hùng Vương) <br /> <br />
                Hotline: 028.7100.6789
              </p>
            </div>
          </div>

          <div className="recent-view mt-20">
            <h3 className="font-bold uppercase text-4xl text-center">
              sản phẩm vừa xem
            </h3>
            <div className="flex flex-row justify-between flex-wrap items-end">
              {productRecentArr
                ? productRecentArr.map((item, i) => {
                    return (
                      <div
                        className="item mt-10 flex flex-col items-center w-1/4 px-2"
                        key={i}
                      >
                        <a href={`/detail/${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-auto h-64"
                          />
                        </a>
                        <a href={`/detail/${item.id}`}>{item.title}</a>
                        <span className="font-bold underline">
                          {item.price}$
                        </span>
                      </div>
                    );
                  })
                : "cc"}
            </div>
          </div>

          <div className="service mt-5 flex flex-row justify-center">
            <div className="flex flex-row items-center justify-start border border-black p-2 w-96">
              <img
                src="//theme.hstatic.net/1000253775/1000820059/14/info_img_1.png?v=567"
                alt=""
                width={42}
              />
              <span className="ml-3 font-bold text-sm">
                FREESHIP ĐƠN HÀNG TỪ 500K
              </span>
            </div>

            <div className="flex flex-row items-center justify-start border border-black p-2 w-96 mx-8">
              <img
                src="//theme.hstatic.net/1000253775/1000820059/14/info_img_2.png?v=567"
                alt=""
                width={42}
              />
              <span className="ml-3 font-bold text-sm">
                ĐỔI TRẢ TRONG VÒNG 7 NGÀY
              </span>
            </div>

            <div className="flex flex-row items-center justify-start border border-black p-2 w-96">
              <img
                src="//theme.hstatic.net/1000253775/1000820059/14/info_img_3.png?v=567"
                alt=""
                width={42}
              />
              <span className="ml-3 font-bold text-sm">
                THANH TOÁN KHI NHẬN HÀNG
              </span>
            </div>
          </div>
        </div>
      ) : (
        <h3>Chua co sp</h3>
      )}
    </div>
  );
};

export default DetailProduct;
