import React, { useState, useEffect } from "react";

//Styles
import styles from "./Shop.module.css";

//API
import { productsAPI } from "../services/api";

//Loading
import Loading from "./shared/Loading";

//Components
import ProductCard from "./shared/ProductCard";
import BreadCrumbShop from "./shop/BreadCrumbShop";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const [isActive , setIsActive] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await productsAPI());
    };
    fetchAPI();
  }, []);

  const sortHandler = (type) => {
    if(type === "date") {
      const sortByDate = products.sort((a, b) => parseFloat(b.date) - parseFloat(a.date))
      setSortBy(sortByDate);
      setIsActive({date:true})
    }
    if(type === "price") {
      const sortByPrice = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      setSortBy(sortByPrice);
      setIsActive({price:true})
    }
    if(type === "sells") {
      const sortBySells = products.sort((a, b) => parseFloat(b.sells) - parseFloat(a.sells))
      setSortBy(sortBySells);
      setIsActive({sells:true})

    }
  }

  return (
    <div className="container">
      <BreadCrumbShop sortHandler={sortHandler} isActive={isActive} />
      <div className={styles.shopPage}>
        <aside className={styles.filterContainer}>
          <div className={styles.fiter}></div>
        </aside>
        <main className={styles.mainContainer}>
          <div className={styles.products}>
            {sortBy.length > 0 ? (
              sortBy.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
