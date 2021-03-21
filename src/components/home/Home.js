import React from "react";
import image from "../../assets/nebula-background.jpeg";

export const Home = () => {
  return (
    <main>
      <img src={image} alt="Nebula" className="absolute w-full h-full" />
      <article className="container shadow-lg mx-auto">
        <header className="relative">
          <div className="relative h-full w-full flex items-center justify-center p-8">
            <div className="relative items-center justify-center bg-opacity-75 rounded p-12">
              <h1 className="text-center text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
                {" "}
                Hello, Newman{" "}
              </h1>
              <div className="flex justify-center text-2xl text-blue-100">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
        </header>
      </article>
    </main>
  );
};
