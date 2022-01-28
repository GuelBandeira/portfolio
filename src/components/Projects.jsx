import React from "react";
import { FaCheckCircle, FaDatabase, FaHtml5, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiShareBoxFill } from "react-icons/ri";
import "../Projects.css";
import IconProjects from "./Projetos/IconProjects";
import Video from "./Projetos/Video";
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
        {/* <div class="embed-container z-50 justify-items-center text-center justify-cente">
          <iframe
            src="https://www.youtube.com/embed/QILiHiTD3uc"
            frameborder="0"
            allowfullscreen
            className=" rounded-2xl frame mx-auto border-8 border-indigo-500 shadow-2xl shadow-indigo-900"
          ></iframe>
        </div> */}

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-white">
          <div className="embed-container mx-auto animate__animated animate__bounceInUp self-center max-w-2xl absolute shadow z-50 rounded-2xl">
            <lite-youtube videoid="ogfYd705cRs">
              <button type="button" class="lty-playbtn">
                <span class="lyt-visually-hidden">
                  Play Video: Keynote (Google I/O '18)
                </span>
              </button>
            </lite-youtube>
          </div>
          {/* <Video
            linkVideo={"https://www.youtube.com/embed/LhSDtX5HCHQ"}
          ></Video> */}
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
