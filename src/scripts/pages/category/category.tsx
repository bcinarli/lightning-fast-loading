import { applyStyles } from '../../tools/css';
import ProductList from '../../components/product-list/product-list';
import styles from './category.module.scss';

const css = applyStyles(styles);

const Category = () => {
  return (
    <div className={css('category')}>
      <ProductList />
    </div>
  );
};

export default Category;
