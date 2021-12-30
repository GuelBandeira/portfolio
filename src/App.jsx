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
import imagem from "../src/images/guel.png"; // with import
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

// Preto mais claro = #191919
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
      <header>
        {/* Imagem Mobile  */}
        <div className="flex imagem-fundo flex-wrap pb-40 relative">
          <div className="lg:hidden max-w-screen-lg mx-auto pb-10 ">
            <img
              src={imagem}
              className="mx-auto h-64 w-full"
              alt="imagem"
            ></img>
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
                  href="https://api.whatsapp.com/send?  phone=5524999987722&text=Oi%2C%20tudo%20bem%3F"
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
            <img
              src={imagem}
              alt="imagem"
              className="lg:ml-24 items-center text-center float-left justify-center lg:mt-0 xl:mt-44 text-indigo-600 text-6xl "
            ></img>
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
        {/* <div class="-mb-1 imagem-fundo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4F46E5"
              fillOpacity="1"
              d="M0,128L40,149.3C80,171,160,213,240,202.7C320,192,400,128,480,112C560,96,640,128,720,165.3C800,203,880,245,960,266.7C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div> */}
        <section id="wave" class="relative">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class=" wave wave3"></div>
          <div class=" wave wave4"></div>
        </section>
        <div class="bg-indigo-600">
          <h1 className="text-5xl pt-12 box-shadow-3d shadow-indigo-500">
            Conhecimentos
          </h1>
          <blockquote>
            <p className="mx-auto lg:w-5/12 text-lg pt-8 box-shadow-3d-minus">
              "A única maneira de fazer um grande trabalho é amando o que se
              faz." <br></br>- Steve Jobs
            </p>
          </blockquote>
        </div>

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
        {/* <svg viewBox="0 0 1440 319" className="-mb-1" fill="">
            <path d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg> */}
      </section>
      <section id="wave" class="relative rotate-180">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class=" wave wave3"></div>
        <div class=" wave wave4"></div>
      </section>
      <Projects />
      <footer className="bg-indigo-600 pb-2 ">
        {/* WAVE ESTATICA */}
        {/* <div class="imagem-fundo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4F46E5"
              fill-opacity="1"
              d="M0,128L40,144C80,160,160,192,240,218.7C320,245,400,267,480,250.7C560,235,640,181,720,154.7C800,128,880,128,960,144C1040,160,1120,192,1200,208C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div> */}
        <section id="wave" class="relative">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class=" wave wave3"></div>
          <div class=" wave wave4"></div>
        </section>
        <h1 className="text-2xl text-white text-center pt-12 box-shadow-3d shadow-indigo-500">
          Esse site foi criado com muito 💜,☕ &
          <FaReact className="inline-flex text-3xl ml-2 mb-1 text-cyan-400 animate-spin" />
        </h1>
      </footer>
    </>
  );
}

export default App;
