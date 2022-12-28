
import React from 'react';
import brand1 from '../../../images/brand/partner_1.png'
import brand2 from '../../../images/brand/partner_2.png'
import brand3 from '../../../images/brand/partner_3.png'
import brand4 from '../../../images/brand/partner_4.png'
import brand5 from '../../../images/brand/partner_5.png'
import brand6 from '../../../images/brand/partner_6.png'
import './Brand.css'

const Brand = () => {
    return (
        <div className="brand container">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
        </div>
    );
};

export default Brand;