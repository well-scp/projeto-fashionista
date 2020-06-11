import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import {} from '../actions';

import { Item } from '../containers';

const CatalogRoute = () => {
  const { content } = useSelector(state => state);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  return (
      <Item />
  );
}

export default CatalogRoute;