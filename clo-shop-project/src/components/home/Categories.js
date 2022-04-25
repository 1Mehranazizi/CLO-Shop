import React from 'react';
import {Link} from "react-router-dom";

//Icons
import womans from "../../assets/img/svgexport-6.png"
import mans from "../../assets/img/svgexport-6 (1).png"
import childs from "../../assets/img/svgexport-6 (2).png"

//Styles
import styles from "./Categories.module.css";

const Categories = () => {
    return (
        <div className={styles.Categories}>
            <Link to="/shop/زنانه"><img src={womans} alt="icon" /><p>زنانه</p></Link>
            
            <Link to="/shop/مردانه"><img src={mans} alt="icon" /><p>مردانه</p></Link>
            
            <Link to="/shop/بچگانه"><img src={childs} alt="icon" /><p>بچگانه</p></Link>       
        </div>
    );
};

export default Categories;