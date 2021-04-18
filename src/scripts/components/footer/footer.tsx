import { applyStyles } from '../../tools/css';
import styles from './footer.module.scss';

const css = applyStyles(styles);

const Footer = () => {
  return (
    <footer className={css('page-footer')}>
      <p>
        This is a demo app for understanding difference performance metrics
        while loading a website
      </p>
        <p>Sample images are used from unsplash.com</p>
    </footer>
  );
};

export default Footer;
