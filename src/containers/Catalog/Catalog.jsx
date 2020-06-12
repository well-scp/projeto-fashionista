import React from 'react';

import { Loading, CatalogItem } from '../../components';

const Catalog = ({ data, isLoading }) => (
  <div className="catalog" data-testid="catalog">
    <div className="container">
  
      {isLoading
        ? (<Loading text="Carregando..." />)
        : (
          <div className="categories__content">
            {data.length && data.map((product, index) => (
              <CatalogItem
                image={product.image}
                name={product.name}
                price={product.regular_price}
                status={product.on_sale}
                priceOff={product.actual_price}
                discount={product.discount}
                sizes={product.sizes}
                key={index}
              />
            ))}
          </div>
        )}
    </div>
  </div>
);

export default Catalog;