import React from "react";
import "./App.css";
import Background from "./components/Background";
import Description from "./components/Description";
import TypingEffect from "./components/TypingEffect";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Button from "./components/Button";
import imagem from "../src/images/denis.gif"; // with import
import Carrousel from "./components/Slider";

function App() {
  return (
    <>
      <header>
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

      <section
        className="relative items-center text-center justify-center "
        style={{ backgroundColor: "#222" }}
      >
        <h1 className="text-white text-5xl pt-12">Conhecimentos</h1>
        <p className="mx-auto lg:w-5/12 text-white pt-12 text-center justify-items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          perferendis repellat adipisci quis aliquid praesentium, et ea cum fuga
          ut cupiditate placeat ad amet voluptatum dolorum fugit atque inventore
          quibusdam?
        </p>
        <Carrousel />
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
    </>
  );
}

export default App;
