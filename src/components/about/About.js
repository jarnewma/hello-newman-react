import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import bgImage from "../../assets/starfish-beachy.jpeg";
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
    <main className="relative">
      <img src={bgImage} alt="Beachy" className="absolute w-full h-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-600 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded flex w-32 h-32 lg:w-96 lg:h-80 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6l text-blue-300 mb-4 text-2xl">
              Hey there. I'm{" "}
              <span className="text-blue-100">{author.name}</span>
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
        <section className="bg-yellow-600 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={argoCone}
            className="rounded flex w-32 h-32 lg:w-96 lg:h-96 mr-8"
            alt="Argo"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6l text-blue-300 mb-4 text-2xl">
              This is{" "}
              <span className="text-blue-100">Argo</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
