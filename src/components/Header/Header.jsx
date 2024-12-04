import { NavLink } from 'react-router-dom'
import css from './Header.module.css'
import { buildLinkClass } from '../../helpers/buildLinkClass'



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