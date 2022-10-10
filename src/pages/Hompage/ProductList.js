import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../slices/product";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const { productList, isLoading, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

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
      <div className="contain-items grid grid-cols-4 gap-10">
        {productList.length ? (
          productList.map((product, index) => {
            return (
              <NavLink className="item" to={`/detail/${product.id}`} key={index}>
                <div className="item-detail flex flex-col items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-80 w-auto hover:scale-150 ease-in-out duration-500"
                  />
                  <h3>{product.title}</h3>
                  <b>{product.price}</b>
                </div>
              </NavLink>
            );
          })
        ) : (
          <h3>Chua co sp</h3>
        )}
      </div>
    </div>
  );
};

export default ProductList;
