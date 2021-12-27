import React from "react";
import { FaHtml5, FaPhp, FaTable } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiShareBoxFill } from "react-icons/ri";
import Button from "./Button";
import "../Projects.css";
import etpc from "../images/etpc.png";
import etpcMobile from "../images/etpc-mobile.png";

const Projects = () => {
  return (
    <>
      {/* PROJETOS */}
      <main style={{ backgroundColor: "#191919" }}>
        {/* HEADER */}
        <h1
          className="text-white text-center text-6xl"
          style={{ fontFamily: "Patua One" }}
        >
          Alguns de meus projetos:
        </h1>
        <div className="mt-14 grid grid-cols-2 items-center justify-center gap-1">
          <div
            className="max-w-3xl ml-12 p-8 my-10 rounded-lg relative border-8 border-indigo-600 shadow-2xl md:p-12 z-10"
            style={{ backgroundColor: "#232323" }}
          >
            <h1 className="text-white text-center text-3xl font-bold">
              ETPC E-SPORTS
            </h1>
            <p className="text-white text-justify font-thin pt-2 max-w-lg">
              O site ETPC E-SPORTS faz parte de uma iniciativa criada por mim e
              meus amigos, com o intuito de trazer o âmbito dos esportes
              eletrônicos para a escola técnica. Desse modo, realizamos uma
              parceria com a Fundação CSN, e criamos um site do zero, para o
              aluno realizar sua inscrição, verificar as equipes do campeonato,
              além de poder visualizar chaveamento.<br></br>
              <span className="p-4">
                <span className="block">✅ Cadastro de times</span>
                <span className="block">✅ Chaveamento</span>
                <span className="block">✅ Equipes</span>
              </span>
            </p>
            <span className="inline-flex text-4xl text-indigo-600 space-x-5 pt-10 text-center items-center justify-items-center">
              <FaHtml5 /> <SiJavascript /> <SiTailwindcss /> <FaPhp />
            </span>
            <div className="block pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://esportsetpcvr.com.br/"
              >
                <Button>
                  <RiShareBoxFill className="inline-flex mb-1 font-bold" />
                  Acessar Site
                </Button>
              </a>
            </div>
          </div>

          {/* IMAGEM */}
          <div>
            <div className="z-30 flex items-center justify-center">
              <div className="max-w-3xl rounded-lg shadow-2xl shadow-indigo-900 border-8 border-indigo-600 z-10 mt-64">
                <img
                  src={etpc}
                  className="min-w-screen"
                  alt="etpc-esports"
                ></img>
              </div>
            </div>
          </div>
          {/* <div className="max-w-lg backdrop-blur-lg backdrop-filter p-8 float-left lg:absolute  shadow-indigo-500 ml-96 z-20 my-10 rounded-lg shadow-xl md:p-12">
            <img src={imagem} className="" alt="etpc-esports"></img>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Projects;
