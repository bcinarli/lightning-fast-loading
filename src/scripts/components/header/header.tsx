import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { applyStyles } from '../../tools/css';
import MainNav from '../navigation/main-nav';
import styles from './header.module.scss';

const css = applyStyles(styles);

const Header = () => {
  return (
    <header className={css('masthead')}>
      <Link to="/" className={css('logo')}>
        <span className={css('logo-image')}>
          <img src={logo} alt="Fast Loading Website, Lightning logo" />
        </span>
        <span className={css('logo-text')}>Fast Loading Website</span>
      </Link>
      <MainNav />
    </header>
  );
};

export default Header;
