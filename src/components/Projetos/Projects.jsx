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
import shopping from "../../images/shopping33.png";
const Projects = () => {
  return (
    <>
      {/* PROJETOS */}
      <main className="imagem-fundo pt-48 lg:-mb-28">
        {/* HEADER */}
        <h1
          className="text-white text-center text-6xl"
          style={{ fontFamily: "Patua One" }}
        >
          Alguns de meus projetos:
        </h1>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
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
                  Criação completa do Front-end deste Website
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Criação completa do Back-end deste Website
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  UX/UI Design
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Marketing
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

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
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
              SHOPPING 33
            </h1>
            <p
              className="text-justify font-thin max-w-xl pt-9 px-9 lg:p-0 font"
              data-aos="fade-zoom-in"
            >
              Atualmente estou trabalhando no site do Shopping33 durante a minha
              estadia como Desenvolvedor Full Stack na agência Dec9 - Makerting
              e Tecnologia. Estou desempenhando as seguintes funções no projeto:
              <br></br>
              <span className="p-4">
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  Criação completa do Front-end deste Website
                </IconProjects>
                <IconProjects>
                  <FaCheckCircle className="inline-flex mr-2 mb-1" />
                  UI/UX Design
                </IconProjects>
              </span>
            </p>

            <span className="inline-flex text-4xl text-white space-x-5 text-center items-center justify-items-center">
              <FaHtml5 /> <FaCss3 /> <FaPhp />
              <SiJavascript />
            </span>
            <div className="block pb-10 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shopping33.com.br/"
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
