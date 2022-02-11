import './App.css';
import React, { Component, useState } from 'react';
import pix from './img/pix.png';
import b from './img/b.png';
import ico1 from './img/ico1.png';
import ico2 from './img/ico2.png';
import web from './img/web.svg';
import markt from './img/markt.svg';
import media from './img/media.svg';
import webdev from './img/webdev.svg';
import print from './img/print.svg';
import indoor from './img/indoor.svg';
import brand from './img/brand.svg';
import p1 from './img/1.png';
import p2 from './img/4.png';
import p3 from './img/2.png';
import p4 from './img/5.png';
import p5 from './img/3.png';
import cli1 from './img/cli-1.svg';

function Home(){

    const [ser, setSer] = useState(2);

    const txt1 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et";

    return (
        <div className="App">
            <div id='home' className='top-div'>
              <img className='icon' src={ico1} />
              <p className='contt'>0120 250 2666</p>
              <img className='icon' src={ico2} />
              <p className='cont'>info@pixbeg.com</p>
            </div>

            <nav>
                <div className='logo'>
                    <svg id="Group_35" data-name="Group 35" xmlns="http://www.w3.org/2000/svg" width="185.947" height="56.744" viewBox="0 0 185.947 56.744">
                        <g id="Group_9" data-name="Group 9" transform="translate(0)">
                            <path id="Path_38" data-name="Path 38" d="M206.421,295.411a7.1,7.1,0,0,0-.048-1.091c-.423-3.465-3.351-6.365-8.246-8.167a38.921,38.921,0,0,0-12.619-2.051,13.818,13.818,0,0,0-6.126-3.909,41.253,41.253,0,0,0-13.819-2.146c-.383,0-.766,0-1.143.012a42.1,42.1,0,0,0-14.867,2.745l-15.15,6.3c-3.58,1.489-4.183,3.729-4.2,5.009h0v14.078a8.347,8.347,0,0,0,4.965,7.631l38.873,17.236a8.349,8.349,0,0,0,7.882-.6l20.662-13.216a8.346,8.346,0,0,0,3.848-6.957h0V295.4Z" transform="translate(-130.196 -278.046)" fill="#00b0bd"/>
                            <path id="Path_39" data-name="Path 39" d="M186.36,287.753c-.71-1.634-2.553-2.984-5.542-4.088a44.032,44.032,0,0,0-27.732.568l-15.15,6.3c-1.653.687-2.529,1.6-2.43,2.552.107.982,1.11,1.935,2.916,2.674l36.136,14.79a16.006,16.006,0,0,0,6.3,1.01,13.229,13.229,0,0,0,5.821-1.4l14.453-8.043c3.473-1.932,5.126-4.344,4.824-6.662-.275-2.291-2.494-4.4-6.388-5.828a37.792,37.792,0,0,0-13.206-1.874" transform="translate(-132.628 -279.72)" fill="#fff"/>
                            <path id="Path_40" data-name="Path 40" d="M225.182,305.445a1.514,1.514,0,0,0,.933-1.534,1.862,1.862,0,0,0-1.49-1.439,8.829,8.829,0,0,0-3.562-.141,12.325,12.325,0,0,0-3.207.79l-13.173,6.4,7.726,2.376Z" transform="translate(-164.361 -289.137)" fill="#00b0bd"/>
                            <path id="Path_41" data-name="Path 41" d="M190.846,295.7a1.276,1.276,0,0,0,.807-1.355,1.737,1.737,0,0,0-1.326-1.2,7.063,7.063,0,0,0-3.189-.054,11.464,11.464,0,0,0-2.74.757l-12.637,5.492,6.507,2Z" transform="translate(-149.261 -284.876)" fill="#00b0bd"/>
                            <path id="Path_42" data-name="Path 42" d="M259.3,349.066a.381.381,0,0,1-.21-.7c.652-.429.652-.429,1.242-.828a.381.381,0,1,1,.427.63c-.593.4-.593.4-1.25.835a.386.386,0,0,1-.209.062" transform="translate(-189.237 -309.891)" fill="#fff"/>
                            <path id="Path_43" data-name="Path 43" d="M265.692,326.17c-.014,1.863.17,3.787.025,5.736a11.245,11.245,0,0,1-.561,2.907,6.284,6.284,0,0,1-1.621,2.544l0,0a.379.379,0,0,1-.52-.551,5.481,5.481,0,0,0,1.365-2.261,10.417,10.417,0,0,0,.454-2.7c.1-1.857-.124-3.737-.156-5.681a.508.508,0,0,1,1.015-.017v.017Z" transform="translate(-191.063 -299.883)" fill="#fff"/>
                            <path id="Path_44" data-name="Path 44" d="M171.066,354.216c-4.505-1.867-8.893-3.978-13.357-5.826a.761.761,0,0,1,.582-1.407l.03.013c4.433,2.06,8.717,4.35,13.109,6.391a.453.453,0,0,1-.364.829" transform="translate(-142.6 -309.639)" fill="#fff"/>
                            <path id="Path_45" data-name="Path 45" d="M186.708,361.712a.463.463,0,0,1-.184-.038l-1.617-.71a.457.457,0,1,1,.368-.837l1.617.71a.457.457,0,0,1-.184.875" transform="translate(-155.165 -315.676)" fill="#fff"/>
                            <rect id="Rectangle_12" data-name="Rectangle 12" width="2.983" height="2.983" transform="translate(41.462 47.797)" fill="#fff"/>
                            <rect id="Rectangle_13" data-name="Rectangle 13" width="2.982" height="2.982" transform="translate(38.48 44.814)" fill="#fff"/>
                            <rect id="Rectangle_14" data-name="Rectangle 14" width="2.982" height="2.982" transform="translate(44.444 44.814)" fill="#fff"/>
                            <rect id="Rectangle_15" data-name="Rectangle 15" width="2.982" height="2.982" transform="translate(44.444 50.779)" fill="#fff"/>
                            <rect id="Rectangle_16" data-name="Rectangle 16" width="2.983" height="2.982" transform="translate(47.427 41.832)" fill="#fff"/>
                            <rect id="Rectangle_17" data-name="Rectangle 17" width="2.983" height="2.983" transform="translate(47.427 47.797)" fill="#fff"/>
                            <rect id="Rectangle_18" data-name="Rectangle 18" width="2.983" height="2.982" transform="translate(41.462 50.779)" fill="#00b0bd"/>
                            <rect id="Rectangle_19" data-name="Rectangle 19" width="2.982" height="2.982" transform="translate(44.444 53.761)" fill="#00b0bd"/>
                            <rect id="Rectangle_20" data-name="Rectangle 20" width="2.982" height="2.982" transform="translate(38.48 53.761)" fill="#00b0bd"/>
                        </g>
                        <g id="Group_10" data-name="Group 10" transform="translate(86.614 10.079)">
                            <g id="Group_7" data-name="Group 7" transform="translate(0.637)">
                            <path id="Path_33" data-name="Path 33" d="M127.162,415.371c0,4.356-2.817,6.941-7.522,6.941H114.7v7.812h-5.257V408.459H119.64C124.345,408.459,127.162,411.043,127.162,415.371Zm-5.576,0c0-1.539-1.1-2.44-2.933-2.44H114.7v4.908h3.95C120.482,417.839,121.586,416.939,121.586,415.371Z" transform="translate(-109.446 -408.459)" fill="#b0bec5"/>
                            <path id="Path_34" data-name="Path 34" d="M157.416,408.459h5.256v21.665h-5.256Z" transform="translate(-131.449 -408.459)" fill="#b0bec5"/>
                            <path id="Path_35" data-name="Path 35" d="M196.341,430.124l-4.879-7.406-4.821,7.406h-6.1l7.7-11.094-7.028-10.571h5.866l4.385,6.854,4.414-6.854h5.866l-7.057,10.571,7.725,11.094Z" transform="translate(-142.056 -408.459)" fill="#b0bec5"/>
                            <path id="Path_36" data-name="Path 36" d="M232.159,441.529a2.937,2.937,0,1,1,2.933,2.788A2.615,2.615,0,0,1,232.159,441.529Z" transform="translate(-165.731 -422.362)" fill="#b0bec5"/>
                            <path id="Path_37" data-name="Path 37" d="M276.757,423.938c0,3.892-2.643,6.186-7.174,6.186H259.041V408.459h9.526c4.531,0,7.174,2.178,7.174,5.808a5.147,5.147,0,0,1-2.468,4.153A5.929,5.929,0,0,1,276.757,423.938Zm-9.293-11.007H264.3v4.1h3.166c1.684,0,2.7-.784,2.7-2.062S269.148,412.931,267.463,412.931Zm3.717,10.426c0-1.452-1.017-2.295-2.73-2.295H264.3v4.589h4.182C270.164,425.651,271.181,424.809,271.181,423.357Z" transform="translate(-178.061 -408.459)" fill="#00b0bd"/>
                            </g>
                            <text id="creative_advertising_agency" data-name="creative advertising agency" transform="translate(0 34.894)" fill="#b0bec5" font-size="7" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">creative advertising agency</tspan></text>
                        </g>
                    </svg>
                </div>

                <div className='header-cont'>
                    <a className='link-txt-sel' href="#home">Home</a>
                    <p className='link-txt'>About us</p>
                    <a className='link-txt' href="#services">Services</a>
                    <a className='link-txt' href="#portfolio">Portfolio</a>
                    <a className='link-txt' href="#clients">Clients</a>
                    <a className='link-txt' href="#contact-us">Contact us</a>
                </div>
            </nav>

            <div id='main'>
                <div className='home-main'>
                    <div className='content'>
                        <img className='pix-img' src={pix} />
                        <div className='disc'>
                            <p className='disc-p'>
                            is a fully-fledged advertising agency, provides keys to
                            success based on affordable  creative solutions. We
                            established ourempire in 2018, in Alexandria, Egypt,
                            by impassioned youth minds, and looking forward to
                            extending our arms all over Egypt.
                            We pride ourselves on starting our journey offering a 
                            wide scale of advertising services, and now we have
                            boldly gone into the software world. Within years of hard
                            work and self-improvement, we have co-operated with
                            all business types starting from startups to huge enterprises.
                            We know that it is not easy to find the right pixel and here
                            you will get the pixel you need! 
                            </p>
                        </div>
                    </div>
                    <div className='slider-div'> 
                        <div className='slider-img'></div>
                    </div>
                </div>
            </div>


            <div id="services">
                <div className='txt-ser'><p className='ser-p'>Services</p></div>
                <div className="ser-main">
                    <div className='ser-selected'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="348.452" viewBox="0 0 220 348.452">
                            <g id="Group_501" data-name="Group 501" transform="translate(-373 -1765.59)">
                                <g id="Group_1" data-name="Group 1" transform="translate(392.779 1765.59)">
                                <path id="Path_1" data-name="Path 1" d="M915.1-2655.183a67.838,67.838,0,0,0-47.658-20.285,67.76,67.76,0,0,0-48.731,19.665,67.722,67.722,0,0,0-20.43,48.378,68.259,68.259,0,0,0,23.383,51.641A48.98,48.98,0,0,1,838.661-2519v34.434a23.9,23.9,0,0,0,23.875,23.875h8.012a23.9,23.9,0,0,0,23.873-23.875v-33.994a48.628,48.628,0,0,1,16.672-36.95,68.227,68.227,0,0,0,23.706-51.711A67.843,67.843,0,0,0,915.1-2655.183Zm-48.621,82.57h-3.188a3.164,3.164,0,0,1-3.16-3.162,3.164,3.164,0,0,1,3.16-3.16,3.192,3.192,0,0,1,3.188,3.188Zm.06,28.569a4.811,4.811,0,0,1,4.807,4.807v16.343h-9.614v-16.343A4.811,4.811,0,0,1,866.541-2544.044Zm18.266,30.764v7.069H848.274v-7.069ZM848.274-2496.6h36.533v7.069H848.274Zm22.271,26.3h-8.01a14.283,14.283,0,0,1-13.48-9.613h34.97A14.283,14.283,0,0,1,870.546-2470.3Zm34.27-92.484a58.058,58.058,0,0,0-19.853,39.89h-4v-16.343a14.39,14.39,0,0,0-4.871-10.793c0-.021,0-.041,0-.063v-15.8a15.454,15.454,0,0,0,6.469-12.573v-7.445a18.6,18.6,0,0,0-18.574-18.574h-8.664a4.806,4.806,0,0,0-4.807,4.807,4.807,4.807,0,0,0,4.807,4.808h8.664a8.969,8.969,0,0,1,8.96,8.96v1.769a12.776,12.776,0,0,0-9.657-4.407,12.789,12.789,0,0,0-12.774,12.776A12.789,12.789,0,0,0,863.292-2563h3.188v9.344a14.435,14.435,0,0,0-14.36,14.418v16.343h-3.979a58.764,58.764,0,0,0-20.151-40.132,58.636,58.636,0,0,1-20.093-44.368,58.173,58.173,0,0,1,17.56-41.557,58.189,58.189,0,0,1,41.861-16.9,58.86,58.86,0,0,1,57.867,58.639A58.627,58.627,0,0,1,904.815-2562.784Z" transform="translate(-766.957 2706.799)" fill="#00b0bd"/>
                                <path id="Path_2" data-name="Path 2" d="M963.141-2617.314h-.075a4.8,4.8,0,0,0-4.839,4.751A4.828,4.828,0,0,0,963-2607.7h.132a4.785,4.785,0,0,0,4.781-4.75A4.826,4.826,0,0,0,963.141-2617.314Z" transform="translate(-862.586 2672.026)" fill="#00b0bd"/>
                                <path id="Path_3" data-name="Path 3" d="M1012.405-2604.189a4.807,4.807,0,0,0-6.54,1.863,4.807,4.807,0,0,0,1.863,6.538,35.316,35.316,0,0,1,18.133,30.83,4.806,4.806,0,0,0,4.807,4.807,4.807,4.807,0,0,0,4.807-4.807A44.943,44.943,0,0,0,1012.405-2604.189Z" transform="translate(-890.707 2664.542)" fill="#00b0bd"/>
                                <path id="Path_4" data-name="Path 4" d="M960.886-2730.784a4.807,4.807,0,0,0,4.807-4.807v-12.979a4.806,4.806,0,0,0-4.807-4.806,4.807,4.807,0,0,0-4.807,4.806v12.979A4.807,4.807,0,0,0,960.886-2730.784Z" transform="translate(-861.303 2753.376)" fill="#00b0bd"/>
                                <path id="Path_5" data-name="Path 5" d="M1177.288-2517.677H1164.31a4.807,4.807,0,0,0-4.807,4.808,4.807,4.807,0,0,0,4.807,4.807h12.978a4.806,4.806,0,0,0,4.807-4.807A4.807,4.807,0,0,0,1177.288-2517.677Z" transform="translate(-982.928 2612.454)" fill="#00b0bd"/>
                                <path id="Path_6" data-name="Path 6" d="M738.166-2517.677H725.187a4.807,4.807,0,0,0-4.807,4.808,4.806,4.806,0,0,0,4.807,4.807h12.979a4.807,4.807,0,0,0,4.807-4.807A4.807,4.807,0,0,0,738.166-2517.677Z" transform="translate(-720.38 2612.454)" fill="#00b0bd"/>
                                <path id="Path_7" data-name="Path 7" d="M1108.127-2372.426a4.808,4.808,0,0,0-6.8,0,4.808,4.808,0,0,0,0,6.8l9.178,9.178a4.8,4.8,0,0,0,3.4,1.408,4.8,4.8,0,0,0,3.4-1.408,4.808,4.808,0,0,0,0-6.8Z" transform="translate(-947.305 2526.45)" fill="#00b0bd"/>
                                <path id="Path_8" data-name="Path 8" d="M800-2666.96a4.793,4.793,0,0,0,3.4,1.408,4.789,4.789,0,0,0,3.4-1.408,4.8,4.8,0,0,0,0-6.8l-9.176-9.179a4.813,4.813,0,0,0-6.8,0,4.81,4.81,0,0,0,0,6.8Z" transform="translate(-761.654 2712.101)" fill="#00b0bd"/>
                                <path id="Path_9" data-name="Path 9" d="M1110.507-2682.934l-9.176,9.176a4.807,4.807,0,0,0,0,6.8,4.792,4.792,0,0,0,3.4,1.408,4.792,4.792,0,0,0,3.4-1.408l9.176-9.178a4.807,4.807,0,0,0,0-6.8A4.8,4.8,0,0,0,1110.507-2682.934Z" transform="translate(-947.306 2712.102)" fill="#00b0bd"/>
                                <path id="Path_10" data-name="Path 10" d="M800-2372.426l-9.176,9.176a4.807,4.807,0,0,0,0,6.8,4.8,4.8,0,0,0,3.4,1.408,4.8,4.8,0,0,0,3.4-1.408l9.176-9.178a4.806,4.806,0,0,0,0-6.8A4.806,4.806,0,0,0,800-2372.426Z" transform="translate(-761.656 2526.45)" fill="#00b0bd"/>
                                </g>
                                <text id="BRANDING" transform="translate(373 2104.042)" fill="#182b37" font-size="41" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">BRANDING</tspan></text>
                            </g>
                        </svg>

                    </div>
                    <div className='ser-secn'>
                        <div className='ser-top'>
                            <div className='ser-icon' onClick={() => setSer(2)}>{ser == 1 ? (<img src={brand} />) : (<img src={web} />)}</div>
                            <div className='ser-icon'><img src={markt} /></div>
                            <div className='ser-icon'><img src={media} /></div>
                            <div className='ser-icon'><img src={webdev} /></div>
                            <div className='ser-icon'><img src={print} /></div>
                            <div className='ser-icon'><img src={indoor} /></div>
                        </div>
                        <div className='ser-down'>
                            <p className='disc-p'>{txt1}</p>
                            <p className='disc-p'>{txt1}</p>

                            <div className='p-div'><img src={b} /></div>
                        </div>

                    </div>
                </div>
            </div>

            <div id="portfolio">
                <div className='txt-ser'><p className='ser-p'>Portfolio</p></div>
                <div className='por-main'>
                    <div className='por-img'><img src={p1} className="pori"/></div>
                    <div className='por-img'></div>
                    <div className='por-img'><img src={p2} className="pori"/></div>
                    <div className='por-img'></div>
                    <div className='por-img'><img src={p3} className="pori"/></div>
                    <div className='por-img'></div>
                    <div className='por-img'><img src={p4} className="pori"/></div>
                    <div className='por-img'></div>
                    <div className='por-img'><img src={p5} className="pori"/></div>
                </div>
            </div>

            <div id="clients">
                <div className='txt-ser'><p className='ser-p'>Clients</p></div>
                <div className='cli-main'><img src={cli1} className="cli-img"/></div>
            </div>
            
            <div id="contact-us">
                 <div className='txt-ser'><p className='ser-p'>Contact us</p></div>
                <div className='cont-main'>
                    <div ></div>
                </div>
            </div>

        </div>
    );
};


export default Home;