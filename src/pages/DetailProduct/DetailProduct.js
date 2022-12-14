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

      productRecentArr.forEach((item, index) => {
        if (!item.id) {
          productRecentArr.splice(index, 1);
        }
      });
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
        <div className="loading">??ang t???i</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-5 mt-20">
        <div className="loading">C?? l???i x???y ra</div>
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
              className="w-1/3 h-40 md:w-2/3 md:h-auto md:p-20 p-10 "
            />
            <div className="prodcut-info w-1/2 md:w-1/3">
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
                <h5 className="text-sm">M??u s???c</h5>
                <div className="color-item flex flex-row items-center border border-black w-fit mt-2 mb-3">
                  <img
                    src="https://product.hstatic.net/1000253775/product/img_1377_15c97d803d4440739926c2932734cd9b_master.jpg"
                    alt=""
                    className="w-10"
                  />

                  <span className="px-7 text-sm color-text">
                    Tr???ng
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
                <h5 className="text-sm mt-2">K??ch th?????c</h5>
                <div className="size-container flex flex-row mt-2 mb-5">
                  <button
                    id="size1"
                    className="size-item border border-gray-300 py-2 px-2 text-xs md:text-base md:w-10 mr-3 checked"
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
                    className="size-item border border-gray-300 py-2 px-2 text-xs md:text-base md:w-10 mr-3"
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
                    className="size-item border border-gray-300 py-2 px-2 text-xs md:text-base md:w-10 mr-3"
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
                    className="size-item border border-gray-300 py-2 px-2 text-xs md:text-base md:w-10 mr-3"
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
                <button className="bg-black text-white uppercase font-bold py-2 px-1 md:px-10 rounded-md text-xs md:w-72 text-left">
                  H?????ng d???n ch???n size
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
                ?????t h??ng
              </button>

              <div className="flex flex-row items-center border border-gray-300 rounded-lg px-2 py-5 mt-4">
                <div className="flex flex-col items-center">
                  <img
                    src="https://theme.hstatic.net/1000253775/1000820059/14/info_img_1_home.png?v=567"
                    width={52}
                    alt=""
                  />
                  <span>FREESHIP To??n Qu???c ????n H??ng T??? 500K</span>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://theme.hstatic.net/1000253775/1000820059/14/info_img_2_home.png?v=567"
                    width={32}
                    alt=""
                  />
                  <span>???????c Ki???m Tra H??ng Tr?????c Khi Thanh To??n</span>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://theme.hstatic.net/1000253775/1000820059/14/info_img_3_home.png?v=567"
                    width={32}
                    alt=""
                  />
                  <span>?????i Tr??? D??? D??ng, Nhanh Ch??ng</span>
                </div>
              </div>

              <div className="product-info">
                <h3 className="font-bold">Th??ng tin s???n ph???m</h3>
                <p className="mt-3 text-sm">{productDetail.description}</p>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 mt-20 px-8 gap-8">
            <div className="grid-item border-t-2 border-gray-400 pt-2">
              <h3 className="mb-2">CH??NH S??CH GIAO NH???N - ?????I TR??? H??NG</h3>
              <p>
                - Free ship cho ????n h??ng tr??n 500,000??. <br />
                - M???c ph??: 20,000?? cho ????n h??ng d?????i 500,000?? <br />
                - ???????c ki???m tra h??ng tr?????c khi nh???n h??ng <br />
                - ?????i / Tr??? trong v??ng 7 ng??y k??? t??? khi nh???n h??ng <br />
                - Kh??ng ??p d???ng ?????i/tr???
                <br />
                s???n ph???m trong CTKM - Mi???n ph?? ?????i tr??? n???u l???i sai s??t t??? ph??a
                160store.com
                <br />
              </p>
            </div>

            <div className="grid-item border-t-2 border-gray-400 pt-2">
              <h3 className="mb-2">??U ????I MEMBER</h3>
              <p>
                - Th??nh vi??n Silver ???????c gi???m 5% khi t??ch ????? 4 tri???u <br />
                - Th??nh vi??n Gold ???????c gi???m 10% khi t??ch ????? 12 tri???u <br />
                - Th??nh vi??n Diamond ???????c gi???m 15% khi t??ch ????? 30 tri???u <br />
              </p>
            </div>

            <div className="grid-item border-t-2 border-gray-400 pt-2">
              <h3 className="mb-2">?????A CH??? C???A H??NG</h3>
              <p>
                ??? H?? N???i: <br />
                - s??? 26 ph??? L?? ?????i H??nh, P L?? ?????i H??nh, Q Hai B?? Tr??ng, H?? N???i
                <br />- s??? 2 ng?? 232 T??n ?????c Th???ng, P.H??ng B???t, Q.?????ng ??a, H??
                N???i ??? ???? N???ng: 144 L?? T??? Tr???ng, P.Thu???n Ph?????c, Q.H???i Ch??u, TP.????
                N???ng <br />
                <br />
                ??? TP.H??? Ch?? Minh: - 391/375 Tr???n H??ng ?????o, P.C???u Kho, Q.1 <br />
                - 111 Khu??ng Vi???t, P.Ph?? Trung, Q.T??n Ph?? <br />
                - 297/3 T?? Hi???n Th??nh, P.13, Q.10 - 401 Phan X??ch Long, P.3,
                Q.Ph?? Nhu???n <br />
                - 94 L?? V??n Th???, Q.G?? V???p (g???n ch??? H???nh Th??ng T??y) <br /> <br />
                ??? Bi??n H??a: 157 Phan Trung (???????ng 5 c??), P.T??n Mai, TP.Bi??n H??a
                <br /> <br />
                ??? C???n Th??: 35 Tr???n Ph??, Q.Ninh Ki???u, TP.C???n Th??. (g???n Vincom
                H??ng V????ng) <br /> <br />
                Hotline: 028.7100.6789
              </p>
            </div>
          </div>

          <div className="recent-view mt-20 px-2 md:px-0">
            <h3 className="font-bold uppercase text-4xl text-center">
              s???n ph???m v???a xem
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
                            className="md:w-auto md:h-64 w-36 h-36"
                          />
                        </a>
                        <a href={`/detail/${item.id}`}>
                          {window.innerWidth < 768
                            ? item.title.length > 20
                              ? item.title.substring(0, 20) + "..."
                              : item.title
                            : item.title.length > 100
                            ? item.title.substring(0, 100) + "..."
                            : item.title}
                        </a>
                        <span className="font-bold underline">
                          {item.price ? item.price + "$" : ""}
                        </span>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>

          <div className="service mt-5 flex flex-row flex-wrap justify-center">
            <div className="flex flex-row items-center justify-start border border-black p-2 w-full md:w-96">
              <img
                src="//theme.hstatic.net/1000253775/1000820059/14/info_img_1.png?v=567"
                alt=""
                width={42}
              />
              <span className="ml-3 font-bold text-sm">
                FREESHIP ????N H??NG T??? 500K
              </span>
            </div>

            <div className="flex flex-row items-center justify-start border border-black p-2 w-full md:w-96 md:mx-8">
              <img
                src="//theme.hstatic.net/1000253775/1000820059/14/info_img_2.png?v=567"
                alt=""
                width={42}
              />
              <span className="ml-3 font-bold text-sm">
                ?????I TR??? TRONG V??NG 7 NG??Y
              </span>
            </div>

            <div className="flex flex-row items-center justify-start border border-black p-2 w-full md:w-96">
              <img
                src="//theme.hstatic.net/1000253775/1000820059/14/info_img_3.png?v=567"
                alt=""
                width={42}
              />
              <span className="ml-3 font-bold text-sm">
                THANH TO??N KHI NH???N H??NG
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
