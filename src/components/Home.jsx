import "../home.css"
import aboutImg from "../img/john-doe-about.jpg"

function Head() {
    return(
        <div className="contenair-fluid text-center bg-image d-flex flex-column justify-content-center" id="header">
            <h1 className="text-white">Bonjour, je suis John Doe</h1>
            <h2 className="text-white">Développeur web full stack</h2>
            <div>
                <button type="button" class="btn btn-primary"><a href="#about" className="text-white text-decoration-none">En savoir plus</a></button>
            </div>
        </div>
    )
}

function About() {
    return(
        <div id="about" className="container my-3 mx-auto p-3 bg-white shadow">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3 className="text-capitalize border-bottom border-4 about__title" style={{"--bs-border-color": "#0d6efd"}}>à propos</h3>
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                    Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                    <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                    <p>J'avvorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={aboutImg} alt="John Doe working" style={{ width: 100+"%"}} className="rounded"></img>
                    <h3>Mes compétences</h3>
                    <div className="container">
                        <p className="mb-0">HTML5 90%</p>
                        <div className="row mb-3">
                            <div className="col-10 rounded-start" style={{height: 1.5+"rem", backgroundColor: "#DB4B4B"}}></div>
                            <div className="col-2 rounded-end" style={{height: 1.5+"rem", backgroundColor: "#CDCDCD"}}></div>
                        </div>
                        <p className="mb-0">CSS3 80%</p>
                        <div className="row mb-3">
                            <div className="col-9 rounded-start" style={{height: 1.5+"rem", backgroundColor: "#3CCDDB"}}></div>
                            <div className="col-3 rounded-end" style={{height: 1.5+"rem", backgroundColor: "#CDCDCD"}}></div>
                        </div>
                        <p className="mb-0">JAVASCRIPT 70%</p>
                        <div className="row mb-3">
                            <div className="col-8 rounded-start" style={{height: 1.5+"rem", backgroundColor: "#C1C123"}}></div>
                            <div className="col-4 rounded-end" style={{height: 1.5+"rem", backgroundColor: "#CDCDCD"}}></div>
                        </div>
                        <p className="mb-0">PHP 60%</p>
                        <div className="row mb-3">
                            <div className="col-7 rounded-start" style={{height: 1.5+"rem", backgroundColor: "#60784E"}}></div>
                            <div className="col-5 rounded-end" style={{height: 1.5+"rem", backgroundColor: "#CDCDCD"}}></div>
                        </div>
                        <p className="mb-0">REACT 50%</p>
                        <div className="row mb-3">
                            <div className="col-6 rounded-start" style={{height: 1.5+"rem", backgroundColor: "#2432AA"}}></div>
                            <div className="col-6 rounded-end" style={{height: 1.5+"rem", backgroundColor: "#CDCDCD"}}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default function Home() {
    return(
        <div>
            <Head/>
            <About/>
        </div>
    )
}