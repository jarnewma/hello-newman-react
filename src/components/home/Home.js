import React from "react";
import image from "../../assets/hello-newman3.webp";

export const Home = () => {
  return (
    <main>
      <img src={image} alt="Seinfeld" className="absolute w-full h-full" />
      <article className="container shadow-lg mx-auto">
        <header className="relative">
          <div className="absolute inset-y-40 left-0 bg-opacity-75 rounded p-12">
            <h1 className="text-center text-4xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
              {" "}
              Hi, I'm Jason{" "}
            </h1>
            <div className="relative items-center text-2xl text-blue-100">
              I'm an entrepreneur/software engineer based in Indianapolis. I
              consider myself a generalist with the ability to shift focus
              towards whatever the business' needs may be, but I'm most
              passionate about developing creative solutions to the problems
              that need solving. And yes, my last name is actually Newman. Thanks for stopping by! 
            </div>
          </div>
        </header>
      </article>
    </main>
  );
};
