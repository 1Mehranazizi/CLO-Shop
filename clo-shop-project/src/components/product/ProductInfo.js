import React from "react";

//Styles
import styles from "./ProductInfo.module.css";

const ProductInfo = ({ description }) => {
  return (
    <div className={styles.productInfo}>
      <h3>مشخصات :</h3>
      <table className={styles.tableinfo}>
        <tr>
          <td>جنس :</td>
          <td>{description.gender}</td>
        </tr>
        <tr>
          <td>برند :</td>
          <td>{description.brand}</td>
        </tr>
        <tr>
          <td>کشور سازنده :</td>
          <td>{description.madein}</td>
        </tr>
        {description.height && (
          <tr>
            <td>ارتفاع :</td>
            <td>{description.height}</td>
          </tr>
        )}
        <tr>
          <td>مورد استفاده :</td>
          <td>{description.used}</td>
        </tr>
        <tr>
          <td>طرح :</td>
          <td>{description.plan}</td>
        </tr>
      </table>
    </div>
  );
};

export default ProductInfo;
