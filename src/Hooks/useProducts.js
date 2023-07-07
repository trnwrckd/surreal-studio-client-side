import { useEffect, useState } from 'react';
import { apiUrl } from '../constants';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productLoaded, setProductLoaded] = useState(false);

  console.log(apiUrl);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(result => result.json())
      .then(data => {
        setProducts(data);
        setProductLoaded(true);
      });
  }, []);

  return { products, productLoaded, setProducts };
};
