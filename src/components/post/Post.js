import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import image from '../../assets/silver-words.jpeg'

export const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-600 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-gray-200 flex justify-center cursive">
          Blog Posts
        </h1>
        <h2 className="text-lg text-gray-100 flex justify-center mb-12">
          Tech & Philosophy
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postData && postData.map((post, index) => (
          <article>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <span
                className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-400"
                key={index}
              >
                <img 
                src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"
                />
                <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                  <h3 className="text-lg font-blog px-3 py-4 bg-gray-700 text-gray-100 bg-opacity-75 rounded"> {post.title} </h3>
                </span>
              </span>
            </Link>
          </article>
))}
        </div>
      </section>
    </main>
  );
};
