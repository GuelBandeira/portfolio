import React from "react";
import "./App.css";
import Background from "./components/Background";
import BlurBackground from "./components/BlurBackground";
import Description from "./components/Description";
import TypingEffect from "./components/TypingEffect";

function App() {
  return (
    <>
      <div class="relative z-20 hidden grid-cols-2 lg:grid bg-black">
        <Background />
        <div class="relative z-10 min-h-screen mr-10  min-w-screen max-w-none">
          <div class="absolute ml-24 items-center justify-center mt-64 text-indigo-600 text-6xl ">
            <TypingEffect />
            <Description />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
