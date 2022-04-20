import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Api
import { productsAPI } from "../services/api";

//Components
import BreadCrumb from "./product/BreadCrumb";
import ProductDetails from "./product/ProductDetails";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await productsAPI());
    };
    fetchAPI();
  }, []);

  const id = useParams().id;
  const product = products[id - 1];
  return product ? (
    <div className="products-page">
      <div className="container">
        <BreadCrumb
          type={product.type}
          category={product.category}
          title={product.title}
        />
        <ProductDetails
          image={product.image}
          title={product.title}
          rate={product.rate}
          description={product.description}
          category={product.category}
          price={product.price}
          discount={product.discount}
        />
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default ProductsPage;
