import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../../slices/cart";
import Popup from "reactjs-popup";
import CheckoutContent from "./CheckoutContent";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const shipping = 2;
  useEffect(() => {
    let total2 = 0;
    cart.forEach((item) => {
      total2 += item.price * item.quantity;
    });
    setTotal(+total2.toFixed(2));
  }, [cart]);

  return (
    <div className="cart px-20 mt-20">
      <div className="container flex flex-row">
        <div className="col-left w-2/3 border-r px-2">
          <h3 className="h3 text-xl font-bold">Giỏ hàng</h3>
          <table className="w-full text-sm text-left ">
            <thead className="text-xs  uppercase">
              <tr>
                <th className="py-10"></th>
                <th className="py-10"></th>
                <th className="py-10">Sản phẩm</th>
                <th className="py-10">Đơn giá</th>
                <th className="py-10">Số lượng</th>
                <th className="py-10">Giá phải trả</th>
              </tr>
            </thead>

            <tbody>
              {cart.length ? (
                cart.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td>
                        <button
                          className="p-5 hover:text-red-500  "
                          onClick={() => {
                            dispatch(deleteItem(item.id));
                          }}
                        >
                          <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                      </td>
                      <td>
                        <img src={item.image} alt={item.title} width={150} />
                      </td>
                      <td>
                        <Link to={`/detail/${item.id}`}>
                          {item.title} <br />
                          <i>size:</i> {item.size}
                        </Link>
                      </td>
                      <td>{item.price}$</td>
                      <td className="quantity">
                        <div className="input-group flex flex-row">
                          <input
                            type="button"
                            defaultValue="-"
                            className="button-minus"
                            data-field="quantity"
                            onClick={() => {
                              dispatch(decreaseQuantity(item));
                            }}
                            disabled={item.quantity === 1}
                          />
                          <input
                            type="number"
                            step={1}
                            max={100}
                            value={item.quantity}
                            readOnly
                            name="quantity"
                            className="quantity-field"
                          />
                          <input
                            type="button"
                            defaultValue="+"
                            className="button-plus"
                            data-field="quantity"
                            onClick={() => {
                              dispatch(increaseQuantity(item));
                            }}
                          />
                        </div>
                      </td>
                      <td>{+(item.price * item.quantity).toFixed(2)}$</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5}>Chưa có sản phẩm trong giỏ hàng</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-right w-1/3 px-2">
          <div className="h3 text-xl font-bold">Thanh toán</div>
          <table className="w-full text-sm text-left">
            <tbody>
              <tr className="border-b border-t">
                <td className="font-bold py-10 text-base">Tổng giá sản phẩm</td>
                <td className="font-bold py-10">{total}$</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-10 text-base">Phí ship</td>
                <td className="font-bold py-10">2$</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-10 text-base">Tổng giá phải trả</td>
                <td className="font-bold py-10">
                  {total ? total + shipping : 0}$
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Popup
                    modal
                    trigger={
                      <button className="bg-black text-white py-3 w-full font-bold tracking-widest hover:scale-105 transition-all duration-300">
                        Hoàn tất đơn hàng
                      </button>
                    }
                  >
                    {(close) => <CheckoutContent close={close} total= {total ? total + shipping : 0} />}
                  </Popup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
