import "../contact.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react"

function TitreSection({titre}) {
    return (
        <div className="border-bottom border-3" style={{"--bs-border-color": "#0d6efd"}}>
            <h3>{titre}</h3>
        </div>
    )
}

export default function Contact () {
    useEffect(() => {
        document.title = "Me contacter - John Doe"
    })

    return (
        <div className="container-fluid containerBg py-3">
            <div className="container contact rounded py-5">
                <div className="text-center">
                    <h2 className="text-uppercase">me contacter</h2>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>
                </div>

                <div className="row my-4 mx-3">
                    <div className="col-12 col-md-6">
                        <TitreSection titre="Formulaire de contact"/>
                        <form className="mt-4">
                            <div class="form-group my-2">
                                <input type="text" class="form-control" id="nom" placeholder="Nom" required></input>
                            </div>
                            <div class="form-group my-2">
                                <input type="email" class="form-control" id="email" placeholder="Votre adresse e-mail" required></input>
                            </div>
                            <div class="form-group my-2">
                                <input type="tel" class="form-control" id="telephone" placeholder="Votre numéro de téléphone" required></input>
                            </div>
                            <div class="form-group my-2">
                                <input type="text" class="form-control" id="sujet" placeholder="Sujet" required></input>
                            </div>
                            <div class="form-group my-2">
                                <textarea class="form-control" id="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary my-2">Envoyer</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <TitreSection titre="Mes coordonnées"/>
                        <address className="h-auto mt-4">
                            <p><FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold, 69009 Lyon, France</p>
                            <p><FontAwesomeIcon icon={faMobileScreenButton} /> 06 20 30 40 50</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619976!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1715978654018!5m2!1sfr!2sfr" width="100%" height="240px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )
}