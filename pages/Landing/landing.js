import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./landing.module.css";
import Image from 'next/image';
//import React from 'react';
//import { Html, Head, Main, NextScript } from 'next/document'
//import styles from './document.module.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Image0 from '../gallery/images/Canvas_1.png'
import Image1 from '../gallery/images/Canvas_2.png'
import Image2 from '../gallery/images/Canvas_3.png'
import Image3 from '../gallery/images/Canvas_4.png'
import Image4 from '../gallery/images/Canvas_5.png'
import Banner from '/public/Banner.svg'
import Banner1 from '/public/Banner1.svg'
import Banner2 from '/public/Banner2.svg'
import Try1 from '/public/Try1.png'
import Try2 from '/public/Try2.png'
import Try3 from '/public/Try3.png'

import CONFETTI from '../gallery/images/confetti.svg'

export default function Document() {
    const [gal, setGal] = useState(Image0);
    const [galIndex, setGalIndex] = useState(0);

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

    function rotateImages() {

            if (typeof window !== "undefined") {
                const Images = [Image0, Image1, Image2, Image3, Image4];
                const image = document.getElementById('landing');

                if (galIndex == 4) {
                    //image.style = {transition: 'all ease-in-out 1000ms'}
                    setGalIndex(0);
                    setGal(Images[galIndex])
                } else {
                    //image.style = {transition: 'all ease-in-out 1000ms'}
                    setGalIndex(galIndex + 1);
                    setGal(Images[galIndex]);
                }
        }
}

function rotateImagesTets() {

    if (typeof window !== "undefined") {
        const Images = [Image0, Image1, Image2, Image3, Image4];
        const image0 = document.getElementById('landing0');
        const image1 = document.getElementById('landing1');
        const image2 = document.getElementById('landing2');

        setGalIndex(galIndex + 1);

        if (galIndex == 2) {
            image2.style == {visibility: 'hidden'};
            image0.style == {visibility: 'visible'};
            image0.style == {transition: 'all ease-in-out 1000ms'};
            setGalIndex(0);
        } else if (galIndex == 1) {
            image1.style == {visibility: 'hidden'};
            image2.style == {visibility: 'visible'};
            image2.style == {transition: 'all ease-in-out 1000ms'};
            //setGal(Images[galIndex])
        } else if(galIndex == 0) {
            image0.style == {visibility: 'hidden'};
            image1.style == {visibility: 'visible'};
            image1.style == {transition: 'all ease-in-out 1000ms'};
        }
}
}

    function performRotate() {
        setTimeout(rotateImages, 5000)
    }

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
          setpassBlank(true);
          setpassError(false);
          setEmailError(false);
        } else if (CpassWord == "" ) {
          setpassBlank(true);
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
            <div className={styles.carousel_container}>
            <Carousel showArrows={true} centerMode={true} dynamicHeight={false} infiniteLoop={true} width={'100%'} showThumbs={false} showStatus={false} autoPlay={true}>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/image52.png"/>
                </div> 
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/image49.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/image55.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/image56.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/image57.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/image58.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/Atlas-Tattoo-Dev+(21).png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/wall-2.jpg"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/wall-3.jpg"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/wall-4.jpg"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/mockup+(6).jpeg"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/mockup+(7).jpeg"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/mockup+(8).jpeg"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/mockup+(9).jpeg"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-12-07+20.59.01+-+abstract+black+and+white+modern+art.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/234.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.43+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.36+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.32+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.30+-+award+winning%2C+digital+art%2C+Mt+Olympus%2C+stunning%2C+8k%2C+high+definition.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.06.14+-+award+winning%2C+digital+art%2C+Atlantis%2C+stunning%2C+8k%2C+high+definition.png"/>
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-23+17.05.24+-+Digital+image+in+black+of+twisted+bonsai+tree+with+roots+on+white+background.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.35.42+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.35.28+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.35.18+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.41+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.25+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.13+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.20+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
                <div>
                    <img src="https://atlastattoo.s3.amazonaws.com/DALL%C2%B7E+2022-10-06+18.34.10+-+abstract+art%2C+black+and+white.png"/>
 
                </div>
            </Carousel>
            </div>
             <h3 className={styles.form_fill_header}>Sign Up and claim your 3 free credits</h3>
             <form>
                <p className={styles.description}>
                    <input
                        id="firstname"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="lastname"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setlastName(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setpassWord(e.target.value)}
                    />
                </p>
                <p className={styles.description}>
                    <input
                        id="password_confirm"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setCpassWord(e.target.value)}
                    />
                </p>
             </form>
             {!success && (
                <button className={styles.btn_neu} onClick={() => {loadIt()}}>
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
                <h3 className={styles.how_to_header}>It's as Easy as 1..2..3</h3>
                <div className={styles.steps_div}>
                    <h2 className={styles.steps}>Step 1</h2>
                </div>
                <p className={styles.step_sub}>Select a Canvas from over a dozen choices</p>
                <div className={styles.carousel_container_1}>
                    <Carousel showArrows={true} centerMode={true} dynamicHeight={false} infiniteLoop={true} width={'100%'} showThumbs={false} showStatus={false} autoPlay={true}>
                        <div>
                            <img src="https://atlastattoo.s3.amazonaws.com/Framed_Canvas.jpeg"/>
                            <p className="legend">Framed Canvas</p>
                        </div> 
                        <div>
                            <img src="https://atlastattoo.s3.amazonaws.com/Unframed_Canvas.jpeg"/>
                            <p className="legend">Canvas</p>
                        </div>
                        <div>
                            <img src="https://atlastattoo.s3.amazonaws.com/Tapestry.jpeg"/>
                            <p className="legend">Tapestry</p>
                        </div>
                        <div>
                            <img src="https://atlastattoo.s3.amazonaws.com/Framed_Poster.jpeg"/>
                            <p className="legend">Framed Posters</p>
                        </div>
                        <div>
                            <img src="https://atlastattoo.s3.amazonaws.com/Unframed_Poster.jpeg"/>
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