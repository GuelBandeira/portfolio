import React from "react";
import "./App.css";
import BlurBackground from "./components/BlurBackground";
import TypingEffect from "./components/TypingEffect";

function App() {
  return (
    <>
      <div class="relative z-20 hidden grid-cols-2 lg:grid">
        <BlurBackground />
        <div class="relative z-10 min-h-screen mr-10 bg-black bg-opacity-40 min-w-screen max-w-none">
          <div class="flex items-center justify-center mt-96 text-purple-500 text-6xl ">
            <TypingEffect />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
