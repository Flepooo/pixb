import './App.css';
import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import phone from "./images/phone.svg";
import mail from "./images/mail.svg";
import logo from "./images/logo.svg";
import pixb from "./images/pixb.svg";
import b from "./images/b.svg";

import brand from "./images/ser/brand.svg";
import digital from "./images/ser/digital.svg";
import web from "./images/ser/web.svg";
import media from "./images/ser/media.svg";
import app from "./images/ser/app.svg";
import print from "./images/ser/print.svg";
import indoor from "./images/ser/indoor.svg";

import clients from "./images/clients.svg";
import pixbfo from "./images/pixb-fo.svg";
import socialsfo from "./images/socials-fo.svg";
import contactfo from "./images/contact-fo.svg";


function Home(){

    const about = "is a fully-fledged advertising agency, provides keys to success based on affordable  creative solutions. We established ourempire in 2018, in Alexandria, Egypt, by impassioned youth minds, and looking forward to extending our arms all over Egypt. We pride ourselves on starting our journey offering a wide scale of advertising services, and now we have boldly gone into the software world. Within years of hard work and self-improvement, we have co-operated with all business types starting from startups to huge enterprises. We know that it is not easy to find the right pixel and here you will get the pixel you need! "

    const images = [
        { url: "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { url: "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { url: "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    ];

    return (
        <div className="App">
            <header id="home">
                <div>
                    <img src={phone} alt="phone"></img>
                    0120 250 2666
                    <img src={mail} alt="mail"></img>
                    info@pixbeg.com
                </div>
            </header>
            <main>
                <nav>
                    <img src={logo} alt="phone"></img>
                    <a href="/">Home</a>
                    <a href="#about-us">About us</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact-us">Contact us</a>
                </nav>
                <div id="about-us">
                    <div className='inner'>
                        <div className='pixb'>
                            <img src={pixb} alt="pixb"></img>
                            <p>{about}</p>
                        </div>
                        <div className='slider'>
                            <SimpleImageSlider
                                width={595}
                                height={765}
                                images={images}
                                showBullets={true}
                                autoPlay={true}
                                slideDuration={1}
                            />
                        </div>
                    </div>
                </div>
                <img className='b' src={b} alt="b"></img>
                <div id="services">
                    <p className='top-txt'>Services</p>
                    <div className='ser-div'>
                        <img src={brand} alt="brand"></img>
                        <img src={digital} alt="digital"></img>
                        <img src={web} alt="web"></img>
                        <img src={media} alt="media"></img>
                        <img src={app} alt="app"></img>
                        <img src={print} alt="print"></img>
                        <img src={indoor} alt="indoor"></img>
                    </div>
                </div>
                <div id="portfolio">
                    <p className='top-txt'>Portfolio</p>
                    <div className='por-photos'>
                        <a href="/" className='por-img1'><div className='por-img'></div></a>
                        <div className='por-img'></div>
                        <a href="/" className='por-img2'><div className='por-img'></div></a>
                    </div>
                    <div className='por-photos'>
                        <div className='por-img'></div>
                        <a href="/" className='por-img3'><div className='por-img'></div></a>
                        <div className='por-img'></div>
                    </div>
                    <div className='por-photos'>
                        <a href="/" className='por-img4'><div className='por-img'></div></a>
                        <div className='por-img'></div>
                        <a href="/" className='por-img5'><div className='por-img'></div></a>
                    </div>
                </div>
                <div id="clients">
                    <p className='top-txt'>Clients</p>
                    <img src={clients} alr="clients"></img>
                </div>
                <div id="contact-us">
                    <p className='top-txt'>Contact us</p>
                    <div className='cont-div'>
                        <div className='map-div'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.938030899046!2d29.967617514475524!3d31.250138767563957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c53392d4c857%3A0x3854949bc1c99b3f!2sPIX.B%20%7C%20Marketing%20agency!5e0!3m2!1sen!2seg!4v1648193538349!5m2!1sen!2seg" className='mapp' width="500" height="722" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='cont-form'>
                            <form>
                                <p className='txt'>Name</p>
                                <input className='input' type="text" name="name" />
                                <p className='txt'>Phone</p>
                                <input className='input' type="tel" name="number" />
                                <p className='txt'>Email</p>
                                <input className='input' type="email" name="email" />
                                <p className='txt'>Service you need</p>
                                <select className='input-sel' name="Service" id="lang">
                                    <option value="Branding">Branding</option>
                                    <option value="Digital">Digital marketing</option>
                                    <option value="Web">Web/App Design</option>
                                    <option value="Media">Media Production</option>
                                    <option value="App">Web/App Development</option>
                                    <option value="Printing">Printing & packing</option>
                                    <option value="Indoor">Indoor & Outdoor installation</option>
                                </select>
                                <p className='txt'>What Did you want to know about this service ?</p>
                                <textarea className='input-l' type="text" name="txt" />
                                <input className='sub' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className='foo'>
                    <div className='social'>
                        <img src={pixbfo} alt="pix-fo"></img>
                        <img src={socialsfo} alt="social-fo" className='so'></img>
                    </div>
                    <div className='cont-foo'>
                        <img src={contactfo} alt="contact-fo"></img>
                    </div>
                    <div className='search'>
                        <p className='txt-fo'>Didn't find your goal ?</p>
                        <p className='txt-fooo'>search it</p>
                        <input className='search-inp' type="search" />
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default Home;