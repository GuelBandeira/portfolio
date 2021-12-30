import React from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaDatabase,
  FaHtml5,
  FaPhp,
  FaTable,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiShareBoxFill } from "react-icons/ri";
import Button from "./Button";
import "../Projects.css";
import etpc from "../images/etpc.png";
import etpcMobile from "../images/etpc-mobile.png";
import Card from "./Card/Card";
import IconProjects from "./Projetos/IconProjects";
import Video from "./Projetos/Video";

const Projects = () => {
  return (
    <>
      {/* PROJETOS */}
      <main className="imagem-fundo pb-32 pt-40 ">
        {/* HEADER */}
        <h1
          className="text-white text-center text-6xl"
          style={{ fontFamily: "Patua One" }}
        >
          Alguns de meus projetos:
        </h1>
        {/* <div class="embed-container z-50 justify-items-center text-center justify-cente">
          <iframe
            src="https://www.youtube.com/embed/QILiHiTD3uc"
            frameborder="0"
            allowfullscreen
            className=" rounded-2xl frame mx-auto border-8 border-indigo-500 shadow-2xl shadow-indigo-900"
          ></iframe>
        </div> */}

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
          <Video
            linkVideo={"https://www.youtube.com/embed/tgbNymZ7vqY"}
          ></Video>
          <div className="w-full bg-indigo-600 shadow-indigo-900 shadow-2xl rounded-lg -mt-24 flex space-y-5 flex-col justify-center items-center">
            <h1 className=" text-center text-3xl font-bold pt-32">
              ETPC E-SPORTS
            </h1>
            <p className="text-justify font-thin max-w-xl pt-9 pr-9 pl-9 lg:p-0">
              O site ETPC E-SPORTS faz parte da uma iniciativa de mesmo nome,
              criada por mim e meus amigos com o intuito de levar o âmbito dos
              esportes eletrônicos para a escola técnica. Desse modo, realizamos
              uma parceria com a Fundação CSN para a divulgação, e criamos um
              site do completo zero. Desempenhei as seguintes funções no
              projeto:
              <br></br>
              <span className="p-4 justify-items-start font-thin max-w-lg self-center">
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Identidade Visual
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Marketing
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  UX/Design do Website
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Cadastro de Equipes
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2  mb-1" />
                  Chaveamento
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2  mb-1" />
                  Equipes
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
                <button className="hover:shadow-2xl text-black hover:shadow-black bg-white rounded-xl text-lg p-3 transform duration-300 ease-in hover:text-white hover:bg-black  ">
                  <RiShareBoxFill className="inline-flex mb-1 font-bold" />{" "}
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
