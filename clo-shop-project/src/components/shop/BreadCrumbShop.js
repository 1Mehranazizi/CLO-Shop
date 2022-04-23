import React from "react";

import { Link } from "react-router-dom";

//Styles
import styles from "./BreadCrumbShop.module.css";

const BreadCrumbShop = ({sortHandler , isActive}) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <div className={styles.routes}>
          <Link to="/">کلوشاپ /</Link>
          <span className={styles.pages}>محصولات</span>
        </div>
        <div className={styles.filter}>
          <p>فیلتر بر اساس :</p>
            <div className={styles.selector}>
                <span onClick={()=> sortHandler("date")} className={isActive.date ? styles.active : styles.deactive} >جدیدترین </span>
                <span onClick={()=> sortHandler("price")} className={isActive.price ? styles.active : styles.deactive}>ارزان ترین </span>
                <span onClick={()=> sortHandler("sells")} className={isActive.sells ? styles.active : styles.deactive}>پرفروش ترین </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbShop;
