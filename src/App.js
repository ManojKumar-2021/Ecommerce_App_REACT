// import statement start from here
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
// import statement End here
export default function App() {
  return (
    //Routing start from here
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    //Routing End here
  );
}
