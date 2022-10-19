import { Link } from "react-router-dom"
 
const Navbar = ()=> {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" ><i className="fa-solid fa-house icon"></i>Home</Link>
                    </li>
                    <li>
                        <Link to="/contacto"><i className="fa-solid fa-envelope icon"></i>Contacto</Link>
                    </li>
                </ul>
            </nav>

            <Link to="/" className="logo">
                <h3><i class="fa-solid fa-cake-candles icon"></i>Happy Cake</h3>
            </Link>
        </header>
    )
}
export default Navbar