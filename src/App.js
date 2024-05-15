import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './img/favicon.png'

function Header() {
  return(
    <header>
      <nav class="navbar navbar-expand-xl bg-dark text-uppercase">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">
            <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-1"></img>
            John Doe
          </a>
          <button class="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} className='text-light'/>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-0">
              <li class="nav-item">
                <a class="nav-link active text-light" href="#">Accueil</a>
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
      <Header></Header>
    </div>
  );
}

export default App;
