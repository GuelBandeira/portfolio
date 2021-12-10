import React from "react";
import "./App.css";
import Background from "./components/Background";
import Description from "./components/Description";
import TypingEffect from "./components/TypingEffect";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div class="relative z-20 hidden lg:grid-cols-2 lg:grid bg-black">
        <Background />
        <div class="relative z-10 min-h-screen mr-10  min-w-screen max-w-none">
          <div class="absolute ml-24 items-center justify-center mt-64 text-indigo-600 text-6xl ">
            <TypingEffect />
            <Description />

            <Button>
              <FaWhatsapp class="inline-flex mb-1 text-xl" /> Whatsapp
            </Button>

            <Button>
              <FaLinkedin class="inline-flex mb-1 text-xl" /> Linkedin
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
