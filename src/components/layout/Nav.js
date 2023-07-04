import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css'
const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'activo' : undefined}>Home</ NavLink></li>
                <li><NavLink to='/Nosotros' className={({ isActive }) => isActive ? 'activo' : undefined}>Nosotros</ NavLink></li>
                <li><NavLink to='/Novedades' className={({ isActive }) => isActive ? 'activo' : undefined}>Novedades</ NavLink></li>
                <li><NavLink to='/Contacto' className={({ isActive }) => isActive ? 'activo' : undefined}>Contacto</ NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav;