import { useState } from "react"

import freshFood from "../img/portfolio/fresh-food.jpg"
import restaurantAkira from "../img/portfolio/restaurant-japonais.jpg"
import espaceBienEtre from "../img/portfolio/espace-bien-etre.jpg"

function RealisationsCard () {
    const [modalData, setModalData] = useState({});
    const [modalImage, setModalImage] = useState();

    const [realisations, setRealisations] = useState([
        {
            id: 1,
            name: "Fresh food",
            desc: "Réalisation d'un site avec commande en ligne.",
            tech: "PHP et MySQL",
            img : {
                src: freshFood,
                alt: "Panier de fruits"
            }
        },
        {
            id: 2,
            name: "Restaurant Akira",
            desc: "Réalisation d'un site vitrine.",
            tech: "WordPress",
            img : {
                src: restaurantAkira,
                alt: "Menu sushis"
            }
        },
        {
            id: 3,
            name: "Espace bien-être",
            desc: "Réalisation d'un site vitrine pour un patricien de bien-être.",
            tech: "HTML/CSS",
            img : {
                src: espaceBienEtre,
                alt: "Espace bien-être"
            }
        }
    ])

    return (
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 text-center rounded">
            {realisations.map(projet =>
                <div class="col" key={projet.id}>
                    <div class="card h-100">
                        <img src={projet.img.src} class="card-img-top" alt={projet.img.alt}></img>
                    <div class="card-body">
                        <h5 class="card-title">{projet.name}</h5>
                        <p class="card-text">{projet.desc}</p>
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={()=> {setModalData(projet); setModalImage(<img src={projet.img.src} alt={projet.img.alt} style={{width: 100+"%"}}></img>)}}>Voir</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Site réalisé avec {projet.tech}</small>
                    </div>
                    </div>

                    <div id="exampleModal" class="modal" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{modalData.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {modalImage}
                                <p>{modalData.desc}</p>
                                <p>Le site a été réalisé à l'aide de {modalData.tech}.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RealisationsCard