import { useEffect, useState } from 'react';

const useProductData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('productsData.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useProductData;
