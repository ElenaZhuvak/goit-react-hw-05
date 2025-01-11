import { NavLink } from 'react-router-dom'
import css from './Header.module.css'
import { buildLinkClass } from '../../helpers/buildLinkClass'
import { GoHome } from "react-icons/go";
import { IoFilmOutline } from "react-icons/io5";

function Header() {
  return (
    <header className={css.header}>
        <nav className={css.nav}>
            <NavLink className={buildLinkClass} to='/'><GoHome /> Home</NavLink>
            <NavLink className={buildLinkClass} to='/movies'><IoFilmOutline /> Movies</NavLink>
        </nav>
    </header>
  )
}

export default Header