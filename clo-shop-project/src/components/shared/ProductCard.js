import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./ProductCard.module.css";

const ProductCard = ({ data }) => {
  const discountHandler = (discount, price) => {
    const decimal = discount / 100;
    const discountNum = decimal * price;
    const newPrice = price - discountNum;
    return newPrice.toLocaleString();
  };

  const rateHandler = (rateCount) => {
      for(let i=0 ; i < rateCount ; i++) {
          const rateX = rateCount / 5 *100;
          const rateY = `${rateX /10 *10}%`;
          return rateY; 
      }
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.cardImage}>
        <img src={data.image} alt={data.title} />
        {data.discount && (
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
        <div>
          <p className={data.discount ? styles.oldPrice : styles.price}>
            {data.price.toLocaleString()} تومان
          </p>
          {data.discount && (
            <p className={styles.price}>
              {discountHandler(data.discount, data.price)}تومان
            </p>
          )}
        </div>
      </div>
      <Link to="/" className={styles.productDetails}>
        مشاهده محصول
      </Link>
    </div>
  );
};

export default ProductCard;
