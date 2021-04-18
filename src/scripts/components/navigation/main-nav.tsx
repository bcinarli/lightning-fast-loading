import { NavLink } from 'react-router-dom';
import { applyStyles } from '../../tools/css';
import styles from './main-nav.module.scss';

const css = applyStyles(styles);

const MainNav = () => {
  return (
    <nav className={css('main-nav')}>
      <NavLink
        exact
        to="/"
        className={css('main-nav-item')}
        activeClassName={css('current-item')}
      >
        Home
      </NavLink>
      <NavLink
        to="/gadgets"
        className={css('main-nav-item')}
        activeClassName={css('current-item')}
      >
        Gadgets
      </NavLink>
    </nav>
  );
};

export default MainNav;
