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
  FaGithub,
} from "react-icons/fa";
import Button from "./components/Button";
import imagem from "../src/images/guel.png"; // with import
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
import "animate.css";
import { SiGmail } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { googleGmail } from "@iconify/react";
import logo from "../src/images/gmail.png";

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
        <div className="flex flex-wrap pb-40 relative imagem-fundo">
          {/* Principal */}
          <div className=" xl:my-8 xl:px-8 xl:w-1/2">
            <div className="lg:ml-24 m-2 items-center text-center xl:text-left xl:mt-64 justify-center mt-8 text-indigo-600 text-6xl ">
              {/* Imagem Mobile  */}
              <div className=" mx-auto xl:hidden pb-4">
                <img
                  src={imagem}
                  className="mx-auto h-60 shadow-indigo-600"
                  alt="imagem"
                  draggable="false"
                ></img>
              </div>

              <TypingEffect />
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
          <div className="w-full xl:my-8 xl:px-8 xl:w-1/2">
            <img
              src={imagem}
              alt="imagem"
              draggable="false"
              className="lg:ml-24 md:hidden hidden xl:hidden items-center text-center float-left justify-center lg:mt-0 xl:mt-44 text-indigo-600 text-6xl "
            ></img>

            {/* <img
              src={imagem}
              alt="imagem"
              draggable="false"
              className="lg:ml-24 lg:inline hidden items-center text-center float-left justify-center lg:mt-0 xl:mt-44 text-indigo-600 text-6xl "
            ></img> */}
            <ul class="mx-auto ag-glitch_list md:hidden hidden xl:inline">
              <li class="ag-glitch_item"></li>
              <li class="ag-glitch_item"></li>
              <li class="ag-glitch_item"></li>
              <li class="ag-glitch_item"></li>
              <li class="ag-glitch_item"></li>
            </ul>
          </div>
        </div>
      </header>
      {/*
         COOL ANIMATION
  
         <span class="flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-screen w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span> */}
      {/* <div class="-mb-1 imagem-fundo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4F46E5"
              fillOpacity="1"
              d="M0,128L40,149.3C80,171,160,213,240,202.7C320,192,400,128,480,112C560,96,640,128,720,165.3C800,203,880,245,960,266.7C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      <section className="text-white text-center self-center items-center mx-auto justify-center">
        <section id="wave" class="relative">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class=" wave wave3"></div>
          <div class=" wave wave4"></div>
        </section>

        <div class="bg-indigo-600">
          <h1 className="text-5xl pt-12 box-shadow-3d animate__animated animate__fadeInDown shadow-indigo-500">
            Conhecimentos
          </h1>
          <blockquote>
            <p className="pt-8 pb-4 -mb-1 box-shadow-3d-minus">
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
              Atualmente, eu tenho um maior foco por Front-end e amo utilizar
              React.js junto com Tailwind CSS
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
              Eu amo realizar código e criativo, pois eu crio o design & código,
              assim tudo flui da melhor maneira
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
      <footer className="bg-indigo-600 pb-2">
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
        <div class="imagem-fundo -pt-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4F46E5"
              fill-opacity="1"
              d="M0,288L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h1 className="text-5xl text-white text-center pt-12 box-shadow-3d shadow-indigo-500">
          Contato
        </h1>
        {/* BOTOES */}
        <div className="space-y-3">
          <div className="block">
            <button className="inline-flex rounded-full border-2 transition-all ease-in duration-300 p-1 items-center text-center hover:white text-gray-900 hover:text-white hover:border-green-400 hover:shadow-green-500 hover:shadow-xl border-gray-900 text-4xl bg-transparent hover:bg-green-500">
              <FaWhatsapp className="p-1 inline-flex" />
            </button>
            <span className="text-md pl-2 text-white text-center box-shadow-3d-minus">
              (24) 99998-7722
            </span>
          </div>
          <div className="block">
            <button className="inline-flex rounded-full border-2 transition-all ease-in duration-200 p-1 items-center text-center text-red-500 hover:text-white hover:shadow-red-500 hover:shadow-xl border-red-500 text-4xl bg-transparent hover:bg-red-500">
              <img src={logo} alt="" className="w-9 h-9 p-1" />
            </button>
            <span className="text-md pl-2 text-white box-shadow-3d-minus">
              bandeiraguel@gmail.com
            </span>
          </div>

          <div className="block">
            <button className="inline-flex rounded-full border-2 transition-all ease-in duration-200 p-1 items-center text-center text-gray-900 hover:text-white hover:shadow-blue-500 hover:shadow-xl border-gray-900 hover:border-blue-400 text-4xl bg-transparent hover:bg-blue-500">
              <FaLinkedin className="p-1" />
            </button>
            <span className="text-md pl-2 text-white box-shadow-3d-minus ">
              José Miguel Bandeira de Novaes
            </span>
          </div>

          <div className="block">
            <button className="inline-flex rounded-full border-2 transition-all ease-in duration-300 p-1 items-center text-center hover:white text-gray-900 hover:text-white hover:border-gray-700 hover:shadow-gray-900 hover:shadow-xl border-gray-900 text-4xl bg-transparent hover:bg-gray-900">
              <FaGithub className="p-1" />
            </button>
            <span className="text-md pl-2 text-white box-shadow-3d-minus">
              GuelBandeira
            </span>
          </div>
        </div>
        <h1 className="text-2xl text-white text-center pt-12 box-shadow-3d-minus">
          Esse site foi criado com muito 💜,☕ &
          <FaReact className="inline-flex text-3xl ml-2 lg:mb-1 text-cyan-400 animate-spin" />
        </h1>
      </footer>
    </>
  );
}

export default App;
