import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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

function Footer() {
  return(
    <div className='contenair-fluid bg-warning'>
      <div className='row m-2'>
        <div className='col-12 col-md-6 col-xl-3 my-2'>
          <address>
            <h3>John Doe</h3>
            <p>40 Rue Laure Diebold <br/>
            69009 Lyon, France</p>
            <p>Téléphone : <a href='tel:0620304050'>06 20 30 40 50</a></p>
          </address>
          <div className='fs-1'>
            <a className='me-3' rel="nofollow" href='https://github.com/github-john-doe' target='blank'>
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a className='me-3' rel="nofollow" href='https://twitter.com/home' target='blank'>
              <FontAwesomeIcon icon={faSquareTwitter}/>
            </a>
            <a rel="nofollow" href='https://www.linkedin.com/feed/' target='blank'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className='col-12 col-md-6 col-xl-3'>
          <h3>Liens utiles</h3>
          <ul className='footer__list'>
            <li><Link to="/"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Accueil</Link></li>
            <li><Link to="/#about"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>A propos</Link></li>
            <li><Link to="/services"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Services</Link></li>
            <li><Link to="/contact"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Me contacter</Link></li>
            <li><Link to="/legal"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Mention légales</Link></li>
          </ul>
        </div>
        <div className='col-12 col-md-6 col-xl-3'>
          <h3>Mes dernières réalisations</h3>
        </div>
        <div className='col-12 col-md-6 col-xl-3'>
          <h3>Mes derniers articles</h3>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
