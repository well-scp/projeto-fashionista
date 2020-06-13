import  React from "react";
import { useSelector } from 'react-redux'

import indisponivel from '../../assets/img-indisponivel.jpg'

import './Item.css'


const Item = () => {
    const { data } = useSelector(state => state)
    const productId = decodeURI(window.location.href.split('/')[window.location.href.split('/').length-1])
    const product = data.find( item => item.id === parseInt(productId))

    return (
        <div className="item">
            <div className="container">
                <img 
                    className='item__img'
                    src={product.image? product.image : indisponivel } alt={product.name}
                />

                <div className="item__footer">
                    <div className='item__name'>
                        {product.name}
                        {
                        product.on_sale ? 
                        <span className='item__name__discount'>{`${product.discount_percentage} OFF`}</span> 
                        : ""
                        }
                    </div>

                    <div className="item__price">
                        <p className='item__price__old'>{product.on_sale? product.regular_price : ''}</p>
                        <p className='item__price__current'>{`${product.on_sale? product.actual_price : product.regular_price}`}</p>
                        <h4>{product.installments}</h4>
                    </div>

                    <p>Escolha o tamanho!</p>
                    {console.log(product)}
                    
                    <div>
                        {product.sizes.length && product.sizes.map((tam) => (
                            <p key={tam.size}>{tam.size}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )   
};

export default Item;

