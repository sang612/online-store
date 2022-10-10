import "./_Playground/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Hompage/Homepage";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import HomeTemplate from "./templates/HomeTemplate";
import Cart from "./pages/Cart/Cart";
import ProductByCategory from "./pages/Category/ProductByCategory";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/category/:categoryName"
            element={<ProductByCategory />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
