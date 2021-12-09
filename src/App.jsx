import React from "react";
import "./App.css";
import BlurBackground from "./components/BlurBackground";
import TypingEffect from "./components/TypingEffect";

function App() {
  return (
    <>
      <div class="relative z-20 hidden grid-cols-2 lg:grid bg-black">
        <div class="relative z-10 min-h-screen mr-10  min-w-screen max-w-none">
          <div class="absolute ml-24 items-center justify-center mt-64 text-indigo-600 text-6xl ">
            <TypingEffect />
            <p class="relative text-4xl text-white text-start mt-2">
              Me chamo{" "}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Guel
              </span>
              . Sou um desenvolvedor/programador trainee apaixonado por Full
              Stack
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
