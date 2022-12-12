import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/myGalleryPage.module.css";
//import Image from 'next/image';
import SVG from '/pages/gallery/images/download.svg';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import Image from 'next/future/image';
//import Navbar from "../profile/components/Nav";
import axios from "axios";
import Navbar from "./components/newNav";

export default function GalleryPage() {
  const { data: session, status} = useSession();

  const files = [
        {
          id: 190,
          title: 'Gallery Canvas Wraps, Vertical Frame',
          description: 'Let your personality be reflected on the artwork adorning your walls. This vertical gallery wrapped canvas print will always look as tight and flat as the day it was made. Every frame is built with a solid face to support the canvas and prevent deforming. Available in multiple sizes, comes in walnut and black frame options.<div>.:100% cotton fabric canvas</div><br /><div>.:Poplar wood frame with walnut or black finish</div><br /><div>.:High image quality and detail</div><br /><div>.:NB! For indoor use only</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/6298af82da5a4ace6e068911',
            'https://images.printify.com/62bd603e1edb8040a40b0e06',
            'https://images.printify.com/62c837676bae31dc540f5017',
            'https://images.printify.com/62c698d5d7133f573807c696',
            'https://images.printify.com/62cbd1e53915562ea106ca3b',
            'https://images.printify.com/62c69df95b7e6e231d09c31c',
            'https://images.printify.com/636240723a0045fc730b421f',
            'https://images.printify.com/62a9d14354fac662f20af2c6',
            'https://images.printify.com/62a9d14863cb2629570d7f9f',
            'https://images.printify.com/62a9dd6334d97cd15209543a'
          ],
          colors: ['Black', 'Walnut'],
          sizes: ['5" x 7"','32" x 48"'],
          price: ['$43.23','$378.40']
        },
        {
          id: 193,
          title: 'Gallery Canvas Wraps, Horizontal Frame',
          description: 'Let your personality be reflected on the artwork adorning your walls. This horizontal gallery wrapped canvas print will always look as tight and flat as the day it was made. Every frame is built with a solid face to support the canvas and prevent deforming. Available in multiple sizes, comes in walnut and black frame options.<div>.:100% cotton fabric canvas</div><br /><div>.:Poplar wood frame with walnut or black finish</div><br /><div>.:High image quality and detail</div><br /><div>.:NB! For indoor use only</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/6298b2902117059dd109dbc8',
            'https://images.printify.com/62bd60737a4470a4f6032518',
            'https://images.printify.com/62c84541933d4372f00be199',
            'https://images.printify.com/62c6962e0edb71ae1e0f6fce',
            'https://images.printify.com/62cbd1dc9df1ba543a09c723',
            'https://images.printify.com/62c69d545b7e6e231d09c319',
            'https://images.printify.com/636247b3e8b349a71e0ca084',
            'https://images.printify.com/62a9d5d9d1d9728a690e9b71',
            'https://images.printify.com/62a9d5e2f833ff57a30c477b',
            'https://images.printify.com/62a9dd01f833ff57a30c4794'
          ],
          colors: ['Black', 'Walnut'],
          sizes: ['5" x 7"','32" x 48"'],
          price: ['$43.23','$378.40']
        },
        {
          id: 196,
          title: 'Gallery Canvas Wraps, Square Frame',
          description: 'Let your personality be reflected on the artwork adorning your walls. This square gallery wrapped canvas print will always look as tight and flat as the day it was made. Every frame is built with a solid face to support the canvas and prevent deforming. Available in multiple sizes, comes in walnut and black frame options. <div>.:100% cotton fabric canvas</div><br /><div>.:Poplar wood frame with walnut or black finish</div><br /><div>.:High image quality and detail</div><br /><div>.:NB! For indoor use only</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/6298aca9722bbe047a0cbd61',
            'https://images.printify.com/62bd60874ad4ea547b0d4433',
            'https://images.printify.com/62c85c57b1407326ac03b62a',
            'https://images.printify.com/62c698fe1d4d8c40e00a4619',
            'https://images.printify.com/62cbd1c33915562ea106ca34',
            'https://images.printify.com/62c69de2413d72799b00a74d',
            'https://images.printify.com/63624833b35d1250d8050f44',
            'https://images.printify.com/62a9a8f3d77317f602017af6',
            'https://images.printify.com/62a9a8ec094c51e4330fd294',
            'https://images.printify.com/62a9aa55a7845d249f0b9588'
          ],
          colors: ['Black', 'Walnut'],
          sizes: ['6" x 6"','36" x 36"'],
          price: ['$43.23','$283.42']
        },
        {
          id: 282,
          title: 'Premium Matte Vertical Posters',
          description: 'Introducing the perfect means to print art on – the premium matte vertical posters. Made with museum-grade paper (175gsm fine art paper), these posters translate any digital artwork into exquisite real life décor. Available in multiple sizes, each poster is printed with top-tier pigmented archival inks for a stunning end result.<div>.:175 gsm fine art paper</div><br /><div>.:Multiple sizes</div><br /><div>.:Matte finish</div><br /><div>.:For indoor use</div><br /><div>.:NB! Due to the production process of these posters, please allow for slight size deviations with a tolerance +/- 1/16".</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/62ea33863b5ecf7d0e09e6ab',
            'https://images.printify.com/634e94a24853f68f060648c0',
            'https://images.printify.com/62e7db164ffb546d27014008',
            'https://images.printify.com/62ed1c2e90e66b874e01990f',
            'https://images.printify.com/62ed1b5c90e66b874e0198f3',
            'https://images.printify.com/62ed1b5e2856b09306098133',
            'https://images.printify.com/62ed1b6090e66b874e0198fe',
            'https://images.printify.com/62ed1b5f90e66b874e0198f9'
          ],
          sizes: ['9" x 11"','24" x 36"'],
          price: ['$12.12','$30.17']
        },
        {
          id: 284,
          title: 'Premium Matte horizontal posters',
          description: 'Print your art on exhibition-ready paper and show or sell it to the world. This premium matte horizontal poster is made with museum-grade paper (175gsm fine art paper), and are the perfect means to bring any digital artwork into real life as stunning décor. Available in multiple sizes, each poster is printed with top-tier pigmented archival inks for excellent printing results.<div>.:175 gsm fine art paper</div><br /><div>.:Matte finish</div><br /><div>.:Multiple sizes</div><br /><div>.:For indoor use</div><br /><div>.:NB! Due to the production process of these posters, please allow for slight size deviations with a tolerance +/- 1/16".</div>',      
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/5d0c9a796eb51d00073b20b5',
            'https://images.printify.com/5a0d5e40b8e7e308cf63b147',
            'https://images.printify.com/5a0d5e49b8e7e308e027f5bb'
          ],
          sizes: ['11" x 9"','36" x 24"'],
          price: ['$12.12','$30.17']
        },
        {
          id: 492,
          title: 'Premium Framed Vertical Poster',
          description: 'Place great art for your interior decor with this durable wood-framed poster. Frame comes in black or white and is available in 7 versatile sizes.<br/><br/><div>.:Museum-quality custom frames</div><br /><div>.:Matte premium paper</div><br /><div>.:Plexiglass front</div><br /><div>.:For indoor use</div><br /><div>.:Multiple sizes</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/5ec647754299d049900e9503',
            'https://images.printify.com/63414dae52ad403f0b03bbd9',
            'https://images.printify.com/5e9ef21ecf51970fc83b4497',
            'https://images.printify.com/5e9ef799cf51970fc83b449b',
            'https://images.printify.com/5fb3fdbe0518302860425f70',
            'https://images.printify.com/5fb3fde838270f44973d7375'
          ],
          color: ['Black', 'White'],
          sizes: ['8" x 11"','24" x 36"'],
          price: ['$52.05','$123.05']
        },
        {
          id: 493,
          title: 'Premium Framed Horizontal Poster',
          description: 'Place great art for your interior decor with this durable wood-framed poster. Frame comes in black or white and is available in 7 versatile sizes.<br/><div>.:Museum-quality custom frames</div><br /><div>.:Matte premium paper</div><br /><div>.:Plexiglass front</div><br /><div>.:For indoor use</div><br /><div>.:Multiple sizes</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/5ec6479b17694437e737d423',
            'https://images.printify.com/63414f6f52ad403f0b03bbdd',
            'https://images.printify.com/5e9ef20ccf51970fc83b4493',
            'https://images.printify.com/5e9ef7abea0cc15d097df86d',
            'https://images.printify.com/5fb3fe5f78ece644f91ab2e4',
            'https://images.printify.com/5fb3fe6567a9e87f5219cfae'
          ],
          color: ['Black', 'White'],
          sizes: ['11" x 8"','36" x 24"'],
          price: ['$52.05','$123.05']
        },
        {
          id: 494,
          title: 'Giclée Art Print',
          description: 'Want a quick remedy for your interior decor but don’t know how? Try these awesome museum-quality fine art prints with your own art for a change. Available in 7 versatile sizes, choose them in an either horizontal or vertical orientation to meet your needs. Each premium quality poster is giclée-printed on a thick, archival, acid-free, and durable matte paper.<div>.:Paper weight: 5.6 oz/y² (192 g/m²)</div><br /><div>.:Giclée print quality</div><br /><div>.:Multiple sizes</div><br /><div>.:Matte finish</div><br /><div>.:For indoor use</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/5f02c822c83e1d4666381b76',
            'https://images.printify.com/634151bb626b741a8505b486',
            'https://images.printify.com/5fb3be6a5b77356b84035fdd',
            'https://images.printify.com/5fb3be74b7159219b924bd2b'
          ],
          sizes: ['11" x 8"','24" x 36"'],
          price: ['$19.38','$26.14']
        },
        {
          id: 534,
          title: 'Wood Canvas',
          description: 'Help take your home decor on an organic, rustic turn with these unique wood canvas prints. Now you can have your designs or photos printed on a wood canvas made from 15mm plywood that comes with embedded mounting points. Furthermore, there’s an included paper template to help mark mounting points on walls. Take your interior photo displays to the next level. <div>.:0.6" (15mm) thick plywood</div><br /><div>.:Embedded mounting points</div><br /><div>.:Eco-friendly material</div><br /><div>.:Includes mounting hardware</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/5fcfadf70c87302d2f504193',
            'https://images.printify.com/62bd60ae4ad4ea547b0d443b',
            'https://images.printify.com/5fd07a78f4718a75170a08c3',
            'https://images.printify.com/5fd081942f73b66e8a33df73',
            'https://images.printify.com/5f801c8d104c523b41518ee5'
          ],
          sizes: ['7.8" x 7.8"'],
          price: ['$103.28']
        },
        {
          id: 540,
          title: 'Framed Vertical Poster',
          description: 'Securely framed in one of three colors (black, white, or walnut), these premium posters exhibit their varied contents through archive-worthy photo paper and ink. For easy hanging, there’s a backing hardware piece. The framing is made of MDF - a move pointing toward ecological friendliness. Further ensuring durability, the bordering is low maintenance and resistant to swelling and warping. <div>.:LexJet Premium 200 gsm paper</div><br /><div>.: Protective acrylic cover</div><br /><div>.:Frames available in black, walnut and white finishes</div><br /><div>.:Hanging kit already fixed</div><br /><div>.:Matte paper finish</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/600736e78954c0225f30ce43',
            'https://images.printify.com/5ff5d779a7c975267356d0f3',
            'https://images.printify.com/5ff7765f97beef616f60294a',
            'https://images.printify.com/600fbd752df2be438264fab7',
            'https://images.printify.com/600fc00919825a652166a4c6'
          ],
          color: ['Black', 'White', 'Walnut'],
          sizes: ['12" x 16"','20" x 30"'],
          price: ['$58.25','$100.43']
        },
        {
          id: 554,
          title: 'Premium Poster',
          description: "Every room has the capability to be special. With a premium poster, transforming feng shui and energy flow is almost inevitable. These posters are created from quality materials. The museum-grade paper ensures that any design won't corrode with time. The pigment inks used to represent various colors are bright and intense. These posters are hangable with double-sided tape, tacks, or via framing. <div>.:200gsm (5.9oz/yd) fine art paper</div><br /><div>.:For indoor use</div><br /><div>.:Multiple sizes</div>",
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/5fdc5dcc11be772df103ba9e',
            'https://images.printify.com/6341581b626b741a8505b48a',
            'https://images.printify.com/5fdc5dd0d000b5262d7fed7a',
            'https://images.printify.com/5fdc5dd411be772df103baa1'
          ],
          sizes: ['14" x 11"','24" x 36"'],
          price: ['$14.32','$48.63']
        },
        {
          id: 555,
          title: 'Stretched Canvas',
          description: "Designed for indoor use, custom stretched canvas prints are made from treated cotton - providing the smoothest of matte surfaces for exceptional design vividity. A combination of quality and durability, these hangings come with a lifelong color guarantee; there's significant confidence in their withstanding the test of time. <div>.:100% cotton fabric</div><br /><div>.:NB! Does not include mounting hardware</div><br /><div>.:Wooden frame</div><br /><div>.:High image quality and detail</div><br /><div>.:For indoor use</div>",
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/62f26abe83f2c26df9054f28',
            'https://images.printify.com/62f26aad65ff8c1c5e0da1a3',
            'https://images.printify.com/62cc3639cefad7d2cb0d19f4',
            'https://images.printify.com/62f261f91a3397304301d5f5',
            'https://images.printify.com/62f26afca6e6e099d303e948',
            'https://images.printify.com/62a8672871400d74f506e9b4',
            'https://images.printify.com/62a8707071400d74f506e9b8',
            'https://images.printify.com/62a870cc8ee62c507507bf31'
          ],
          sizes: ['10" x 8"','24" x 30"'],
          price: ['$47.30','$113.90']
        },
        {
          id: 759,
          title: 'Wall Decals',
          description: 'Customize any room to perfection with these personalized wall decals. Made from durable polyester fabric, these wall stickers are long-lasting, removable, and you can reposition them as you see fit. Available in multiple sizes for all types of spaces.<div>.:0.15mm thick and durable polyester material</div><br /><div>.:99% opacity for great coverage</div><br /><div>.:Removable and repositionable adhesive</div><br /><div>.:Pleasant woven texture </div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/6166cf386260ec3fec2ed88b',
            'https://images.printify.com/6166c16bb507f83c41427ad8',
            'https://images.printify.com/6166c1701dc6f7739544ab41',
            'https://images.printify.com/6166c2dc7b34494a464c7742',
            'https://images.printify.com/6166c2df6260ec3fec2ed872'
          ],
          sizes: ['18" x 12"','24" x 36"'],
          price: ['$26.35','$47.57']
        },
        {
          id: 764,
          title: 'Framed Poster, Horizontal',
          description: 'Made to bring custom style into any home, these personalized posters are a great tool to enhance your surroundings. Featuring a hand-crafted wooden frame, these print-on-demand posters accommodate your designs on FSC®-certified paper from sustainable sources, are printed with top-tier Mimaki UV inks, and come ready-for-hanging right out of the box.<div>.:Hand-crafted wooden frame</div><br /><div>.:Ideal for indoors and outdoors</div><br /><div>.:Ready for hanging</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/6197a73fcc134569b1556098',
            'https://images.printify.com/6343efb73ee5ae6da2068663',
            'https://images.printify.com/619e49ee9f5d2454736fe5c8',
            'https://images.printify.com/619e49ed0d4d9f70925e6d57'
          ],
          sizes: ['10" x 8"','40" x 32"'],
          price: ['$48.82','$232.03']
        },
        {
          id: 852,
          title: 'Vertical and Horizontal Matte Posters',
          description: 'Enhance the decor of any home with print-on-demand posters. These matte posters are perfect for indoor use and can accommodate your craziest designs in crisp detail with vivid colors. Available in multiple sizes to find the perfect match for your decorating needs. <div>.:180 gsm paper</div><br /><div>.:Matte finish</div><br /><div>.:Multiple sizes</div><br /><div>.:For indoor use</div><br /><div>.:Scratch resistant</div>',      
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/61b730a306846105f037c3fc',
            'https://images.printify.com/61bc8a5d160eed7efa29ec71',
            'https://images.printify.com/61bc8a5dcb2697164e73e0ab',
            'https://images.printify.com/61bc8a5d9e54ed7772104776',
            'https://images.printify.com/61bc8a5eefc8de6de92cf1cb'
          ],
          orientation: ['Horizontal', 'Vertical'],
          sizes: ['11" x 9"','24" x 36"'],
          price: ['$15.53','$53.13']
        },
        {
          id: 889,
          title: 'Matte Paper Poster',
          description: "Adding custom artwork to anyone's surroundings is one of the best decor moves one can make, and these customizable posters are here to help. Made with top-quality matte foto paper (225gsm), each indoor poster is reflection-free, as well as UV light & light-resistant. Add your custom designs and create a long-lasting decoration staple that stands apart from average posters. <div>.:For indoor use</div><br /><div>.:225 gsm matte foto paper</div><br /><div>.:Reflection-free and UV light resistant paper</div>",
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/627cda492f7cd57bf0043749',
            'https://images.printify.com/6343ff201f0899be9f0c8ef3',
            'https://images.printify.com/627ce74160ccffccae00b12f',
            'https://images.printify.com/627ce75e0063bbdca806cce4',
            'https://images.printify.com/627ce38f60ccffccae00b11b',
            'https://images.printify.com/627ce75134f16f9fa50cef2c'
          ],
          orientation: ['Horizontal', 'Vertical', 'Square'],
          sizes: ['11.8" x 7.9"','31.5" x 47.2"'],
          price: ['$28.24','$66.89']
        },
        {
          id: 894,
          title: 'Fine Art Prints (Passepartout Paper Frame)',
          description: 'Frame your art in the most stunning light possible and showcase it in any home or gallery with these premium, 175gsm fine-art paper prints. Equipped with a thick, 2mm (0.07") window-cut cardboard (passpartout) frame that comes in a natural white color, these prints can be hung as-is or inserted in a protective frame of your choice. Available in two sizes: 11" × 14" or 16" × 20".<br/><br/>NB! Please note that in order to better preserve the print through transport, some assembly is required upon receival. If you choose this product, we highly recommend including instructions on how to properly mount this print, for a better customer experience.<br/><br/>NB! Please note that there are no hanging supplies included. The recommended type of hanging - sticky hanging strips.<div>.:175gsm fine art paper</div><br /><div>.:Available in 2 sizes: 11" × 14" (28 × 35cm) or 16" × 20" (41 × 51cm) </div><br /><div>.:Premium quality giclée print</div><br /><div>.:Thick, 2mm window cut cardboard frame</div><br /><div>.:Natural white frame color</div><br /><div>.:NB! Protective frame not included</div><br /><div>.:NB! Some assembly is required upon receival</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/622223d891029142f534a6f8',
            'https://images.printify.com/634401ed7852e418e7064f75',
            'https://images.printify.com/621c8f14d7b7d84017282d2e',
            'https://images.printify.com/621e1b4991029142f5349e0d',
            'https://images.printify.com/621e1b4e91029142f5349e12',
            'https://images.printify.com/634401e57852e418e7064f72'
          ],
          orientation: ['Horizontal', 'Vertical'],
          sizes: ['14" x 11"','20" x 16"'],
          price: ['$22.95','$38.48']
        },
        {
          id: 900,
          title: 'Satin Canvas, Stretched',
          description: 'Print your art on this premium satin canvas and host your exhibition, sell merchandise, decorate your home, or make a stunning gift of art. Each pre-stretched canvas comes with a wooden inner frame and is available in various sizes ranging from 8" by 10" all the way up to 36" by 24".<div>.:100% Polyester</div><br /><div>.:Wooden inner frame</div><br /><div>.:Metallic mounts on the back of canvas</div><br /><div>.:Horizontal and vertical options available</div><br /><div>.:For indoor use</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/62bdab41a5c7ac691e0dc73a',
            'https://images.printify.com/62bed968d085ab0b8b065f6d',
            'https://images.printify.com/62cc36560e16988dd507f953',
            'https://images.printify.com/62c58e67063900e522050010',
            'https://images.printify.com/62c58c80ab538da1420dfe64',
            'https://images.printify.com/62a895c0940beb833f02e060',
            'https://images.printify.com/62a8963205cb765898009659',
            'https://images.printify.com/62a89af58ee62c507507c0a4'
          ],
          orientation: ['Horizontal', 'Vertical'],
          sizes: ['10" x 8"','24" x 36"'],
          price: ['$32.70','$87.69']
        },
        {
          id: 915,
          title: 'Printed Wall Tapestry',
          description: "Created to help add personality in any space, this custom wall tapestry is a home decorator's dream come true. Printed from edge to edge with cutting-edge sublimation printing, it lends vibrant colors and vivid details to all your creative ideas. Choose between five sizes to find what suits your needs best. <div>.:100% polyester microfiber</div><br /><div>.:Multiple sizes (34''x40'', 50''x60'', 57''x57'', 80''x68'', 88''x104'')</div><br /><div>.:Edge-to-edge print</div><br /><div>.:Hems on all sides</div>",
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/620bc5c0a61b567808387703',
            'https://images.printify.com/620bc3421913d168fa209716',
            'https://images.printify.com/620bc3436626c800cb6e56dc',
            'https://images.printify.com/620bc3426626c800cb6e56d6',
            'https://images.printify.com/620bc34007262906574658c1',
            'https://images.printify.com/620bc33f180ecf5ad95538fb'
          ],
          sizes: ['34" x 40"','88" x 104"'],
          price: ['$18.28','$59.68']
        },
        {
          id: 928,
          title: 'Acrylic Prints (French Cleat Hanging)',
          description: 'Made to bring art-gallery quality to exhibiting artwork in any space, these custom acrylic prints are the perfect means to show art to the world. These prints are water-resistant and effortless to maintain clean like new thanks to their 0.25"-thick, Grade-A acrylic material. Each print comes with a French cleat backing and installation screws, for easy and secure hanging. <div>.:Material: 0.25” thick grade-A acrylic</div><br /><div>.:Available in 5 sizes</div><br /><div>.:Horizontal and vertical options</div><br /><div>.:Hand-polished, crystal clear edges</div><br /><div>.:Fitted with french cleat backing for easy and secure hanging</div><br /><div>.:Screws for installing the hanging included</div>',
          brand: 'Generic brand',
          model: '',
          images: [
            'https://images.printify.com/62b1bd374a53b2187d0f7456',
            'https://images.printify.com/62b169c3ffe9e97b29026b5e',
            'https://images.printify.com/62136ed913a9f108ee0b20d8',
            'https://images.printify.com/62b1682e746bf129cf0d29ec',
            'https://images.printify.com/62b168164a53b2187d0f7211',
            'https://images.printify.com/62136fe41cea8a50f661e2e3'
          ],
          orientation: ['Horizontal', 'Vertical', 'Square'],
          sizes: ['14" x 11"','24" x 36"'],
          price: ['$82.20','$202.64']
        },
        {
            id: 937,
            title: 'Matte Canvas, Stretched, 0.75"',
            description: `Place your custom artwork, photos, or creative projects on a canvas you'll be proud to use. Each matte canvas comes with back hanging already included for convenient placement. The frame is made with profile radial pine that is ethically sourced from renewable forests. <div>.:Cotton and polyester canvas composite with a special proprietary coating</div><br /><div>.:Frame made with radial pine sourced from renewable forests</div><br /><div>.:Ideal for your creative projects or gallery quality prints </div><br /><div>.:Soft rubber dots on bottom back corners for support</div><br /><div>.:Back hanging included</div><br /><div>.:NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 1/8" (3.2mm)</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/628633923c62938fa10fae4e',
              'https://images.printify.com/62bd60db246e127dd50818df',
              'https://images.printify.com/6285f12c53d759f1e208b2bc',
              'https://images.printify.com/6285f1401fc15cda6d057803',
              'https://images.printify.com/6285f44647fafddd7e032c77',
              'https://images.printify.com/6285f44e53d759f1e208b2c2',
              'https://images.printify.com/629efac163a41c53360b55c3'
            ],
            orientation: ['Horizontal', 'Vertical', 'Square'],
            sizes: ['12" x 9"','48" x 32"'],
            price: ['$26.64','$159.58']
          },
          {
            id: 944,
            title: 'Matte Canvas, Black Frame',
            description: `Every print in a black pinewood frame will look sleek and beautiful in any interior. Your original designs will be printed on the cotton-polyester canvas with a special proprietary coating to make sure your 
        designs stay vibrant for ages. An excellent product for your environmentally-conscious buyers – it's made from sustainably sourced materials (Forest Stewardship Council certified). Choose between multiple sizes for different 
        types of prints. It's easy to assemble – the sawtooth hanging hardware is already included.<br/><br/>NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 1/8" (3.2mm).<div>.:Cotton and polyester canvas composite with a special proprietary coating</div><br /><div>.:Black pinewood frame</div><br /><div>.:Made from sustainably sourced materials</div><br /><div>.:Multiple sizes to choose from</div><br /><div>.:Sawtooth hanging hardware included</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62cc18efa0a6481084018123',
              'https://images.printify.com/62e8d0a107eec2a2610476f3',
              'https://images.printify.com/62d544b7edab0df34e057f00',
              'https://images.printify.com/62d5106a3b1dabb7fa08f1a3',
              'https://images.printify.com/62d5106b05acaf5e4e058e77',
              'https://images.printify.com/62d7b174cc411c643f0aec88',
              'https://images.printify.com/62d5275cf215d389080c38a8',
              'https://images.printify.com/62d5275cf215d389080c38a4',
              'https://images.printify.com/62d5275d78089deecf07c933'
            ],
            orientation: ['Horizontal', 'Vertical', 'Square'],
            sizes: ['12" x 9"','48" x 32"'],
            price: ['$48.10','$257.99']
          },
          {
            id: 961,
            title: 'Acrylic Prints (Triptych)',
            description: `Create stunning decorations by featuring your art on custom acrylic prints in vivid color and crisp detail. This 3-piece (36" x 12") print features a french cleat hanging system for perfectly accurate & rock-steady installation. Each print is made with 0.25"-thick, Grade-A acrylic for impressive looks that are long-lasting. Within each package, you will also find screws for hanging. Professional photo lab quality. Hand polished crystal clear edges. Three-piece product: 3 x (36'' x 12'')</div><br /><div>.:French cleat hanging</div><br /><div>.:Made from 0.25” thick Grade A acrylic</div><br /><div>.:Screws for hanging installation included</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62b1bd42746bf129cf0d2bf3',
              'https://images.printify.com/62b081e815ff242ea40f21f5',
              'https://images.printify.com/62136ec75c2f48241d2dc490',
              'https://images.printify.com/62b0804bffe9e97b29026a25',
              'https://images.printify.com/62135f0bd128f362a16505ba',
              'https://images.printify.com/62b06041ffe9e97b290269bd'
            ],
            orientation: ['Horizontal', 'Vertical'],
            sizes: ['12" x 36"','36" x 12"'],
            price: ['$309.95']
          },
          {
            id: 983,
            title: 'Premium Matte Posters',
            description: 'These blank posters help all your ideas come to life in vivid detail & stunning color. Made with fine art paper (175gsm), an industry-standard choice for professional photographers and artists selling merch, these posters come in multiple sizes for you to choose and are perfect for indoor use. <div>.:175gsm fine art paper</div><br /><div>.:Matte finish</div><br /><div>.:7 sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:NB! For indoor use only</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/6231ecbd39d7a65fe77f6492',
              'https://images.printify.com/634592bd82f52f52fd062123',
              'https://images.printify.com/622872573ce71a28ff1665fc',
              'https://images.printify.com/6231ebc7a4d4854d07591c56',
              'https://images.printify.com/6231ebc639d7a65fe77f648d',
              'https://images.printify.com/6345922dca732df5a7010c64'
            ],
            orientation: ['Horizontal', 'Vertical'],
            sizes: ['11" x 9"','36" x 24"'],
            price: ['$18.70','$28.10']
          },
          {
            id: 1024,
            title: 'Portrait and Landscape Posters',
            description: `Add a big splash of personality to any space with eye-catching, customized posters. Print your designs in picture-perfect quality on these 180 g/m² matte paper sheets and sell them to art enthusiasts worldwide. They're available both in four sizes: A1 (23.3" x 33.1"), A2 (16.5" x 23.3"), A3 (11.6" x 16.5"), and A4 (8.2" x 11.6"). Choose between landscape and portrait orientation. <div>.:180 g/m² matte coated paper</div><br /><div>.:Available in 4 different sizes</div><br /><div>.:Horizontal and vertical options</div><br /><div>.:Premium quality print</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/624eb3796b95c52641054a7c',
              'https://images.printify.com/624eb37f6b95c52641054a7f',
              'https://images.printify.com/6256dba275466787a3041c0d',
              'https://images.printify.com/624eb57f34e176baed0645ea'
            ],
            orientation: ['Horizontal', 'Vertical'],
            sizes: ['11.6" x 8.2"','23.3" x 16.5"'],
            price: ['$23.85','$38.85']
          },
          {
            id: 1033,
            title: 'Photopaper Posters',
            description: 'Print anything from photographs to custom artwork on some of the most incredible quality paper on the market. These posters are made of 250gsm photopaper that is FSC-certified (aka ethically sourced from sustainable sources) and feature a satin as well as a matte finish. All raw materials for these posters are made in Germany. <div>.:Material: high-quality 250 gsm photopaper</div><br /><div>.:FSC-certified paper</div><br /><div>.:Available with satin or matte finish</div><br /><div>.:Material is sourced in Germany</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/625e82b73f2746abdf05240c',
              'https://images.printify.com/625e82bc56cd37ab24070267',
              'https://images.printify.com/6268d8d33e21d0941c0696a4',
              'https://images.printify.com/6268d8e23e21d0941c0696a8'
            ],
            orientation: ['Horizontal', 'Vertical'],
            sizes: ['11.7" x 8.3"','46.8" x 33.1"'],
            price: ['$50.60','$75.15']
          },
          {
            id: 1061,
            title: 'Classic Canvas',
            description: 'Wrapped around the sturdy New Zealand Pinewood frame, this canvas is made from a high-quality polycotton material perfect for printing stunning, high-resolution designs with a semi-gloss satin finish. Choose any (or all) of the 17 sizes and orientation (horizontal, vertical, square) options. Setup is super-swift—it already comes with a self-assembly hanging kit.<div>.:Material: high-quality polycotton</div><br /><div>.:New Zealand Pinewood frame</div><br /><div>.:17 sizes to choose from</div><br /><div>.:Semi-glossy satin finish</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Comes with a self-assembly hanging kit</div><br /><div>.:NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 0.05"</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62b9aaab746bf129cf0d2ffa',
              'https://images.printify.com/62bd60f47a4470a4f603251b',
              'https://images.printify.com/62c2b54664cc6e7b3e100374',
              'https://images.printify.com/62c2b5473e082eb854059079',
              'https://images.printify.com/62c2b5cae467419a4009afd2',
              'https://images.printify.com/62c6e0743f14aa938a0abe80',
              'https://images.printify.com/62c6e074aa33df4b710727a3'
            ],
            orientation: ['Horizontal', 'Vertical'],
            sizes: ['12" x 8"','60" x 40"'],
            price: ['$72.07','$227.48']
          },
          {
            id: 1068,
            title: 'Uncoated Posters',
            description: "Posters are modern-day paintings. Whether you have a commercial license for famous pieces or want to print original creations, these uncoated posters are the go-to environmentally-friendly way to do it. They're made from 176gsm white paper and come in 11 different sizes. Choose between horizontal, vertical, and square orientations to cater to any design.<div>.:Material: 176gsm white uncoated poster paper</div><br /><div>.:Available in 11 different sizes</div><br /><div>.:Blanks sourced from USA</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Sustainable paper from FSC® and SFI® certified facilities</div>",      
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62ab0d54efad9b750900ca29',
              'https://images.printify.com/6345937d82f52f52fd062127',
              'https://images.printify.com/62ab0ee22b5b9d18f50dc3e0',
              'https://images.printify.com/62ab0ee2efad9b750900ca2d',
              'https://images.printify.com/63222bcb1c299675b80bb704',
              'https://images.printify.com/62ab0ee62ca48e3c5805a35e',
              'https://images.printify.com/63459336d9944da1030db6c0'
            ],
            orientation: ['Horizontal', 'Vertical', 'Square'],
            sizes: ['7" x 5"','24" x 18"'],
            price: ['$8.95','$24.30']
          },
          {
            id: 1098,
            title: 'Acrylic Wall Art Panels',
            description: "Acrylic art panels are a modern way to display beautiful and vibrant art that looks like it's embedded in clear glass. They have a clear, glossy acrylic surface and a white vinyl backing. Four silver stand-offs make it very easy to mount to the wall. Make your own original designs and print them on any (or all) of the seven available panel sizes in horizontal and vertical orientations. Square dimensions are available.<div>.:Material: Clear acrylic with white vinyl backing</div><br /><div>.:Clear, glossy surface</div><br /><div>.:Seven sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:NB! For indoor use only</div>",
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/636cd0dbba732d26b20893c4',
              'https://images.printify.com/6371e9da66bc8ab68a036598',
              'https://images.printify.com/632c604164dc9031a00d5f4a',
              'https://images.printify.com/632c5a79b5949011540d6815',
              'https://images.printify.com/6335d88bb4e620c9200c7b8e',
              'https://images.printify.com/63514c5f419ab22c6202d08f'
            ],
            orientation: ['Horizontal', 'Vertical', 'Square'],
            sizes: ['7" x 5"','20" x 16"'],
            price: ['$31.87','$79.80']
          },
          {
            id: 1130,
            title: 'Framed Posters, Matte',
            description: 'Your original artwork will be printed on a Forest Stewardship Council-certified paper sheet in picture-perfect quality and secured by a Black Perspex picture frame, as well as a white mat board inner-frame. The final product will have a beautiful matte finish. Choose from three sizes and both horizontal and vertical image orientations.<div>.:Black Perspex picture frame</div><br /><div>.:Matte poster finish</div><br /><div>.:White inner matboard</div><br /><div>.:Three sizes to choose from</div><br /><div>.:Horizontal and vertical options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62bacaa3e0fefe27cd0fb8c1',
              'https://images.printify.com/62baedda099b9b5be708a80a',
              'https://images.printify.com/632d8906dc71f8636e040e48',
              'https://images.printify.com/632d8906dc71f8636e040e4f'
            ],
            orientation: ['Horizontal', 'Vertical'],
            sizes: ['14" x 11"','16" x 12"'],
            price: ['$79.00','$83.69']
          },
          {
            id: 1140,
            title: 'Framed Prints, Black',
            description: 'Prints with a black Perspex frame compliment any interior style with elegance. A white inner matboard keeps everything looking sleek and polished. Pick from multiple sizes and turn it any way you want – they are available in both landscape and portrait orientations.<div>.:Materials: black MDF frame and backing, clear Perspex insert cover</div><br /><div>.:Four sizes to choose from</div><br /><div>.:200 gsm, FSC-certified paper</div><br /><div>.:White inner matboard</div><br /><div>.:Horizontal and vertical options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/632078387b2b838d8e09c714',
              'https://images.printify.com/63206820e8a73f960501fcf3',
              'https://images.printify.com/632022843d58d2911d053a13',
              'https://images.printify.com/6320216957df61ba87018671',
              'https://images.printify.com/6320216a57df61ba87018676',
              'https://images.printify.com/6320216a57df61ba8701867b'
            ],
            orientation: ['Horizontal', 'Vertical'],
            sizes: ['14" x 11"','16" x 12"'],
            price: ['$79.00','$83.69']
          },
          {
            id: 1159,
            title: 'Matte Canvas, Stretched, 1.25"',
            description: `Place your custom artwork, photos, or creative projects on a canvas you'll be proud to use. Each matte canvas comes with back hanging already included for convenient placement. The frame is made with profile radial pine that is ethically sourced from renewable forests.<div>.:Cotton and polyester canvas composite with a special proprietary coating</div><br /><div>.:Inner frame made with radial pine sourced from renewable forests</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Comes in 24 different sizes</div><br /><div>.:Soft rubber dots on bottom back corners for support</div><br /><div>.:Back hanging included</div><br /><div>.:NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 1/8" (3.2mm)</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62ff2e6090af88d89c00c496',
              'https://images.printify.com/62ff2e676ad0c1b9ec0c0e9f',
              'https://images.printify.com/62ff3eea7dfe54113e00868c',
              'https://images.printify.com/62fcf7e5818c78e9580ad7c5',
              'https://images.printify.com/6360e9157e2beffadf0e0ed5',
              'https://images.printify.com/62fcfbb739bf6292eb075bfa',
              'https://images.printify.com/62fcfbb8ea7ba072fc04fe14',
              'https://images.printify.com/62fcfbb839bf6292eb075bfe'
            ]
          },
          {
            id: 1191,
            title: 'Photo Art Paper Posters',
            description: 'Turn any art into a wonderful piece to behold and own thanks to the 210gsm (9mil) premium paper stock of these posters. The paper used in these posters comes with a smooth satin finish for a high-end feel and is FSC-certified. Choose between multiple sizes to best fit your needs as well as between horizontal or vertical options to best suit your artwork. <br/><br/>NB! Each poster features a white border with a small barcode<div>.:Material: 210gsm (9mil) premium paper stock with smooth satin finish</div><br /><div>.:24 sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:FSC-certified paper</div><br /><div>.:Blank product sourced from Canada</div><br /><div>.:NB! Each poster features a white 0.5cm border with a small barcode</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/630397c9607181da54084aa9',
              'https://images.printify.com/6364ef7d6e97e027b605ee26',
              'https://images.printify.com/630cc47282a56b781e0a0414',
              'https://images.printify.com/630c9c43e0aa0b0ca0046184',
              'https://images.printify.com/630c9c44705b8a49bc005a34'
            ]
          },
          {
            id: 1206,
            title: 'Metal Art Sign',
            description: 'Place your art, pictures, logos, or slogans on these personalized metal signs to create unique decoration pieces. Made with 3mm white aluminum composite, these signs come with a beautiful white matte finish that is ideal for printing. Each sign comes with one mounting block for effortless hanging and is available in 11 sizes.<div>.:Material: White aluminum composite</div><br /><div>.:Matte finish</div><br /><div>.:Eleven sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Includes one mounting block, metal plate, and double-sided tape for hanging</div><br /><div>.:NB! Customer assembly is required</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/63241470be894b9d840bc2a4',
              'https://images.printify.com/63206a801d9d07a6b40845db',
              'https://images.printify.com/632328d8462be4b805039eac',
              'https://images.printify.com/63206a9d78561d41a0046873',
              'https://images.printify.com/63206a9f78561d41a0046877',
              'https://images.printify.com/6322ef66e44c356cd90d3a23',
              'https://images.printify.com/632073794db4abb8b70e9345',
              'https://images.printify.com/632c63efb6037a6023024647',
              'https://images.printify.com/632c63f3b6037a602302464b'
            ]
          },
          {
            id: 1220,
            title: 'Rolled Prints',
            description: "Choose between fine-art (310gsm) or semi-gloss paper (260gsm), and bring your artwork to life in stunning detail. Whether it's breathtaking landscapes, or eye-capturing portraits, these rolled prints can feature it all as they come in multiple sizes as well as horizontal and vertical orientations. <div>.:Materials: 310 gsm paper (fine art), 260 gsm paper (semi-glossy)</div><br /><div>.:Two paper options - fine art and semi-gloss</div><br /><div>.:11 sizes to choose from</div><br /><div>.:Horizontal and vertical options available</div>",
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/63174bc52f8339f6a9023034',
              'https://images.printify.com/6336930b920b9a65f6005ac3',
              'https://images.printify.com/63369199d6f045decc00777a',
              'https://images.printify.com/6332c8f6314589d2610906ed'
            ]
          },
          {
            id: 1226,
            title: "Canvas Stretched, 1.5''",
            description: "Treat your fans and audience to a custom stretched canvas print of your work that they'll love. Made with hand-stretched fabric on wooden frame, these prints come with mounting hardware for hassle-free installation. Your art decorates the print in vivid detail and stunning colors. <br/>NB! Due to canvas production specifics the design placement might shift 1-3 mm and can go over the canvas edges. <div>.:Material: 100% polyester with semi-glossy finish </div><br /><div>.:Handstretched fabric on pine wood frame</div><br /><div>.:Small QR codes on the back</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Includes mounting hardware</div><br /><div>.:Assembled in the USA from Globally Sourced Parts</div>",
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/63234a2255637568d9079ca5',
              'https://images.printify.com/63234a25b04ef8c7e80fc20d',
              'https://images.printify.com/6324846a16893fb49b095a59',
              'https://images.printify.com/6324841c9bf761bc980e9c3a',
              'https://images.printify.com/632483df9bf761bc980e9c35',
              'https://images.printify.com/63442b5a01e3f227f9064eca',
              'https://images.printify.com/63296c60ee435ebeaa00f3e1',
              'https://images.printify.com/6328581d53c8c356740d3443'
            ]
          },
          {
            id: 1236,
            title: 'Framed Papers',
            description: 'Please add a description.<div>.:Wooden frame with a matte black enamel finish</div><br /><div>.:Shatter-proof plexiglass</div><br /><div>.:Two paper options - fine art and semi-gloss</div><br /><div>.:Paper thickness: 310 gsm for fine art, 260 gsm for semi-glossy paper </div><br /><div>.:Pre-installed hanging hardware and rubber bumpers</div><br /><div>.:Multiple sizes to choose from</div><br /><div>.:Horizontal and vertical options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [ 'https://images.printify.com/6329baff7244537d900ac745' ]
          },
          {
            id: 1238,
            title: 'Polyester Canvas',
            description: 'Make your art feel at home on this polyester canvas. With 24 sizes to choose from in both horizontal and vertical options, you can find the perfect match for your art piece. Each canvas comes with a beautiful frame made of pine wood, making it a highly giftable product. <div>.:Material: 100% polyester canvas, pine wood frame</div><br /><div>.:Comes in 24 different sizes</div><br /><div>.:Horizontal, vertical and square options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/6347e1a41281f08714058ab8',
              'https://images.printify.com/6347e0a52d3c0615c703395f',
              'https://images.printify.com/632c349651db91e3a701e013',
              'https://images.printify.com/632dbec64ac629355007b2b3',
              'https://images.printify.com/632dbecdc5b24903d50bb926',
              'https://images.printify.com/632c3462987499d4420da175',
              'https://images.printify.com/632dccec3928c6950800b223',
              'https://images.printify.com/632dca9e4ac629355007b2cd'
            ]
          },
          {
            id: 937,
            title: 'Matte Canvas, Stretched, 0.75"',
            description: `Place your custom artwork, photos, or creative projects on a canvas you'll be proud to use. Each matte canvas comes with back hanging already included for convenient placement. The frame is made with profile radial pine that is ethically sourced from renewable forests. <div>.:Cotton and polyester canvas composite with a special proprietary coating</div><br /><div>.:Frame made with radial pine sourced from renewable forests</div><br /><div>.:Ideal for your creative projects or gallery quality prints </div><br /><div>.:Soft rubber dots on bottom back corners for support</div><br /><div>.:Back hanging included</div><br /><div>.:NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 1/8" (3.2mm)</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/628633923c62938fa10fae4e',
              'https://images.printify.com/62bd60db246e127dd50818df',
              'https://images.printify.com/6285f12c53d759f1e208b2bc',
              'https://images.printify.com/6285f1401fc15cda6d057803',
              'https://images.printify.com/6285f44647fafddd7e032c77',
              'https://images.printify.com/6285f44e53d759f1e208b2c2',
              'https://images.printify.com/629efac163a41c53360b55c3'
            ]
          },
          {
            id: 944,
            title: 'Matte Canvas, Black Frame',
            description: `Every print in a black pinewood frame will look sleek and beautiful in any interior. Your original designs will be printed on the cotton-polyester canvas with a special proprietary coating to make sure your 
        designs stay vibrant for ages. An excellent product for your environmentally-conscious buyers – it's made from sustainably sourced materials (Forest Stewardship Council certified). Choose between multiple sizes for different 
        types of prints. It's easy to assemble – the sawtooth hanging hardware is already included.<br/><br/>NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 1/8" (3.2mm).<div>.:Cotton and polyester canvas composite with a special proprietary coating</div><br /><div>.:Black pinewood frame</div><br /><div>.:Made from sustainably sourced materials</div><br /><div>.:Multiple sizes to choose from</div><br /><div>.:Sawtooth hanging hardware included</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62cc18efa0a6481084018123',
              'https://images.printify.com/62e8d0a107eec2a2610476f3',
              'https://images.printify.com/62d544b7edab0df34e057f00',
              'https://images.printify.com/62d5106a3b1dabb7fa08f1a3',
              'https://images.printify.com/62d5106b05acaf5e4e058e77',
              'https://images.printify.com/62d7b174cc411c643f0aec88',
              'https://images.printify.com/62d5275cf215d389080c38a8',
              'https://images.printify.com/62d5275cf215d389080c38a4',
              'https://images.printify.com/62d5275d78089deecf07c933'
            ]
          },
          {
            id: 961,
            title: 'Acrylic Prints (Triptych)',
            description: `Create stunning decorations by featuring your art on custom acrylic prints in vivid color and crisp detail. This 3-piece (36" x 12") print features a french cleat hanging system for perfectly accurate & rock-steady installation. Each print is made with 0.25"-thick, Grade-A acrylic for impressive looks that are long-lasting. Within each package, you will also find screws for hanging.<div>.:Professional photo lab quality</div><br 
        /><div>.:Hand polished crystal clear edges</div><br /><div>.:Three-piece product: 3 x (36'' x 12'')</div><br /><div>.:French cleat hanging</div><br /><div>.:Made from 0.25” thick Grade A acrylic</div><br /><div>.:Screws for hanging installation included</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62b1bd42746bf129cf0d2bf3',
              'https://images.printify.com/62b081e815ff242ea40f21f5',
              'https://images.printify.com/62136ec75c2f48241d2dc490',
              'https://images.printify.com/62b0804bffe9e97b29026a25',
              'https://images.printify.com/62135f0bd128f362a16505ba',
              'https://images.printify.com/62b06041ffe9e97b290269bd'
            ]
          },
          {
            id: 983,
            title: 'Premium Matte Posters',
            description: 'These blank posters help all your ideas come to life in vivid detail & stunning color. Made with fine art paper (175gsm), an industry-standard choice for professional photographers and artists selling merch, these posters come in multiple sizes for you to choose and are perfect for indoor use. <div>.:175gsm fine art paper</div><br /><div>.:Matte finish</div><br /><div>.:7 sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:NB! For indoor use only</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/6231ecbd39d7a65fe77f6492',
              'https://images.printify.com/634592bd82f52f52fd062123',
              'https://images.printify.com/622872573ce71a28ff1665fc',
              'https://images.printify.com/6231ebc7a4d4854d07591c56',
              'https://images.printify.com/6231ebc639d7a65fe77f648d',
              'https://images.printify.com/6345922dca732df5a7010c64'
            ]
          },
          {
            id: 1024,
            title: 'Portrait and Landscape Posters',
            description: `Add a big splash of personality to any space with eye-catching, customized posters. Print your designs in picture-perfect quality on these 180 g/m² matte paper sheets and sell them to art enthusiasts worldwide. They're available both in four sizes: A1 (23.3" x 33.1"), A2 (16.5" x 23.3"), A3 (11.6" x 16.5"), and A4 (8.2" x 11.6"). Choose between landscape and portrait orientation. <div>.:180 g/m² matte coated paper</div><br /><div>.:Available in 4 different sizes</div><br /><div>.:Horizontal and vertical options</div><br /><div>.:Premium quality print</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/624eb3796b95c52641054a7c',
              'https://images.printify.com/624eb37f6b95c52641054a7f',
              'https://images.printify.com/6256dba275466787a3041c0d',
              'https://images.printify.com/624eb57f34e176baed0645ea'
            ]
          },
          {
            id: 1033,
            title: 'Photopaper Posters',
            description: 'Print anything from photographs to custom artwork on some of the most incredible quality paper on the market. These posters are made of 250gsm photopaper that is FSC-certified (aka ethically sourced from sustainable sources) and feature a satin as well as a matte finish. All raw materials for these posters are made in Germany. <div>.:Material: high-quality 250 gsm photopaper</div><br /><div>.:FSC-certified paper</div><br /><div>.:Available with satin or matte finish</div><br /><div>.:Material is sourced in Germany</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/625e82b73f2746abdf05240c',
              'https://images.printify.com/625e82bc56cd37ab24070267',
              'https://images.printify.com/6268d8d33e21d0941c0696a4',
              'https://images.printify.com/6268d8e23e21d0941c0696a8'
            ]
          },
          {
            id: 1061,
            title: 'Classic Canvas',
            description: 'Wrapped around the sturdy New Zealand Pinewood frame, this canvas is made from a high-quality polycotton material perfect for printing stunning, high-resolution designs with a semi-gloss satin finish. Choose any (or all) of the 17 sizes and orientation (horizontal, vertical, square) options. Setup is super-swift—it already comes with a self-assembly hanging kit.<div>.:Material: high-quality polycotton</div><br /><div>.:New Zealand Pinewood frame</div><br /><div>.:17 sizes to choose from</div><br /><div>.:Semi-glossy satin finish</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Comes with a self-assembly hanging kit</div><br /><div>.:NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 0.05"</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62b9aaab746bf129cf0d2ffa',
              'https://images.printify.com/62bd60f47a4470a4f603251b',
              'https://images.printify.com/62c2b54664cc6e7b3e100374',
              'https://images.printify.com/62c2b5473e082eb854059079',
              'https://images.printify.com/62c2b5cae467419a4009afd2',
              'https://images.printify.com/62c6e0743f14aa938a0abe80',
              'https://images.printify.com/62c6e074aa33df4b710727a3'
            ]
          },
          {
            id: 1068,
            title: 'Uncoated Posters',
            description: "Posters are modern-day paintings. Whether you have a commercial license for famous pieces or want to print original creations, these uncoated posters are the go-to environmentally-friendly way to do it. They're made from 176gsm white paper and come in 11 different sizes. Choose between horizontal, vertical, and square orientations to cater to any design.<div>.:Material: 176gsm white uncoated poster paper</div><br /><div>.:Available in 11 different sizes</div><br /><div>.:Blanks sourced from USA</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Sustainable paper from FSC® and SFI® certified facilities</div>",      
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62ab0d54efad9b750900ca29',
              'https://images.printify.com/6345937d82f52f52fd062127',
              'https://images.printify.com/62ab0ee22b5b9d18f50dc3e0',
              'https://images.printify.com/62ab0ee2efad9b750900ca2d',
              'https://images.printify.com/63222bcb1c299675b80bb704',
              'https://images.printify.com/62ab0ee62ca48e3c5805a35e',
              'https://images.printify.com/63459336d9944da1030db6c0'
            ]
          },
          {
            id: 1098,
            title: 'Acrylic Wall Art Panels',
            description: "Acrylic art panels are a modern way to display beautiful and vibrant art that looks like it's embedded in clear glass. They have a clear, glossy acrylic surface and a white vinyl backing. Four silver stand-offs make it very easy to mount to the wall. Make your own original designs and print them on any (or all) of the seven available panel sizes in horizontal and vertical orientations. Square dimensions are available.<div>.:Material: Clear acrylic with white vinyl backing</div><br /><div>.:Clear, glossy surface</div><br /><div>.:Seven sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:NB! For indoor use only</div>",
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/636cd0dbba732d26b20893c4',
              'https://images.printify.com/6371e9da66bc8ab68a036598',
              'https://images.printify.com/632c604164dc9031a00d5f4a',
              'https://images.printify.com/632c5a79b5949011540d6815',
              'https://images.printify.com/6335d88bb4e620c9200c7b8e',
              'https://images.printify.com/63514c5f419ab22c6202d08f'
            ]
          },
          {
            id: 1130,
            title: 'Framed Posters, Matte',
            description: 'Your original artwork will be printed on a Forest Stewardship Council-certified paper sheet in picture-perfect quality and secured by a Black Perspex picture frame, as well as a white mat board inner-frame. The final product will have a beautiful matte finish. Choose from three sizes and both horizontal and vertical image orientations.<div>.:Black Perspex picture frame</div><br /><div>.:Matte poster finish</div><br /><div>.:White inner matboard</div><br /><div>.:Three sizes to choose from</div><br /><div>.:Horizontal and vertical options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62bacaa3e0fefe27cd0fb8c1',
              'https://images.printify.com/62baedda099b9b5be708a80a',
              'https://images.printify.com/632d8906dc71f8636e040e48',
              'https://images.printify.com/632d8906dc71f8636e040e4f'
            ]
          },
          {
            id: 1140,
            title: 'Framed Prints, Black',
            description: 'Prints with a black Perspex frame compliment any interior style with elegance. A white inner matboard keeps everything looking sleek and polished. Pick from multiple sizes and turn it any way you want – they are available in both landscape and portrait orientations.<div>.:Materials: black MDF frame and backing, clear Perspex insert cover</div><br /><div>.:Four sizes to choose from</div><br /><div>.:200 gsm, FSC-certified paper</div><br /><div>.:White inner matboard</div><br /><div>.:Horizontal and vertical options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/632078387b2b838d8e09c714',
              'https://images.printify.com/63206820e8a73f960501fcf3',
              'https://images.printify.com/632022843d58d2911d053a13',
              'https://images.printify.com/6320216957df61ba87018671',
              'https://images.printify.com/6320216a57df61ba87018676',
              'https://images.printify.com/6320216a57df61ba8701867b'
            ]
          },
          {
            id: 1159,
            title: 'Matte Canvas, Stretched, 1.25"',
            description: `Place your custom artwork, photos, or creative projects on a canvas you'll be proud to use. Each matte canvas comes with back hanging already included for convenient placement. The frame is made with profile radial pine that is ethically sourced from renewable forests.<div>.:Cotton and polyester canvas composite with a special proprietary coating</div><br /><div>.:Inner frame made with radial pine sourced from renewable forests</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Comes in 24 different sizes</div><br /><div>.:Soft rubber dots on bottom back corners for support</div><br /><div>.:Back hanging included</div><br /><div>.:NB! Due to the production process of the canvases, please allow for slight size deviations with a tolerance +/- 1/8" (3.2mm)</div>`,
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/62ff2e6090af88d89c00c496',
              'https://images.printify.com/62ff2e676ad0c1b9ec0c0e9f',
              'https://images.printify.com/62ff3eea7dfe54113e00868c',
              'https://images.printify.com/62fcf7e5818c78e9580ad7c5',
              'https://images.printify.com/6360e9157e2beffadf0e0ed5',
              'https://images.printify.com/62fcfbb739bf6292eb075bfa',
              'https://images.printify.com/62fcfbb8ea7ba072fc04fe14',
              'https://images.printify.com/62fcfbb839bf6292eb075bfe'
            ]
          },
          {
            id: 1191,
            title: 'Photo Art Paper Posters',
            description: 'Turn any art into a wonderful piece to behold and own thanks to the 210gsm (9mil) premium paper stock of these posters. The paper used in these posters comes with a smooth satin finish for a high-end feel and is FSC-certified. Choose between multiple sizes to best fit your needs as well as between horizontal or vertical options to best suit your artwork. <br/><br/>NB! Each poster features a white border with a small barcode<div>.:Material: 210gsm (9mil) premium paper stock with smooth satin finish</div><br /><div>.:24 sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:FSC-certified paper</div><br /><div>.:Blank product sourced from Canada</div><br /><div>.:NB! Each poster features a white 0.5cm border with a small barcode</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/630397c9607181da54084aa9',
              'https://images.printify.com/6364ef7d6e97e027b605ee26',
              'https://images.printify.com/630cc47282a56b781e0a0414',
              'https://images.printify.com/630c9c43e0aa0b0ca0046184',
              'https://images.printify.com/630c9c44705b8a49bc005a34'
            ]
          },
          {
            id: 1206,
            title: 'Metal Art Sign',
            description: 'Place your art, pictures, logos, or slogans on these personalized metal signs to create unique decoration pieces. Made with 3mm white aluminum composite, these signs come with a beautiful white matte finish that is ideal for printing. Each sign comes with one mounting block for effortless hanging and is available in 11 sizes.<div>.:Material: White aluminum composite</div><br /><div>.:Matte finish</div><br /><div>.:Eleven sizes to choose from</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Includes one mounting block, metal plate, and double-sided tape for hanging</div><br /><div>.:NB! Customer assembly is required</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/63241470be894b9d840bc2a4',
              'https://images.printify.com/63206a801d9d07a6b40845db',
              'https://images.printify.com/632328d8462be4b805039eac',
              'https://images.printify.com/63206a9d78561d41a0046873',
              'https://images.printify.com/63206a9f78561d41a0046877',
              'https://images.printify.com/6322ef66e44c356cd90d3a23',
              'https://images.printify.com/632073794db4abb8b70e9345',
              'https://images.printify.com/632c63efb6037a6023024647',
              'https://images.printify.com/632c63f3b6037a602302464b'
            ]
          },
          {
            id: 1220,
            title: 'Rolled Prints',
            description: "Choose between fine-art (310gsm) or semi-gloss paper (260gsm), and bring your artwork to life in stunning detail. Whether it's breathtaking landscapes, or eye-capturing portraits, these rolled prints can feature it all as they come in multiple sizes as well as horizontal and vertical orientations. <div>.:Materials: 310 gsm paper (fine art), 260 gsm paper (semi-glossy)</div><br /><div>.:Two paper options - fine art and semi-gloss</div><br /><div>.:11 sizes to choose from</div><br /><div>.:Horizontal and vertical options available</div>",
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/63174bc52f8339f6a9023034',
              'https://images.printify.com/6336930b920b9a65f6005ac3',
              'https://images.printify.com/63369199d6f045decc00777a',
              'https://images.printify.com/6332c8f6314589d2610906ed'
            ]
          },
          {
            id: 1226,
            title: "Canvas Stretched, 1.5''",
            description: "Treat your fans and audience to a custom stretched canvas print of your work that they'll love. Made with hand-stretched fabric on wooden frame, these prints come with mounting hardware for hassle-free installation. Your art decorates the print in vivid detail and stunning colors. <br/>NB! Due to canvas production specifics the design placement might shift 1-3 mm and can go over the canvas edges. <div>.:Material: 100% polyester with semi-glossy finish </div><br /><div>.:Handstretched fabric on pine wood frame</div><br /><div>.:Small QR codes on the back</div><br /><div>.:Horizontal, vertical and square options available</div><br /><div>.:Includes mounting hardware</div><br /><div>.:Assembled in the USA from Globally Sourced Parts</div>",
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/63234a2255637568d9079ca5',
              'https://images.printify.com/63234a25b04ef8c7e80fc20d',
              'https://images.printify.com/6324846a16893fb49b095a59',
              'https://images.printify.com/6324841c9bf761bc980e9c3a',
              'https://images.printify.com/632483df9bf761bc980e9c35',
              'https://images.printify.com/63442b5a01e3f227f9064eca',
              'https://images.printify.com/63296c60ee435ebeaa00f3e1',
              'https://images.printify.com/6328581d53c8c356740d3443'
            ]
          },
          {
            id: 1236,
            title: 'Framed Papers',
            description: 'Please add a description.<div>.:Wooden frame with a matte black enamel finish</div><br /><div>.:Shatter-proof plexiglass</div><br /><div>.:Two paper options - fine art and semi-gloss</div><br /><div>.:Paper thickness: 310 gsm for fine art, 260 gsm for semi-glossy paper </div><br /><div>.:Pre-installed hanging hardware and rubber bumpers</div><br /><div>.:Multiple sizes to choose from</div><br /><div>.:Horizontal and vertical options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [ 'https://images.printify.com/6329baff7244537d900ac745' ]
          },
          {
            id: 1238,
            title: 'Polyester Canvas',
            description: 'Make your art feel at home on this polyester canvas. With 24 sizes to choose from in both horizontal and vertical options, you can find the perfect match for your art piece. Each canvas comes with a beautiful frame made of pine wood, making it a highly giftable product. <div>.:Material: 100% polyester canvas, pine wood frame</div><br /><div>.:Comes in 24 different sizes</div><br /><div>.:Horizontal, vertical and square options available</div>',
            brand: 'Generic brand',
            model: '',
            images: [
              'https://images.printify.com/6347e1a41281f08714058ab8',
              'https://images.printify.com/6347e0a52d3c0615c703395f',
              'https://images.printify.com/632c349651db91e3a701e013',
              'https://images.printify.com/632dbec64ac629355007b2b3',
              'https://images.printify.com/632dbecdc5b24903d50bb926',
              'https://images.printify.com/632c3462987499d4420da175',
              'https://images.printify.com/632dccec3928c6950800b223',
              'https://images.printify.com/632dca9e4ac629355007b2cd'
            ]
          }
      ]

