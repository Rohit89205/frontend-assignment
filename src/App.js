import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ScrollToTop from "./components/UIElements/ScrollTop";

import Cart from "./pages/Cart";
import Topbar from "./components/UIElements/Topbar";
import UserBar from "./components/UIElements/UserBar";
import NavMenu from "./components/UIElements/Navbar";
import MobileNavbar from "./components/UIElements/MobileNavbar";
import Footer from "./components/Footer";

import { CartProvider } from './cartContext';

const App = () => {

  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer />
        <ScrollToTop />
        <Topbar />
        <UserBar />
        <NavMenu />
        <MobileNavbar />
        <Routes>
          <Route element={<Shop />} path="/" exact="true" />

          <Route element={<Product />} path="/product/:id" exact="true" />

          <Route element={<Cart />} path="/cart" exact="true" />

        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
