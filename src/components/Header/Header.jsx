import { NavLink } from 'react-router-dom'
import css from './Header.module.css'
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

function Header() {
  return (
    <header className={css.header}>
        <nav className={css.nav}>
            <NavLink className={buildLinkClass} to='/'>Home</NavLink>
            <NavLink className={buildLinkClass} to='/movies'>Movies</NavLink>
        </nav>
    </header>
  )
}

export default Header