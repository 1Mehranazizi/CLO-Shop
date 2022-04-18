import React from 'react';
import {Link} from "react-router-dom";

//Icons
import womans from "../../assets/img/svgexport-6.png"
import mans from "../../assets/img/svgexport-6 (1).png"
import childs from "../../assets/img/svgexport-6 (2).png"
import shoes from "../../assets/img/Group 8.png";

//Styles
import styles from "./Categories.module.css";

const Categories = () => {
    return (
        <div className={styles.Categories}>
            <Link to="/"><img src={womans} alt="icon" /><p>زنانه</p></Link>
            
            <Link to="/"><img src={mans} alt="icon" /><p>مردانه</p></Link>
            
            <Link to="/"><img src={childs} alt="icon" /><p>بچگانه</p></Link>
            
            <Link to="/"><img src={shoes} alt="icon" /><p>کیف و کفش</p></Link>
            
        </div>
    );
};

export default Categories;