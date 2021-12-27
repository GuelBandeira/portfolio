import React from "react";
import "./App.css";
import Background from "./components/Background";
import Description from "./components/Description";
import TypingEffect from "./components/TypingEffect";
import {
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaCode,
  FaPalette,
} from "react-icons/fa";
import Button from "./components/Button";
import imagem from "../src/images/denis.gif"; // with import
import SmoothScroll from "./components/SmoothScroll";
import Projects from "./components/Projects";
import CustomScroll from "react-custom-scroll";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import AnimatedCursor from "react-animated-cursor";
import { BiCodeBlock } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import MainText from "./components/Card/MainText";
import Icon from "./components/Card/Icon";
import SubText from "./components/Card/SubText";
import Card from "./components/Card/Card";
import ContainerCard from "./components/Card/ContainerCard";

function App() {
  return (
    <>
      <AnimatedCursor
        //Tamanho cursor
        innerSize={8}
        //Tamanho bola externa
        outerSize={30}
        //Cor
        color="255, 255, 255"
        //Transparência
        outerAlpha={0.2}
        //Tamanho do cursor Hover
        innerScale={2}
        //Tamanho da bola externa hover
        outerScale={2}
      />
      <header className="-mb-2">
        {/* Imagem Mobile  */}
        <div className="flex flex-wrap" style={{ backgroundColor: "#191919" }}>
          <div className="w-full lg:hidden xl:my-8 xl:px-8 xl:w-1/2">
            <img src={imagem} alt="imagem"></img>
          </div>

          {/* Principal */}
          <div className="w-full xl:my-8 xl:px-8 xl:w-1/2">
            <div className="lg:ml-24 m-2 items-center text-center lg:text-left justify-center mt-8 lg:mt-64 text-indigo-600 text-6xl ">
              <TypingEffect className="text-shadow-lg" />
              <Description />
              <div className="space-x-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5524999987722&text=Oi%2C%20tudo%20bem%3F"
                >
                  <Button>
                    <FaWhatsapp className="inline-flex mb-1 text-xl" /> Whatsapp
                  </Button>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/jos%C3%A9-miguel-bandeira-de-novaes-09b1b91a2/"
                >
                  <Button>
                    <FaLinkedin className="inline-flex mb-1 text-xl" /> Linkedin
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Imagem Desktop */}
          <div className="w-full lg:inline hidden xl:my-8 xl:px-8 xl:w-1/2">
            <img src={imagem} alt="imagem"></img>
          </div>
        </div>
      </header>

      {/*
         COOL ANIMATION
  
         <span class="flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-screen w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span> */}
      <section className="text-white text-center justify-items-center">
        <div class="-mb-1" style={{ backgroundColor: "#191919" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4F46E5"
              fill-opacity="1"
              d="M0,128L40,149.3C80,171,160,213,240,202.7C320,192,400,128,480,112C560,96,640,128,720,165.3C800,203,880,245,960,266.7C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div class="bg-indigo-600 ">
          <h1 className="text-5xl pt-12 box-shadow-3d shadow-indigo-500">
            Conhecimentos
          </h1>
          <blockquote>
            <p className="mx-auto lg:w-5/12 text-lg pt-8 box-shadow-3d-minus">
              "A única maneira de fazer um grande trabalho é amando o que se
              faz." <br></br>- Steve Jobs
            </p>
          </blockquote>
          {/* <div className="bg-grey-light py-8 w-full flex justify-center items-center">
            <div className="bg-black rounded w-1/4 shadow hover:shadow-md duration-4">
              <div className="flex flex-row justify-between uppercase font-bold text-blue-dark border-b p-6">
                <p>My awesome item name</p>
                <div className="cursor-pointer text-grey-dark hover:text-blue duration-4">
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </div>
              <div className="p-6 text-grey-darker text-justify flex flex-col">
                <img
                  src="https://picsum.photos/300/300"
                  alt="Some image"
                  className="w-64 flex self-center rounded-full shadow-lg mb-6"
                ></img>
                <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
                  Item description:
                </p>
                <span className="text-grey-darker">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <div className="pt-4">
                  <span className="uppercase bg-green text-white font-bold p-2 text-xs shadow rounded">
                    25% off
                  </span>
                  <span className="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">
                    stock: 3
                  </span>
                </div>
              </div>
              <div className="p-6 text-grey-darker text-justify flex flex-row justify-end border-t">
                <button className="uppercase self-end text-blue mx-8 text-sm hover:text-blue-dark duration-4 self-center">
                  details
                </button>
                <button className="uppercase self-end bg-green font-bold text-white px-6 py-4 rounded hover:bg-green-dark duration-4">
                  <i className="fa fa-cart-plus mr-4"></i>Add to cart
                </button>
              </div>
            </div>
          </div> */}

          <ContainerCard>
            <Card>
              <Icon>
                <FaCode />
              </Icon>
              <MainText>Front-end</MainText>
              <SubText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, omnis! Dignissimos minima quo veritatis error?
              </SubText>
            </Card>

            <Card>
              <Icon>
                <BiCodeBlock />
              </Icon>
              <MainText>Back-end</MainText>
              <SubText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, omnis! Dignissimos minima quo veritatis error?
              </SubText>
            </Card>

            <Card>
              <Icon>
                <IoIosColorPalette />
              </Icon>
              <MainText>Criatividade</MainText>
              <SubText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, omnis! Dignissimos minima quo veritatis error?
              </SubText>
            </Card>
          </ContainerCard>
          {/* <div className="grid grid-cols-3 gap-24 m-5 justify-center items-center">
            <div className="bg-indigo-700 rounded-2xl p-6">
              <div className="rounded-full bg-indigo-900 self-center ">
                <FaCode />
              </div>

              <h1>Front-end</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae iure molestias autem excepturi, dolores provident.
              </p>
            </div>

            <div className="">
              <div className="bg-indigo-700 h-64 rounded-2xl p-6">
                <div className="rounded-full bg-indigo-900 w-24 p-5 text-6xl">
                  <FaCode className="" />
                </div>

                <h1>Back-end</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae iure molestias autem excepturi, dolores provident.
                </p>
              </div>
            </div>
            <div className="">test</div>
          </div> */}
          <svg viewBox="0 0 1440 319" className="-mb-1">
            <path
              fill="#191919"
              fill-opacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <Projects />

      <footer className="bg-indigo-600 ">
        <div class="" style={{ backgroundColor: "#191919" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4F46E5"
              fill-opacity="1"
              d="M0,128L40,144C80,160,160,192,240,218.7C320,245,400,267,480,250.7C560,235,640,181,720,154.7C800,128,880,128,960,144C1040,160,1120,192,1200,208C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h1 className="text-2xl text-white text-center pt-12 box-shadow-3d shadow-indigo-500">
          Esse site foi criado com muito 💜,☕ &
          <FaReact className="inline-flex text-3xl ml-2 mb-1 text-cyan-400 animate-spin" />
        </h1>
      </footer>

      <div id="absolute -z-30 top-0 left-0 w-full h-full"></div>
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
