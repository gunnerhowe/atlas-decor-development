import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./landing.module.css";
import Image from 'next/image';
import axios from 'axios';
import OUT from '../gallery/images/sign_out.svg';
import CHECK from '../gallery/images/check.svg';
import { getProviders, signIn, getSession, useSession } from "next-auth/react";
//import React from 'react';
//import { Html, Head, Main, NextScript } from 'next/document'
//import styles from './document.module.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import LOGO_BLACK from '../gallery/images/logo_black.svg';
import GOOGLE from '../gallery/images/Google.svg';
import FACEBOOK from '../gallery/images/Facebook.svg';

import CONFETTI from '../gallery/images/confetti.svg'

export default function Landing() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setpassWord] = useState("");
    const [CpassWord, setCpassWord] = useState("");
    const [passError, setpassError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [emailRes, setEmailRes] = useState([]);
    const [blankBlank, setblankBlank] = useState(false);
    const [showCar, setShowCar] = useState(false);

    const addUser = async () => {
        const name = (firstName + ' ' + lastName);
        const updateData = await axios.post('/api/credentials/signup',{
          name: name,
          email: email,
          password: passWord
        });
        setSuccess(true)
      }

    const loadIt = async () => {

        const updateData = await axios.post('/api/credentials/checkEmail',{
          email: email
        });
    
        if (passWord != CpassWord) {
          setpassError(true);
          setEmailError(false);
          setblankBlank(false);
        } else if (passWord == "") {
          setblankBlank(true);
          setpassError(false);
          setEmailError(false);
        } else if (CpassWord == "" ) {
          setblankBlank(true);
          setpassError(false);
          setEmailError(false);
        } else if (!updateData.data) {
          addUser();
          setpassError(false);
          setEmailError(false);
          setblankBlank(false);
        } else if (updateData.data.email == email && !updateData.data.password) {
          addUser();
          setpassError(false);
          setEmailError(false);
          setblankBlank(false);
        } else if (updateData.data.email == email && updateData.data.password) {
          setEmailError(true);
          setpassError(false);
          setblankBlank(false);
        }
      }

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
  


  return (
    <div className={styles.container}>
    <Head>
        <title>Panda Prints</title>
    </Head>
        <main className={styles.main}>
            <div className={styles.logo_over}>
                <LOGO_BLACK className={styles.logo_overlay}></LOGO_BLACK>
                <div className={styles.header_section}>
                    <h1 className={styles.main_h1}>
                        Collaborate with AI to Design your Own Wall Decor
                    </h1>
                    <h4 className={styles.main_h4}>
                        Leverage the newest technology in Artificial Intelligence to unleash your inner creativity
                    </h4>
                    <button className={styles.btn_neu}>
                        Learn More
                    </button>
                </div>
            </div>
            <div className={styles.testing}>
                <Carousel showArrows={true} centerMode={false} dynamicHeight={false} infiniteLoop={true} width={'100%'} showThumbs={false} showStatus={false} autoPlay={true}>
                        <div className={styles.carousel_image_test}>
                            <img className={styles.svg_icon} src="https://atlastattoo.s3.amazonaws.com/Spike.svg"/>
                        </div>
                        <div className={styles.carousel_image_test}>
                            <img className={styles.svg_icon} src="https://atlastattoo.s3.amazonaws.com/Octopus.svg"/>
                        </div>
                        <div className={styles.carousel_image_test}>
                            <img className={styles.svg_icon} src="https://atlastattoo.s3.amazonaws.com/svg_1.svg"/>
                        </div>
                        <div className={styles.carousel_image_test}>
                            <img className={styles.svg_icon} src="https://atlastattoo.s3.amazonaws.com/svg_2.svg"/>
                        </div>
                        <div className={styles.carousel_image_test}>
                            <img className={styles.svg_icon} src="https://atlastattoo.s3.amazonaws.com/svg_3.svg"/>
                        </div>
                        <div className={styles.carousel_image_test}>
                            <img className={styles.svg_icon} src="https://atlastattoo.s3.amazonaws.com/svg_4.svg"/>
                        </div>
                </Carousel>
            </div>
            <div className={styles.carousel_container}> 
                <Carousel showArrows={true} centerMode={false} dynamicHeight={false} infiniteLoop={true} width={'100%'} showThumbs={false} showStatus={false} autoPlay={true}>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/image52.png"/>
                    </div> 
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/image49.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img  src="https://atlastattoo.s3.amazonaws.com/image55.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/image56.png"/>
                    </div>
{/*                     <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/image57.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/image58.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/Atlas-Tattoo-Dev+(21).png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/mockup+(6).jpeg"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/mockup+(7).jpeg"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/mockup+(8).jpeg"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/mockup+(9).jpeg"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-12-07+20.59.01+-+abstract+black+and+white+modern+art.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/234.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.43+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.36+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.32+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img  src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.30+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.14+-+award+winning%2C+digital+art%2C+Atlantis%2C+stunning%2C+8k%2C+high+definition.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.05.24+-+Digital+image+in+black+of+twisted+bonsai+tree+with+roots+on+white+background.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.35.42+-+abstract+art%2C+black+and+white.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.35.28+-+abstract+art%2C+black+and+white.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.35.18+-+abstract+art%2C+black+and+white.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.41+-+abstract+art%2C+black+and+white.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.25+-+abstract+art%2C+black+and+white.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.13+-+abstract+art%2C+black+and+white.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.20+-+abstract+art%2C+black+and+white.png"/>
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.10+-+abstract+art%2C+black+and+white.png"/>
                    </div> */}
                </Carousel>
             </div> 
             <h2 className={styles.form_fill_header}>Sign Up and claim your 3 free credits</h2>
             <form>
                <p className={styles.description}>
                    <input
                        id="firstname"
                        className={styles.input_form}
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="lastname"
                        className={styles.input_form}
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setlastName(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="email"
                        className={styles.input_form}
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="password"
                        className={styles.input_form}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setpassWord(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="password_confirm"
                        className={styles.input_form}
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setCpassWord(e.target.value)}
                    />
                </p>
             </form>
             <div className={styles.horizontal_1}>
                <hr className={styles.line_1}></hr>
                <h4>OR</h4>
                <hr className={styles.line_1}></hr>
            </div>
            <div className={styles.third_party}>
                <button className={styles.btn_neu_third} onClick={() => signIn(providers.google.id)}>
                    <GOOGLE className={styles.google}></GOOGLE>
                </button>

                <button className={styles.btn_neu_third} onClick={() => signIn(providers.facebook.id)}>
                    <FACEBOOK className={styles.facebook}></FACEBOOK>
                </button>
            </div>
             {!success && (
                <button className={styles.btn_neu_sub} onClick={() => {loadIt()}}>
                    Submit
                </button>
            )}
            {success && (
                <button className={styles.btn_neu} onClick={() => signIn()}>
                <CHECK></CHECK>Login</button>
            )}
            {passError && (
                <div className={styles.error}>
                <a>The passwords you entered do not match</a>
                </div>
            )}
            {blankBlank && (
                <div className={styles.error}>
                <a>Please fill out all fields</a>
                </div>
            )}
            {emailError && (
                <div className={styles.existing}>
                    <div className={styles.error}>
                    <a>A user with this email already exists</a>
                    </div>
                    <Link href={signIn()}>
                    <a className={styles.nav_login}>
                        Login
                    </a>
                    </Link>
                </div>
            )}
            <p className={styles.diclosure}>
            We're committed to your privacy. Panda Prints uses the information you provide to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy
            </p>
            <div className={styles.how_to}>
                <h1 className={styles.how_to_header}>It's as Easy as 1..2..3</h1>
                <div className={styles.steps_div}>
                    <h2 className={styles.steps}>Step 1</h2>
                </div>
                <p className={styles.step_sub}>Select a Canvas from over a dozen choices</p>
                <div className={styles.carousel_container_1}>
                    <Carousel className={styles.testing_carousel} showArrows={true} centerMode={true} dynamicHeight={false} infiniteLoop={true} width={'100%'} showThumbs={false} showStatus={false} autoPlay={true}>
                        <div className={styles.carousel_image_1}>
                            <img className={styles.svg_icon_1} src="https://atlastattoo.s3.amazonaws.com/Framed_Canvas.jpeg"/>
                            <p className="legend">Framed Canvas</p>
                        </div> 
                        <div className={styles.carousel_image_1}>
                            <img className={styles.svg_icon_1} src="https://atlastattoo.s3.amazonaws.com/Unframed_Canvas.jpeg"/>
                            <p className="legend">Canvas</p>
                        </div>
                        <div className={styles.carousel_image_1}>
                            <img className={styles.svg_icon_1} src="https://atlastattoo.s3.amazonaws.com/Tapestry.jpeg"/>
                            <p className="legend">Tapestry</p>
                        </div>
                        <div className={styles.carousel_image_1}>
                            <img className={styles.svg_icon_1} src="https://atlastattoo.s3.amazonaws.com/Framed_Poster.jpeg"/>
                            <p className="legend">Framed Posters</p>
                        </div>
                        <div className={styles.carousel_image_1}>
                            <img className={styles.svg_icon_1} src="https://atlastattoo.s3.amazonaws.com/Unframed_Poster.jpeg"/>
                            <p className="legend">Posters</p>
                        </div>
                    </Carousel>
                    </div>
                <div className={styles.steps_div}>
                    <h2 className={styles.steps}>Step 2</h2>
                </div>

                <div className={styles.options}>
                    <h4 className={styles.options_h4}>AI Generated</h4>
                    <p className={styles.options_p}>Express yourself with a custom text to image generation</p>
                </div>
                <div className={styles.horizontal}>
                    <hr className={styles.line}></hr>
                    <h4>OR</h4>
                    <hr className={styles.line}></hr>
                </div>
                <div className={styles.options}>
                    <h4 className={styles.options_h4}>Existing Flash</h4>
                    <p className={styles.options_p}>Upload an image and let the AI create unique variations</p>
                </div>
                <div className={styles.horizontal}>
                    <hr className={styles.line}></hr>
                    <h4>OR</h4>
                    <hr className={styles.line}></hr>
                </div>
                <div className={styles.options}>
                    <h4 className={styles.options_h4}>Upload</h4>
                    <p className={styles.options_p}>Upload your own image to order a printed canvas</p>
                </div>
                <br/>

                <div className={styles.steps_div}>
                    <h2 className={styles.steps}>Step 3</h2>
                </div>
                <div className={styles.submit_div}>
                    <CONFETTI className={styles.confetti_1}></CONFETTI>
                    <p className={styles.step_sub}>Submit your order</p>
                    <CONFETTI className={styles.confetti}></CONFETTI>
                </div>
            </div>
        </main>
    </div>
  );
}

export async function getServerSideProps(context) {
    const providers = await getProviders(context)
    return {
      props: { providers },
    }
  }