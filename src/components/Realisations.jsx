import { useState } from "react"

import freshFood from "../img/portfolio/fresh-food.jpg"
import restaurantAkira from "../img/portfolio/restaurant-japonais.jpg"
import espaceBienEtre from "../img/portfolio/espace-bien-etre.jpg"

function RealisationsCard () {
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
            {realisations.map((projet) =>
                <div class="col">
                    <div class="card h-100">
                        <img src={projet.img.src} class="card-img-top" alt={projet.img.alt}></img>
                    <div class="card-body">
                        <h5 class="card-title">{projet.name}</h5>
                        <p class="card-text">{projet.desc}</p>
                        <button type="button" class="btn btn-outline-primary">Voir</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Site réalisé avec {projet.tech}</small>
                    </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function Realisations () {
    return (
        <div>
            <div className="container-fluid banner"></div>
            <div className="container text-center">
                <h2 className="text-uppercase">Portfolio</h2>
                <p>Voici quelques-unes de mes réalisations</p>
                <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>

                <div className="my-3">
                    <RealisationsCard/>
                </div>
            </div>
        </div>
    )
}