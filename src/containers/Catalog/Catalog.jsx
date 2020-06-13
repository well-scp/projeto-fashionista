import React from 'react';

import { Loading, CatalogItem } from '../../components';

import './Catalog.css'

const Catalog = ({ data, isLoading }) => (
  <div className="catalog" data-testid="catalog">
    {isLoading
      ? (<Loading text="Carregando..." />)
      : (
        <div className="catalog__content">
          {data.length && data.map((product) => (
            <CatalogItem
              image={product.image}
              name={product.name}
              price={product.regular_price}
              status={product.on_sale}
              priceOff={product.actual_price}
              discount={product.discount_percentage}
              times={product.installments}
              sizes={product.sizes}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
      )}
  </div>
);

export default Catalog;