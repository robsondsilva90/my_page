//Statics
import "./Navbar.css";

// Imports
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list" >
          <Link className="navbar-item" to="/my_page" > <li>Home</li> </Link>
          <Link className="navbar-item" to="/mycv" > <li>Curriculo</li> </Link>
          <Link className="navbar-item" to="/projects" > <li>Projetos</li> </Link>
          <Link className="navbar-item" to="/contact" > <li>Contato</li> </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar