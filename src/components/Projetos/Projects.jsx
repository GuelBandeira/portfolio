import React from "react";
import {
  FaCheckCircle,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaPhp,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiShareBoxFill } from "react-icons/ri";
import "./Projects.css";
import IconProjects from "./IconProjects";
import Video from "./Video";
import etpc from "../../images/etpcesports.png";
import shopping from "../../images/mycar.png";
import formulario from "../../images/formulario.png";
import bitway from "../../images/bitway.png";
const Projects = () => {
  return (
    <>
      {/* PROJETOS */}
      <main className=" pt-48 lg:-mb-28">
        {/* HEADER */}
        <h1
          className="text-white text-center text-6xl"
          style={{ fontFamily: "Patua One" }}
        >
          Alguns de meus projetos:
        </h1>
        <section className="col-span-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
          {/* <Video
            linkVideo={"https://www.youtube.com/embed/LhSDtX5HCHQ"}
          ></Video> */}
          <div className="embed-container mx-auto self-center max-w-2xl absolute shadow z-50 rounded-2xl">
            <img
              src={etpc}
              className="rounded-2xl image-logo imagem-logo border-4 mx-auto border-indigo-600"
              data-aos="fade-up"
            ></img>
          </div>
          <div className="w-full bg-indigo-600 shadow-indigo-900 shadow-2xl rounded-lg -mt-24 flex space-y-5 flex-col justify-center items-center">
            <h1
              className=" text-center text-3xl font-bold pt-32 font"
              data-aos="flip-left"
            >
              ETPC E-SPORTS
            </h1>
            <p
              className="text-justify font-thin max-w-xl pt-9 px-9 lg:p-0 font"
              data-aos="fade-zoom-in"
            >
              O site ETPC E-SPORTS faz parte da iniciativa de mesmo nome, criada
              por mim e meus amigos com o intuito de levar o âmbito dos esportes
              eletrônicos para a Escola Técnica Pandiá Calógeras. Desse modo,
              realizamos uma parceria com a Fundação CSN para a divulgação, e
              criamos um site do completo zero. Desempenhei as seguintes funções
              no projeto:
              <br></br>
              <span className="p-4">
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Front-end
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Back-end
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  UX/UI Design
                </IconProjects>
              </span>
            </p>

            <span className="inline-flex text-4xl text-white space-x-5 text-center items-center justify-items-center">
              <FaHtml5 /> <SiJavascript /> <SiTailwindcss /> <FaPhp />
              <FaDatabase />
            </span>
            <div className="block pb-10 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://esportsetpcvr.com.br/"
              >
                <button className="item3 button hover:shadow-2xl text-indigo-600 hover:shadow-black bg-white rounded-xl text-lg p-3 relative  justify-center overflow-hidden duration-1000 transform ease-in-out hover:text-white  ">
                  <RiShareBoxFill className="inline-flex mb-1 mr-1 font-bold" />
                  Acessar Site
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="col-span-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
          {/* <Video
            linkVideo={"https://www.youtube.com/embed/LhSDtX5HCHQ"}
          ></Video> */}
          <div className="embed-container mx-auto self-center max-w-2xl absolute shadow z-50 rounded-2xl">
            <img
              src={shopping}
              className="rounded-2xl border-4 mx-auto border-indigo-600"
              data-aos="fade-up"
            ></img>
          </div>
          <div className="w-full bg-indigo-600 shadow-indigo-900 shadow-2xl rounded-lg -mt-24 flex space-y-5 flex-col justify-center items-center">
            <h1
              className=" text-center text-3xl font-bold pt-32 font"
              data-aos="flip-left"
            >
              MY NFT CAR
            </h1>
            <p
              className="text-justify font-thin max-w-xl pt-9 px-9 lg:p-0 font"
              data-aos="fade-zoom-in"
            >
              O MY NFT CAR é um dos projetos dos quais mais me orgulho de ter feito, pois foi muito gratificante de construir o website tentando ao máximo me desafiar e deixá-lo o mais bonito e fiel á proposta possível:
              <br></br>
              <span className="p-4">
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Front-end
                </IconProjects>
              </span>
            </p>

            <span className="inline-flex text-4xl text-white space-x-5 text-center items-center justify-items-center">
              <FaHtml5 /> <SiJavascript /><FaCss3 /> 
              
            </span>
            <div className="block pb-10 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mynftcar.io/"
              >
                <button className="item3 button hover:shadow-2xl text-indigo-600 hover:shadow-black bg-white rounded-xl text-lg p-3 relative  justify-center overflow-hidden duration-1000 transform ease-in-out hover:text-white  ">
                  <RiShareBoxFill className="inline-flex mb-1 mr-1 font-bold" />
                  Acessar Site
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="col-span-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
          {/* <Video
            linkVideo={"https://www.youtube.com/embed/LhSDtX5HCHQ"}
          ></Video> */}
          <div className="embed-container mx-auto self-center max-w-2xl absolute shadow z-50 rounded-2xl">
            <img
              src={formulario}
              className="rounded-2xl border-4 mx-auto border-indigo-600"
              data-aos="fade-up"
            ></img>
          </div>
          <div className="w-full bg-indigo-600 shadow-indigo-900 shadow-2xl rounded-lg -mt-24 flex space-y-5 flex-col justify-center items-center">
            <h1
              className=" text-center text-3xl font-bold pt-32 font"
              data-aos="flip-left"
            >
              NYX SOUL
            </h1>
            <p
              className="text-justify font-thin max-w-xl pt-9 px-9 lg:p-0 font"
              data-aos="fade-zoom-in"
            >
              O Nyx Soul além de ter sido o meu primeiro contato com a web3, fazendo a integração com a blockchain por meio da conexão da carteira do Metamask, também foi um dos projetos mais divertidos de se criar. O Nyx Soul é um formulário de múltiplas etapas criado em Javascript, com intuito de gerar uma imagem NFT por meio de suas ramificações de escolhas dentre as questões do formulário.
              <br></br>
              <span className="p-4">
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Front-end
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Back-end
                </IconProjects>
              </span>
            </p>

            <span className="inline-flex text-4xl text-white space-x-5 text-center items-center justify-items-center">
              <FaHtml5 /> <SiJavascript /><FaCss3 /> 
              <FaPhp />
              <FaDatabase />
            </span>
            <div className="block pb-10 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://individuation.nyxsoul.io"
              >
                <button className="item3 button hover:shadow-2xl text-indigo-600 hover:shadow-black bg-white rounded-xl text-lg p-3 relative  justify-center overflow-hidden duration-1000 transform ease-in-out hover:text-white  ">
                  <RiShareBoxFill className="inline-flex mb-1 mr-1 font-bold" />
                  Acessar Site
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="col-span-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
          {/* <Video
            linkVideo={"https://www.youtube.com/embed/LhSDtX5HCHQ"}
          ></Video> */}
          <div className="embed-container mx-auto self-center max-w-2xl absolute shadow z-50 rounded-2xl">
            <img
              src={bitway}
              className="rounded-2xl border-4 mx-auto border-indigo-600"
              data-aos="fade-up"
            ></img>
          </div>
          <div className="w-full bg-indigo-600 shadow-indigo-900 shadow-2xl rounded-lg -mt-24 flex space-y-5 flex-col justify-center items-center">
            <h1
              className=" text-center text-3xl font-bold pt-32 font"
              data-aos="flip-left"
            >
              BITWAY
            </h1>
            <p
              className="text-justify font-thin max-w-xl pt-9 px-9 lg:p-0 font"
              data-aos="fade-zoom-in"
            >
O projeto do aplicativo/sistema Bitway foi o projeto mais desafiador que já trabalhei, me empenhei ao máximo para realizá-lo, além de aprender com cada passo que fui dando. A proposta do aplicativo é fornecer um espaço para anunciar os estabelecimentos a venderem o seu produto, com foco no delivery de comida, porém com o diferencial de ter franqueados, sendo eles responsáveis pelas lojas cadastradas com seu código da sua respectiva região:      <br></br>
              <span className="p-4">
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Front-end
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Back-end
                </IconProjects>
              </span>
            </p>

            <span className="inline-flex text-4xl text-white space-x-5 text-center items-center justify-items-center">
              <FaHtml5 /><SiJavascript /> <FaCss3 /> 
              <FaPhp />
              <FaDatabase />
            </span>
            <div className="block pb-10 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.bitwaytoken.com/"
              >
                <button className="item3 button hover:shadow-2xl text-indigo-600 hover:shadow-black bg-white rounded-xl text-lg p-3 relative  justify-center overflow-hidden duration-1000 transform ease-in-out hover:text-white  ">
                  <RiShareBoxFill className="inline-flex mb-1 mr-1 font-bold" />
                  Acessar Site
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
