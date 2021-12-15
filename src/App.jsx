import React from "react";
import "./App.css";
import Background from "./components/Background";
import Description from "./components/Description";
import TypingEffect from "./components/TypingEffect";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Button from "./components/Button";
import imagem from "../src/images/denis.gif"; // with import
import Carrousel from "./components/Slider";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll>
        <header className="-mb-2">
          {/* Imagem Mobile  */}
          <div className="flex flex-wrap xl:-mx-8 bg-black">
            <div className="w-full lg:hidden xl:my-8 xl:px-8 xl:w-1/2">
              <img src={imagem} alt="imagem"></img>
            </div>

            {/* Principal */}
            <div className="w-full xl:my-8 xl:px-8 xl:w-1/2">
              <div className="lg:ml-24 m-2 z-20 items-center text-center lg:text-left justify-center mt-8 lg:mt-64 text-indigo-600 text-6xl ">
                <TypingEffect />
                <Description />

                <a href="https://api.whatsapp.com/send?phone=5524999987722&text=Oi%2C%20tudo%20bem%3F">
                  <Button>
                    <FaWhatsapp className="inline-flex mb-1 text-xl" /> Whatsapp
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/jos%C3%A9-miguel-bandeira-de-novaes-09b1b91a2/">
                  <Button>
                    <FaLinkedin className="inline-flex mb-1 text-xl" /> Linkedin
                  </Button>
                </a>
              </div>
            </div>

            {/* Imagem Desktop */}
            <div className="w-full lg:inline hidden xl:my-8 xl:px-8 xl:w-1/2">
              <img src={imagem} alt="imagem"></img>
            </div>
          </div>
        </header>

        {/* position: relative; display: flex; flex-direction: column; align-items:
      center; min-height: 400px; padding-top: 100px; */}

        {/* position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0; */}

        {/*
         COOL ANIMATION
  
         <span class="flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-screen w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span> */}
        <section className="text-white text-center justify-items-center">
          <div class="bg-black -mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#4F46E5"
                fill-opacity="1"
                d="M0,128L40,149.3C80,171,160,213,240,202.7C320,192,400,128,480,112C560,96,640,128,720,165.3C800,203,880,245,960,266.7C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="bg-indigo-600 relative">
            <h1 className="text-5xl pt-12">Conhecimentos</h1>
            <p className="mx-auto lg:w-5/12 pt-8 justify-items-center">
              Iniciei nessa área quando tinha 12 anos de idade, comecei me
              interessando por programação e futuramente só fui adentro ao
              grande abismo de desenvolvimento
            </p>

            <Carrousel />
            <svg viewBox="0 0 1440 319">
              <path
                fill="#000"
                fill-opacity="1"
                d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
        {/* 
<header
  className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Welcome to my site!
  </div>
</header>
<div className="max-w-lg m-auto">
  <p className="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
    laoreet sem, semper molestie libero.
  </p>
  <p className="mb-4">
    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
    ipsum, id consequat nulla nunc in ligula.
  </p>
  <p className="mb-12">
    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
    neque.
  </p>
</div>
<section
  className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Parralax inline
  </div>
</section>
<div className="max-w-lg m-auto">
  <p className="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
    laoreet sem, semper molestie libero.
  </p>
  <p className="mb-4">
    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
    ipsum, id consequat nulla nunc in ligula.
  </p>
  <p className="mb-4">
    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
    neque.
  </p>
</div> */}
      </SmoothScroll>
    </>
  );
}

export default App;
