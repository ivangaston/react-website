import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css'
const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Nosotros'>Nosotros</Link></li>
                <li><Link to='/Novedades'>Novedades</Link></li>
                <li><Link to='/Contacto'>Contacto</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;