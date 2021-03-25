import React from "react";
import image from "../../assets/solid-silver.png";

export const Home = () => {
  return (
    <main>
      <img src={image} alt="Nebula" className="absolute w-full h-full" />
      <article className="container shadow-lg mx-auto">
        <header className="relative">
          <div className="relative h-full w-full flex items-center justify-center p-8">
            <div className="relative items-center justify-center bg-opacity-75 rounded p-12">
              <h1 className="text-center text-4xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
                {" "}
                Hi, I'm Jason{" "}
              </h1>
              <div className="flex justify-center text-2xl text-blue-100">
                I'm an entrepreneur/software engineer based in Indianapolis. I
                consider myself a generalist with the ability to shift focus
                towards whatever the business' needs may be, but I'm most
                passionate about developing creative solutions to the problems
                that need solving. Thanks for stopping by!
              </div>
            </div>
          </div>
        </header>
      </article>
    </main>
  );
};
