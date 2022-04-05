import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";
import ShopCart from "./page/ShopCart";
import ProductInfo from "./page/ProductInfo";
import NotFound from "./page/NotFound";
import.meta.url




const App = () => {
    return (
        <div>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/productInfo" element={<ProductInfo />} />
                    <Route path="/ShopCart" element={<ShopCart />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}
 
export default App;

