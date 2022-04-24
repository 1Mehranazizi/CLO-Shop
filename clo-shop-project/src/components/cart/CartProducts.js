import React from "react";

//Styles
import styles from "./CartProducts.module.css";

//Function
import { discountHandler, quantityItem } from "../../helper/function";

const CartProducts = ({ productData, dispatch, state }) => {
  console.log(productData);
  return (
    <div className={styles.products}>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src={productData.image} alt={productData.title} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>{productData.title}</h3>
          <small className={styles.sizeOrColo}>{productData.size}</small>
          <div className={styles.prices}>
            <p
              className={
                productData.discount > 0 ? styles.oldPrice : styles.newPrice
              }
            >
              {productData.price.toLocaleString()} <span>تومان</span>
            </p>
            {productData.discount > 0 && (
              <p className={styles.newPrice}>
                {discountHandler(productData.discount, productData.price)}
                <span>تومان</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.plusMinusProduct}>
        <button
          className={styles.smallBtn}
          onClick={() => dispatch({ type: "PLUS_ONE", payload: productData })}
        >
          <i className="fas fa-plus"></i>
        </button>
        <span className={styles.quantity}>
          {quantityItem(state, productData.id)}
        </span>
        {quantityItem(state, productData.id) === 1 && (
          <button
            className={styles.trashBtn}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            <i className="far fa-trash-alt"></i>
          </button>
        )}
        {quantityItem(state, productData.id) > 1 && (
          <button
            className={styles.smallBtn}
            onClick={() =>
              dispatch({ type: "MINUS_ONE", payload: productData })
            }
          >
            <i className="fas fa-minus"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CartProducts;
