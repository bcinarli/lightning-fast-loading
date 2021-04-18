import { useState, useEffect } from 'react';
import { applyStyles } from '../../tools/css';
import ProductCard from '../product-card/product-card';
import type { Product } from '../product-card/product-card';
import styles from './product-list.module.scss';

const css = applyStyles(styles);

type Products = Product[];

const ProductList = () => {
  const [products, setProducts] = useState([] as Products);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API}/gadgets`);
      const fetchedProducts = await response.json();

      setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <div className={css('product-list')}>
      {products.map((product) => (
        <ProductCard key={product.uuid} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
