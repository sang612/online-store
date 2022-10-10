import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductByCategory } from "../../slices/product";
import Search from "../Hompage/Search";

const ProductByCategory = () => {
  const { productList, isLoading, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getProductByCategory(categoryName));
  }, [categoryName]);

  if (isLoading) {
    return (
      <div className="p-5 mt-20">
        <Search />
        <div className="loading">Đang tải</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-5 mt-20">
        <Search />
        <div className="loading">Có lỗi xảy ra</div>
      </div>
    );
  }

  return (
    <div className="p-5 mt-14">
      <Search />
      <div className="contain-items grid grid-cols-4 gap-10 mt-14">
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

export default ProductByCategory;
