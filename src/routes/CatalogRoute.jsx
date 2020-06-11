import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import {} from '../actions';

import { Catalog } from '../containers';

const CatalogRoute = () => {
  const { content } = useSelector(state => state);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?page=1&limit=10') 
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