import "../home.css"
import { useEffect } from 'react'

function Head() {
    return(
        <div className="contenair-fluid text-center bg-image d-flex flex-column justify-content-center" id="header">
            <h1 className="text-white">Bonjour, je suis John Doe</h1>
            <h2 className="text-white">Développeur web full stack</h2>
            <div>
                <a href="#about" className="btn btn-primary text-white text-decoration-none">En savoir plus</a>
            </div>
        </div>
    )
}

function About({user}) {
    return(
        <div id="about" className="container my-3 mx-auto p-3 bg-white shadow">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3 className="text-capitalize border-bottom border-4 about__title" style={{"--bs-border-color": "#0d6efd"}}>à propos</h3>
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                    Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                    <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                    <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={user.photo} alt={user.name} className="rounded mx-auto" style={{width: 100+"%"}}></img>
                    <h3>Mes compétences</h3>
                    <div className="container">
                        <p className="mb-0">HTML5 90%</p>
                        <div className="progress mb-3">
                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: 90+"%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mb-0">CSS3 80%</p>
                        <div className="progress mb-3">
                            <div class="progress-bar bg-info" role="progressbar" style={{ width: 80+"%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mb-0">JAVASCRIPT 70%</p>
                        <div className="progress mb-3">
                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: 70+"%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mb-0">PHP 60%</p>
                        <div className="progress mb-3">
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: 60+"%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mb-0">REACT 50%</p>
                        <div className="progress mb-3">
                            <div class="progress-bar" role="progressbar" style={{ width: 50+"%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default function Home(props) {
    useEffect(() => {
        document.title = "Portfolio - John Doe"
    })

    return(
        <div>
            <Head/>
            <About user={props.user}/>
        </div>
    )
}