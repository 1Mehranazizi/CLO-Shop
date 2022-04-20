import React from "react";

//Styles
import styles from "./ProductDetails.module.css";

const ProductDetails = ({
  image,
  rate,
  title,
  description,
  price,
  category,
  discount,
}) => {
  const rateHandler = (rateCount) => {
    for (let i = 0; i < rateCount; i++) {
      const rateX = (rateCount / 5) * 100;
      const rateY = `${(rateX / 10) * 10}%`;
      return rateY;
    }
  };

  const discountHandler = (discount, price) => {
    const decimal = discount / 100;
    const discountNum = decimal * price;
    const newPrice = price - discountNum;
    return newPrice.toLocaleString();
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        <img src={image} alt="productImage" />
        <span className={styles.addToFavorite}>
          <i className="fas fa-heart"></i>
        </span>
        <span className={styles.share}>
          <i className="fas fa-share-alt"></i>
        </span>
      </div>
      <div className={styles.details}>
        <div className={styles.rightDetails}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.rate}>
            <div
              className={styles.rating}
              style={{ width: `${rateHandler(rate)}` }}
            ></div>
          </div>
          <div className={styles.size}>
          <label htmlFor="size">{description.size ? "سایز :" : "رنگ :"}</label>
              <select id="size">
                  {description.size ? description.size.map(item => <option key={item} value={item}>{item}</option>):
                  description.color.map(item => <option key={item} value={item}>{item}</option>)
                  }
              </select>
          </div>
          <div className={styles.used}>
              <h4>مناسب برای :</h4>
              <p>{description.used}</p>
          </div>
        </div>
        <div className={styles.leftDetails}>
            <div className={styles.buy}>
                <div className={styles.price}>
                    <p>قیمت :</p>
                    <p>{price.toLocaleString()}</p>
                </div>
                <div className={styles.discount}>
                    <p>تخفیف :</p>
                    <p>{discount} %</p>
                </div>
                <div className={styles.totalPrice}>
                    <p>قیمت با احتساب تخفیف :</p>
                    <p>{discountHandler(discount, price)}</p>
                </div>
                <div className={styles.addToCart}>
                    <button className={styles.addToCartBtn}>افزودن به سبد خرید</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
