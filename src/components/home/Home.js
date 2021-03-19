import React from "react";
import image from "../../assets/nebula-background.jpeg"


export const Home = () => {
    return (
        <main>
            <img src={image} alt="Nebula" className="absolute" w-full h-full />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" >
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name"> Hello, Newman </h1>
            </section>
        </main>
    )
}