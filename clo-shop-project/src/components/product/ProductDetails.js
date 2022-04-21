import React, { useContext } from "react";

//Styles
import styles from "./ProductDetails.module.css";

//Context
import { CartContextProvider } from "../../context/CartContext";

//Function
import { quantityItem, isInCart } from "../../helper/function";


const ProductDetails = ({ data }) => {
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

  const { state, dispatch } = useContext(CartContextProvider);
  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        <img src={data.image} alt="productImage" />
        <span className={styles.addToFavorite}>
          <i className="fas fa-heart"></i>
        </span>
        <span className={styles.share}>
          <i className="fas fa-share-alt"></i>
        </span>
      </div>
      <div className={styles.details}>
        <div className={styles.rightDetails}>
          <h2 className={styles.title}>{data.title}</h2>
          <small className={styles.category}>{data.category}</small>
          <div className={styles.rate}>
            <div
              className={styles.rating}
              style={{ width: `${rateHandler(data.rate)}` }}
            ></div>
          </div>
          <div className={styles.size}>
            <label htmlFor="size">
              {data.description.size ? "سایز :" : "رنگ :"}
            </label>
            <select id="size">
              {data.description.size
                ? data.description.size.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))
                : data.description.color.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
            </select>
          </div>
          <div className={styles.used}>
            <h4>مناسب برای :</h4>
            <p>{data.description.used}</p>
          </div>
        </div>
        <div className={styles.leftDetails}>
          <div className={styles.buy}>
            <div className={styles.price}>
              <p>قیمت :</p>
              <p>{data.price.toLocaleString()}</p>
            </div>
            <div className={styles.discount}>
              <p>تخفیف :</p>
              <p>{data.discount} %</p>
            </div>
            <div className={styles.totalPrice}>
              <p>قیمت با احتساب تخفیف :</p>
              <p>{discountHandler(data.discount, data.price)}</p>
            </div>
            <div className={isInCart(state, data.id) ? styles.plusMinusProduct : styles.addToCart}>
              {isInCart(state, data.id) ? (
                <button
                  className={styles.smallBtn}
                  onClick={() => dispatch({ type: "PLUS_ONE", payload: data })}
                >
                  <i className="fas fa-plus"></i>
                </button>
              ) : (
                <button
                  className={styles.addToCartBtn}
                  onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}
                >
                  افزودن به سبد خرید
                </button>
              )}
              {quantityItem(state, data.id) > 0 && (
                <span className={styles.quantity}>
                  {quantityItem(state, data.id)}
                </span>
              )}
              {quantityItem(state, data.id) === 1 && (
                <button
                  className={styles.trashBtn}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: data })
                  }
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              )}
              {quantityItem(state, data.id) > 1 && (
                <button
                  className={styles.smallBtn}
                  onClick={() => dispatch({ type: "MINUS_ONE", payload: data })}
                >
                  <i className="fas fa-minus"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
