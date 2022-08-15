import './mobile_stryle.css';

import '../Home/arrows.css'
import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";
//import img from '../../Pictures/icons/electricity_art.jpg';
import tool from "../../Pictures/icons/tool.png";
import panneau_solaire from "../../Pictures/icons/panneau-solaire.png";
import batiment from "../../Pictures/icons/batiment.png";
import Navbar from '../Navbar/navbar';

    function Home() {
        const goToSection = (id) => {
            let element = document.getElementById(id);

            element.scrollIntoView();
        }

        return (
            <div>
                <Navbar goToSection={goToSection} />
                <div className='container-top' >
                    <div className='content'>
                        <h1 className="title">Butler</h1>
                        <h3 className='description'>L'entreprise à votre service.</h3>
                        <p>Panne de courant? Construction à venir? Problème quelconque?<br/>Nous avons la solution. </p>
                         <button onClick={() => goToSection("contact")} >CONTACTEZ-NOUS</button>
                    </div>
                    <div>
                        <div class="arrow arrow-first"></div>
                        <div class="arrow arrow-second"></div>
                    </div>
                </div>

                <div className='container_items'>
                    <h3 className='subtitle'>Besoin d'éléctriciens à Bruxelles et ses alentours? </h3>
                    <p>Butler est une jeune entreprise qui offre de multiple services, 
                    allant de la réparation de panne d'éléctricité à la rénovation d'intérieur
                    en passant par la mise en place de cable éléctriques dans des chantier en construction. 
                    Butler offre ses services aussi bien aux particuliers qu'aux entreprises. </p>
                    <p>Panne d'éléctricité? Construction à venir? Réparation urgente? <br /> L'entreprise belge Butler vous apporte la solution à tous vos problèmes.</p>
                    <p>Notre équipe d'éléctriciens peuvent vous venir en aide dans tout Bruxelles ainsi qu'en flandre. <br /> Ils mettent tout en oeuvre afin de satisfaire au mieux vos attentes.</p>
                    <button href=".contact"><a href="tel:+32471682032">+32471682032</a></button>

                </div>
                <div id="services" className='container_items'>
                    <h3 className='subtitle'>Services</h3>
                        <div className="service-items">

                            <div className="service-item">
                                <img className='icon' src={tool} />
                                <p>Résolution de panne d'éléctricité</p>
                            </div>

                            <div className="service-item">
                                <img className='icon' src={panneau_solaire} />
                                <p>Mise en place de panneaux photovoltaiques</p>
                            </div><br/>

                            <div className="service-item">
                                <img className='icon' src={batiment} />
                                <p>Rénovation de bâtiments</p>
                            </div>
                            <div className="service-item">
                                <img className='icon' src={tool} />
                                <p>Résolution de panne d'éléctricité</p>
                            </div><br/>

                            <div className="service-item">
                                <img className='icon' src={panneau_solaire} />
                                <p>Mise en place de panneaux photovoltaiques</p>
                            </div>

                            <div className="service-item">
                                <img className='icon' src={batiment} />
                                <p>Rénovation de bâtiments</p>
                            </div>
                            
                        </div>

                </div>

                <div id="contact" className='container_items'>
                    <h3 className='subtitle'>Contact</h3>
                    <p className='contact-info'>Pour tout devis ou questions urgentes, veuillez nous contacter au <a href="tel:+32471682032">+32471682032</a>&nbsp;
                    ou par mail: <a href="mailto:butlercompany@gmail.com">butlercompany@gmail.com</a>.</p>
                </div>

                <div className='footer'>
                    <h3>Butler Company® - 2022</h3>
                    <h3><a href="#">Conditions d'utilisation</a></h3>
                    <h3>Design by <a href="mailto:mohamedeljelali.pro@gmail.com"> Mohamed El Jelali </a> </h3>
                </div>
            </div>
            
  );
}
export default Home;