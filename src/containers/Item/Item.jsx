import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SizeButton } from "../../components";
import { addToBag } from '../../actions/actions'

import indisponivel from "../../assets/img-indisponivel.jpg";
import "./Item.css";

const Item = () => {
  const { data, sizeSelected, bag } = useSelector((state) => state);
  const [emptyBag, setEmptyBag] = useState(false)
  const dispatch = useDispatch()

  const productId = window.location.href.split("/")[window.location.href.split("/").length - 1];
  const product = data.find((item) => item.id === parseInt(productId));

  const handleClickBag = () => {
    if (sizeSelected !== '') {
        product.size = sizeSelected
        dispatch(addToBag(product))
        setEmptyBag(false)
    } else {
        setEmptyBag(true)
    }
  }

  return (
    <div className="item">
      <div className="container">
        <img
          className="item__img"
          src={product.image ? product.image : indisponivel}
          alt={product.name}
        />

        <div className="item__footer">
          <div className="item__name">
            {product.name}
            {product.on_sale 
            ? <span className="item__name__discount">{`${product.discount_percentage} OFF`}</span>
            : ""}
          </div>

          <div className="item__price">
            <p className="item__price__old">
              {product.on_sale ? product.regular_price : ""}
            </p>
            <p className="item__price__current">{`${
              product.on_sale ? product.actual_price : product.regular_price
            }`}</p>
            <h4>{product.installments}</h4>
          </div>

          <p className='item__size'>{'Escolha o tamanho! 😉'}</p>
          
          <span>
            {`${emptyBag? 'É necesário escolher um tamanho! 😀' : ''}`}
          </span>

          <div>
            {product.sizes.length &&
              product.sizes.map((tam) => (
                <SizeButton
                  size={tam.size}
                  have={tam.available}
                  key={tam.size}
                />
              ))}
          </div>

          <button onClick={handleClickBag} className="item__bag">Adicionar à Sacola</button>
        </div>
      </div>
    </div>
  );
};

export default Item;