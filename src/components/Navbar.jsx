import { useState } from "react";
import { FaBars, FaTruckMedical } from "react-icons/fa6"
import logo from "../images/LogoClara.svg"
import { Link } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src={logo} alt="" width="250px"/>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/competicoes">Competições</Link></li>
              <li><Link to="/inscricao">Inscreva-se</Link></li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;