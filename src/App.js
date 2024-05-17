import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faCircleChevronUp} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'


import logo from './img/favicon.png'
import Home from "./components/Home";
import Services from "./components/Services";
import Realisations from './components/Realisations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Legal from './components/Legal'

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

function Footer() {
  return(
    <div className='pt-4'>
      <div className='container-fluid'>
        <div className='row m-2'>
          <div className='col-12 col-md-6 col-xl-3 my-2'>
            <address>
              <h4>John Doe</h4>
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
            <h4>Liens utiles</h4>
            <ul className='footer__list'>
              <li><Link to="/"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Accueil</Link></li>
              <li><Link to="/#about"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>A propos</Link></li>
              <li><Link to="/services"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Services</Link></li>
              <li><Link to="/realisations"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Réalisations</Link></li>
              <li><Link to="/blog"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Blog</Link></li>
              <li><Link to="/contact"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Me contacter</Link></li>
              <li><Link to="/legal"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Mention légales</Link></li>
            </ul>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <h4>Mes dernières réalisations</h4>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <h4>Mes derniers articles</h4>
          </div>
        </div>
      </div>
      <p className='bg-dark text-white text-center py-2'><FontAwesomeIcon icon={faCopyright} /> Designed by John Doe</p>
      <ScrollToTopButton/>
    </div>
  )
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Fonction pour gérer l'événement de défilement
  const handleScroll = () => {
    const scrollHeight = window.pageYOffset;
    setIsVisible(scrollHeight > 300); // Ajuster la valeur 300 selon vos préférences
  };

  // Ajouter un écouteur d'événement pour le défilement
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          <FontAwesomeIcon icon={faCircleChevronUp}/>
        </button>
      )}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Header id="top"/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/realisations' element={<Realisations />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/legal' element={<Legal />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
