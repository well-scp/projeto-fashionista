import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../actions/actions';

import { Catalog } from '../containers';

const CatalogRoute = () => {
  const { content } = useSelector(state => state);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog') 
      .then((res) => res.json())
      .then(data => dispatch(getItems(data)));
    setIsLoading(false)
  }, [dispatch]); 

  return (
      <Catalog
        isLoading={isLoading}
        data={content} 
      />
  );
}

export default CatalogRoute;