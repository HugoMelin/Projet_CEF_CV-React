import '../services.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faFileCode, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export default function Services () {
    useEffect(() => {
        document.title = "Mes services - John Doe"
    })

    return(
        <div>
            <div className="container-fluid banner"></div>
            <div className="container text-center">
                <h2>Mon offre de services</h2>
                <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>
                    
                <div className="row m-3 h-auto">
                    <div className='col-md-4 mb-1'>
                        <div class="card m-1">
                            <div class="card-body">
                                <h3 class="card-title"><FontAwesomeIcon className='card-icon' icon={faDisplay} /></h3>
                                <h4 class="card-subtitle mb-2 text-body-secondary text-uppercase">ux design</h4>
                                <p class="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-1'>
                        <div class="card m-1">
                            <div class="card-body">
                                <h3 class="card-title"><FontAwesomeIcon className='card-icon' icon={faFileCode}/></h3>
                                <h4 class="card-subtitle mb-2 text-body-secondary text-uppercase">développement web</h4>
                                <p class="card-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langagues <em>HTML</em>, <em>CSS</em>, JavaScript et <em>PHP</em>.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-1'>
                        <div class="card m-1">
                            <div class="card-body">
                                <h3 class="card-title"><FontAwesomeIcon className='card-icon' icon={faMagnifyingGlassDollar}/></h3>
                                <h4 class="card-subtitle mb-2 text-body-secondary text-uppercase">référencement</h4>
                                <p class="card-text">Le <strong>référencement naturel d'un site</strong>, aussi appelé <em>SEO</em>, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}