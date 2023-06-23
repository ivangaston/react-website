import { Link } from "react-router-dom";
const Nav=(props)=>{
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to ='Nosotros'>Nostros</Link></li>
                    <li><Link to='Novedades'>Novedades</Link></li>
                    <li><Link to='Contacto'>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;