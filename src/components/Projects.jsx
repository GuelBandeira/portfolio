import React from "react";
import {
  FaCheck,
  FaCheckCircle,
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

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
          <div className="video-container absolute z-50 ">
            <iframe
              className="rounded-2xl mx-auto lg:ml-16 border-8 border-indigo-500 shadow-2xl shadow-indigo-900"
              width="600"
              height="350"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <div className="w-full bg-indigo-600 shadow-indigo-900 shadow-2xl rounded-lg mt-40 flex space-y-5 flex-col justify-center items-center">
            <h1 className=" text-center text-3xl mt-56 font-bold">
              ETPC E-SPORTS
            </h1>
            <p className="text-justify font-thin max-w-lg p-9 lg:p-0">
              O site ETPC E-SPORTS faz parte de uma iniciativa criada por mim e
              meus amigos, com o intuito de trazer o âmbito dos esportes
              eletrônicos para a escola técnica. Desse modo, realizamos uma
              parceria com a Fundação CSN, e criamos um site do zero, para o
              aluno realizar sua inscrição, verificar as equipes do campeonato,
              além de poder visualizar chaveamento.<br></br>
              <span className="p-4 text-justify font-thin max-w-lg justify-items-start">
                <span className="block">
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Cadastro de times
                </span>
                <span className="block">
                  <FaCheckCircle className="inline-flex mr-2  mb-1" />
                  Chaveamento
                </span>
                <span className="block">
                  <FaCheckCircle className="inline-flex mr-2  mb-1" />
                  Equipes
                </span>
              </span>
            </p>

            <span className="inline-flex text-4xl text-white space-x-5 text-center items-center justify-items-center">
              <FaHtml5 /> <SiJavascript /> <SiTailwindcss /> <FaPhp />
            </span>
            <div className="block pb-10 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://esportsetpcvr.com.br/"
              >
                <button className="hover:shadow-2xl text-black hover:shadow-black bg-white rounded-xl text-lg p-3 transform duration-300 ease-in hover:text-white hover:bg-black  ">
                  <RiShareBoxFill className="inline-flex mb-1 font-bold" />
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
