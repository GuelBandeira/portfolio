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

      <div class="flex flex-wrap overflow-hidden xl:-mx-8 bg-black">
        <div class="w-full overflow-hidden xl:my-8 xl:px-8 xl:w-1/2">
        <div class="lg:ml-24 m-2 z-20 items-center text-center lg:text-left justify-center lg:mt-64 mt-96 text-indigo-600 text-6xl ">
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

        <div class="w-full overflow-hidden xl:my-8 xl:px-8 xl:w-1/2">
          <div class="custom-img"></div>
        </div>

      </div>
      {/* Fim do Mobile */}

      {/* <header>
        <Background />
        <div class="relative z-20 hidden lg:grid-cols-2 lg:grid custom-img">
          <div class="relative z-10 min-h-screen mr-10 min-w-screen max-w-none">
            
          </div>
        </div>
      </header> */}

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

      {/* 
<header
  class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Welcome to my site!
  </div>
</header>
<div class="max-w-lg m-auto">
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
    laoreet sem, semper molestie libero.
  </p>
  <p class="mb-4">
    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
    ipsum, id consequat nulla nunc in ligula.
  </p>
  <p class="mb-12">
    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
    neque.
  </p>
</div>
<section
  class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Parralax inline
  </div>
</section>
<div class="max-w-lg m-auto">
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
    laoreet sem, semper molestie libero.
  </p>
  <p class="mb-4">
    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
    ipsum, id consequat nulla nunc in ligula.
  </p>
  <p class="mb-4">
    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
    neque.
  </p>
</div> */}



    </>
  );
}

export default App;
