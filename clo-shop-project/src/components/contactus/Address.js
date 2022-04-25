import React from 'react';

//Styles
import styles from "./Address.module.css";

const Address = () => {
    return (
        <div className={styles.address}>
            <p><i className="fas fa-map-marker-alt"></i> آدرس : کرمانشاه خیابان مدرس</p>
            <p><i className='fas fa-phone'></i> شماره تماس : 09123456789</p>
            <p><i className="fas fa-envelope"></i>ایمیل : info.mehranazizi@yahoo.com</p>
        </div>
    );
};

export default Address;