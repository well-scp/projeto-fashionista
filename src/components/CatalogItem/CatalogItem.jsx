import React from 'react'
import { Link } from 'react-router-dom'

import indisponivel from '../../assets/img-indisponivel.jpg'

import './CatalogItem.css'


const CatalogItem = ({ image, name, price, status, priceOff, discount, times, id}) => (
    <div className="catalog__item">
        <Link to={`/${name.toLowerCase().replace(/ /g,'-')}/${id}`}>
            <figure className='catalog__item__img'>
                <span className="catalog__item__seal">{status? `${discount} OFF` : ""}</span>

                <img src={image? image : indisponivel } alt={name}/>
            </figure>
        
            <h3>{name}</h3>
            <h5>{status? price : ''}</h5>
            <p>{status? priceOff : price}</p>
            <h4>{times}</h4>

        </Link>
    </div>
);

export default CatalogItem;