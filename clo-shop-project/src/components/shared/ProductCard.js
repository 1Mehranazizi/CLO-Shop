import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./ProductCard.module.css";

//Functions
import { discountHandler } from "../../helper/function";
import { rateHandler } from "../../helper/function";

const ProductCard = ({ data }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardImage}>
        <img src={data.image} alt={data.title} />
        {data.discount > 0 && (
          <span className={styles.discount}>{data.discount}%</span>
        )}
      </div>
      <div className={styles.cardTitle}>
        <h3>{data.title}</h3>
        <small>{data.category}</small>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.star}>
            <div className={styles.rating} style={{width:`${rateHandler(data.rate)}`}}></div>
        </div>
        <div className={styles.prieContainer}>
          <p className={data.discount ? styles.oldPrice : styles.price}>
            {data.price.toLocaleString()} <span>تومان</span> 
          </p>
          {data.discount > 0 && (
            <p className={styles.price}>
              {discountHandler(data.discount, data.price)} <span>تومان</span>
            </p>
          )}
        </div>
      </div>
      <Link to={`/products/${data.id}`} className={styles.productDetails}>
        مشاهده محصول
      </Link>
    </div>
  );
};

export default ProductCard;
