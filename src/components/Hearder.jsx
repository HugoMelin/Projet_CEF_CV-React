import '../css/header.css'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../img/favicon.png'

function Header() {
    return(
      <header>
        <nav class="navbar navbar-expand-xl bg-dark text-uppercase">
          <div class="container-fluid">
            <Link to="/" className='navbar-brand text-light'>
              <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-1"></img>
              John Doe
            </Link>
            <button class="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} className='text-light'/>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-0" style={{ "--bs-navbar-active-color" : "#0d6efd", "--bs-navbar-hover-color" : "#0d6efd" }}>
                <li class="nav-item">
                  <Link to="/" className='nav-link'>Accueil</Link>
                </li>
                <li class="nav-item">
                  <Link to="/services" className='nav-link'>Services</Link>
                </li>
                <li class="nav-item">
                  <Link to="/realisations" className='nav-link'>Réalisations</Link>
                </li>
                <li class="nav-item">
                  <Link to="/blog" className='nav-link'>Blog</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" className='nav-link'>Me contacter</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }

export default Header