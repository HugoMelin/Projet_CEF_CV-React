import { useState } from "react"

import coder from "../img/blog/coder.jpg"
import croissance from "../img/blog/croissance.jpg"
import google from "../img/blog/google.jpg"
import screens from "../img/blog/screens.jpg"
import seo from "../img/blog/seo.jpg"
import technos from "../img/blog/technos.png"
import { useEffect } from "react"

function BlogCard () {
    const [modalData, setModalData] = useState({});
    const [modalImage, setModalImage] = useState();

    const [articles, setArticles] = useState([
        {
            id: 1,
            name: "Coder son site en HTML/CSS",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "22 août 2022",
            img : {
                src: coder,
                alt: "Coder son site en HTML/CSS"
            }
        },
        {
            id: 2,
            name: "Vendre ses produits sur le web",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "20 août 2022",
            img : {
                src: croissance,
                alt: "Vendre ses produits sur le web"
            }
        },
        {
            id: 3,
            name: "Se positionner sur Google",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "1 août 2022",
            img : {
                src: google,
                alt: "Se positionner sur Google"
            }
        },
        {
            id: 4,
            name: "Coder en responsive design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "31 juillet 2022",
            img : {
                src: screens,
                alt: "Coder en responsive design"
            }
        },
        {
            id: 5,
            name: "Technique de référencement",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "30 juillet 2022",
            img : {
                src: seo,
                alt: "Technique de référencement"
            }
        },
        {
            id: 6,
            name: "Apprendre à coder",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "12 juillet 2022",
            img : {
                src: technos,
                alt: "Apprendre à coder"
            }
        }
    ])

    return (
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 rounded">
            {articles.map((article) =>
                <div class="col my-2">
                    <div class="card h-100">
                        <img src={article.img.src} class="card-img-top" alt={article.img.alt}></img>
                    <div class="card-body">
                        <h5 class="card-title">{article.name}</h5>
                        <p class="card-text">{article.desc}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={()=> {setModalData(article); setModalImage(<img src={article.img.src} alt={article.img.alt} style={{width: 100+"%"}}></img>)}}>Lire la suite</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Publié le {article.date}</small>
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
                                <p>L'article a été écrit le {modalData.date}.</p>
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

export default function Blog () {
    useEffect(() => {
        document.title = "Mon blog - John Doe"
    })

    return (
        <div>
            <div className="container-fluid banner"></div>
            <div className="container">
                <div className="text-center">
                    <h2 className="text-uppercase">blog</h2>
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                    <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>
                </div>

                <div className="my-3">
                    <BlogCard/>
                </div>
            </div>
        </div>
    )
}