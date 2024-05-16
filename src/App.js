import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './img/favicon.png'
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";

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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-0">
              <li class="nav-item">
                <Link to="/" className='nav-link text-light'>Accueil</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Réalisations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">me contacter</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
