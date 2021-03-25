import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import bgImage from "../../assets/silver-background.jpeg";
import argoCone from "../../assets/argo-cone.jpg";
import rafting from "../../assets/ww-rafting.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative bg-gray-700">
      {/* <img src={bgImage} alt="Silver" className="absolute w-full h-full" /> */}
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gray-500 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded flex w-32 h-32 lg:w-96 lg:h-80 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6l text-blue-400 mb-4 text-4xl">
              Hey there. I'm{" "}
              <span className="text-blue-200">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="y0s1982p"
                dataset="production"
              />
            </div>
          </div>
        </section>
        <br></br>
        <section className="bg-gray-500 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={argoCone}
            className="rounded flex w-32 h-32 lg:w-96 lg:h-80 mr-8"
            alt="Argo"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6l text-blue-400 mb-4 text-4xl">
              This is <span className="text-blue-200">Argo</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              Argo is a blue heeler/shithead mix. Contrary to popular belief, he
              was not named after the Ben Affleck movie or the corn starch, but
              as an homage to Jason and the Argonauts of Greek Mythology. We
              like to work on agility training, and are in the early stages of
              learning{" "}
              <a href="https://www.youtube.com/watch?v=2t8Vei03S5Q">
                treibball
              </a>
              . If you are a squirrel, kindly leave this page and please refrain
              from any further taunting in the future. We are not amused.
            </div>
          </div>
        </section>
        <br></br>
        <section className="bg-gray-500 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={rafting}
            className="rounded flex w-32 h-32 lg:w-96 lg:h-80 mr-8"
            alt="Rafting"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6l text-blue-400 mb-4 text-4xl">
              Fun Stuff
            </h1>
            <div className="prose lg:prose-xl text-white">
              I try to stay active as much as possible. I run mini-marathons,
              hike as much as possible, travel as much as possible, and enjoy
              doing weird stuff like{" "}
              <a href="https://www.youtube.com/watch?v=2t8Vei03S5Q">
                extreme ironing
              </a>
              . I've lived on three continents and visited four, with the main
              highlight of my travels thus far being a night dive in the Great
              Barrier Reef during its once a year coral spawning event. I may also
              have a problem with googly eyes, as I have been known to put them
              on anything that seems like a good target. 👀
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
