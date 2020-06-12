import React from 'react'
import { Link } from 'react-router-dom'


const CatalogItem = ({ image, name, price, status, priceOff, discount, sizes}) => (
    <div className="catalog__item">
        <Link to=''>
            <img src={image} alt={name}/>
            <p>{name}</p>
        </Link>
    </div>
);

export default CatalogItem;