const one = files[0]
const two = files[1]
const three = files[2]
const four = files[3]
const five = files[4]
const six = files[5]
const seven = files[6]
const eight = files[7]
const nine = files[8]
const ten = files[9]
const eleven = files[10]
const twelve = files[11]
const thirteen = files[12]
const fourteen = files[13]
const fifteen = files[14]
const sixteen = files[15]
const seventeen = files[16]
const eighteen = files[17]
const nineteen = files[18]
const twenty = files[19]
const twentyOne = files[20]
const twentyTwo = files[21]
const twentyThree = files[22]
const twentyFour = files[23]
const twentyFive = files[24]
const twentySix = files[25]
const twentySeven = files[26]
const twentyEight = files[27]
const twentyNine = files[28]
const thirty = files[29]
const thirtyOne = files[30]
const thirtyTwo = files[31]
const thirtyThree = files[32]
const thirtyFour = files[33]
const thirtyFive = files[34]
const thirtySix = files[35]
const thirtySeven = files[36]
const thirtyEight = files[37]

  function download(url) {
    axios
      .post(`/api/dalle/download`, { url: url })
      .then((res) => {
        const link = document.createElement("a");
        link.href = `data:application/octet-stream;base64,${res.data.result}`;
        link.download = `Atlas-Tattoo-Dev.png`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  const getVarients = async (provider, blueprint) => {
    const generate = await axios.post('/api/printify/varients', {
      provider: provider,
      blueprint: blueprint
    });
    console.log(generate.data);
  }

  const getShops = async () => {
    const generate = await axios.post('/api/printify/shops');
    console.log(generate.data);
  }

  const getProviders = async () => {
    const generate = await axios.post('/api/printify/providers');
    console.log(generate.data);
  }

  const getProducts = async (list) => {
    const generate = await axios.post('/api/printify/products', {
      id: list
    });
    console.log(generate.data);
  }

  const getCatalog = async (list) => {
    const generate = await axios.post('/api/printify/catalog');
    console.log(generate.data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      {!session && (
          <>
            <main className={styles.main}>
            <button className={styles.btn_neu} onClick={signIn}>Sign In</button>
            </main>
          </>
        )}
        {session && (
            <>
            <main className={styles.main}>
            <div className={styles.navbar_cont}>
            </div>
            <h1 className={styles.title}><span className={styles.titleColor}>Select an Image</span></h1>
            <div className={styles.grid}>
                <div className={styles.print_card}>
                    <h2 className={styles.card_header}>
                        {one.title}
                    </h2>
                    <Image 
                    className={styles.imgPreview}
                    src={one.images[0]}
                    width={300}
                    height={300}
                    quality={100}
                    alt=''/>
                </div>
            </div>
            </main>
        </>
        )}
       <Navbar />
    </div>
  );
}
