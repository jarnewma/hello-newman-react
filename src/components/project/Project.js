import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";

export const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  });

  return (
      <main className="bg-gray-700 min-h-screen p-12">
          <section className="container mx-auto">
              <h1 className="text-5xl text-gray-200 flex justify-center cursive">My Projects</h1>
              <h2 className="text-lg text-gray-200 flex justify-center mb-12">Projects Page</h2>
              <section className="grid grid-cols-2 gap-8">
                  {projectData && projectData.map((project, index) => (
                  <article className="relative rounded-lg shadow-xl bg-gray-500 p-16">
                      <h3 className="text-gray-200 text-3xl font-bold mb-2 hover:text-purple-700">
                          <a
                          href={project.link}
                          alt={project.title}
                          target="_blank"
                          rel="nooperner noreferrer"
                          >
                              {project.title}
                          </a>
                      </h3>
                      <div className="text-gray-200 text-xs space-x-4">
                          <span>
                              <strong className="font-bold text-black">Finished on</strong>:{" "}
                              {new Date(project.date).toLocaleDateString()}
                          </span>
                          <span>
                              <strong className="font-bold text-black">Institution</strong>:{" "}
                              {project.place}
                          </span>
                          <span>
                              <strong className="font-bold text-black">Type</strong>:{" "}
                              {project.projectType}
                          </span>
                          <p className="my-6 text-lg text-gray-200 leading-relaxed">
                              {project.description}
                          </p>
                          <a 
                          href={project.link}
                          rel="noopener noreferrer"
                          target="_blank" 
                          className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                          >
                              View The Project{" "}
                          <span role="img" aria-label="right pointer">
                              👉
                              </span>
                          </a>
                      </div>
                  </article>
                  ))}
              </section>
          </section>
      </main>
  )
};
