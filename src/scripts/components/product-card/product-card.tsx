import { FC } from 'react';
import { applyStyles } from '../../tools/css';
import styles from './product-card.module.scss';

const css = applyStyles(styles);

export type Product = {
  uuid: string;
  name: string;
  image: string;
  price: string;
  category: string;
};

const ProductCard: FC<Product> = ({ name, image, price, category }) => {
  const nextgen = image.split('.').slice(0, -1).join('.');

  return (
    <div className={css('product-card')}>
      <div className={css('product-card-image')}>
        <img
          src={`${IMAGE_API}/next-gen-proper-sizes/${nextgen}.webp`}
          alt={name}
          className={css('product-card-image-element')}
          loading="lazy"
        />
      </div>

      <h3 className={css('product-card-title')}>{name}</h3>
      <span className={css('product-card-price')}>{price}€</span>
      <span className={css('product-card-category')}>in {category}</span>
    </div>
  );
};

export default ProductCard;
