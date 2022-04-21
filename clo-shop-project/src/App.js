import { Route, Routes, Navigate } from "react-router-dom";

//Components
import ProductsContextProvider from "./context/ProductsContextProvider";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";
import CartContext from "./context/CartContext";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </CartContext>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
