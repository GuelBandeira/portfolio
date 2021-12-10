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
        {/* <Background /> */}
        <div class="relative z-10 min-h-screen mr-10  min-w-screen max-w-none">
          <div class="absolute ml-24 items-center justify-center mt-64 text-indigo-600 text-6xl ">
            <TypingEffect />
            <Description />

            <a href="https://api.whatsapp.com/send?phone=5524999987722&text=Oi%2C%20tudo%20bem%3F">
              <Button>
                <FaWhatsapp class="inline-flex mb-1 text-xl" /> Whatsapp
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/jos%C3%A9-miguel-bandeira-de-novaes-09b1b91a2/">
              <Button>
                <FaLinkedin class="inline-flex mb-1 text-xl" /> Linkedin
              </Button>
            </a>
          </div>
        </div>
      </div>

      <section>
        <div
          class="relative justify-center text-center"
          style={{ backgroundColor: "#222" }}
        >
          <h1 class="text-white text-5xl pt-12">Conhecimentos</h1>
          <div class="relative z-10 min-h-screen mr-10  min-w-screen max-w-none">
            <p class="text-white pt-12 text-center justify-items-center max-w-md ml-32 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis repellat adipisci quis aliquid praesentium, et ea cum
              fuga ut cupiditate placeat ad amet voluptatum dolorum fugit atque
              inventore quibusdam?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
