import React from "react";

import consultantApp from "../assets/images/consultant-app.png";
import shoesWatchApp from "../assets/images/shoes-watch-app.png";
import streamAi from "../assets/images/stream-ai.png";

const projects = [
  {
    number: "01",
    title: "Consultant App",
    subtitle: "Online Consultation Platform",
    description:
      "A consultation platform that allows users to view consultation details and choose an available date and time slot for an online consultation.",
    tech: [
      "react.js",
      "javascript",
      "responsive design",
      "api integration",
    ],
    image: consultantApp,
    color: "purple",
    link: "https://consultant-frontend-6m91.vercel.app/",
  },

  {
    number: "02",
    title: "Shoes-Watch App",
    subtitle: "E-Commerce Website",
    description:
      "A modern e-commerce website for browsing and purchasing shoes and watches, with a clean product-focused interface and responsive shopping experience.",
    tech: [
      "react.js",
      "javascript",
      "tailwind css",
      "e-commerce",
    ],
    image: shoesWatchApp,
    color: "blue",
    link: "https://www.lakshayfashioncollection.com/",
  },

  {
    number: "03",
    title: "Stream AI",
    subtitle: "Movie Discovery & Streaming App",
    description:
      "A movie discovery and streaming-style web application featuring movie search, featured content, and a modern dark interface.",
    tech: [
      "react.js",
      "javascript",
      "api integration",
      "responsive design",
    ],
    image: streamAi,
    color: "red",
    link: "https://stream-ai-eosin.vercel.app/",
  },
];

const colorStyles = {
  purple: {
    title: "text-purple-600",
    subtitle: "text-purple-500",
    border: "border-purple-500",
    bg: "bg-purple-600",
    hover: "hover:bg-purple-700",
  },

  blue: {
    title: "text-blue-600",
    subtitle: "text-blue-500",
    border: "border-blue-500",
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
  },

  red: {
    title: "text-red-600",
    subtitle: "text-red-500",
    border: "border-red-500",
    bg: "bg-red-600",
    hover: "hover:bg-red-700",
  },
};

const LatestWorks = () => {
  return (
    <section
      id="latest-works"
      className="bg-white pt-24 pb-8 px-5 md:px-10 lg:px-20"
    >
      {/* ================= HEADING ================= */}

      <div className="flex justify-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 border-2 border-cyan-500 px-8 py-2 rounded-lg">
          Latest Works
        </h2>
      </div>

      {/* ================= PROJECT TIMELINE ================= */}

      <div className="relative max-w-7xl mx-auto">

        {/* CENTER LINE - DESKTOP ONLY */}

        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-cyan-300 -translate-x-1/2" />

        {projects.map((project, index) => {
          const styles = colorStyles[project.color];
          const imageLeft = index % 2 === 0;
          const isLastProject = index === projects.length - 1;

          return (
            <div
              key={project.title}
              className={`relative ${
                isLastProject
                  ? "mb-0"
                  : "mb-32 md:mb-40"
              }`}
            >

              {/* ================= DESKTOP ================= */}

              <div className="hidden md:grid grid-cols-2 gap-20 items-center">

                {/* IMAGE LEFT */}

                {imageLeft && (
                  <div className="flex justify-end pr-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full max-w-[600px]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full rounded-lg shadow-xl object-contain transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </a>
                  </div>
                )}

                {/* TEXT LEFT */}

                {!imageLeft && (
                  <div className="flex justify-end pr-10">
                    <div className="max-w-[600px]">
                      <ProjectContent
                        project={project}
                        styles={styles}
                      />
                    </div>
                  </div>
                )}

                {/* TEXT RIGHT */}

                {imageLeft && (
                  <div className="flex justify-start pl-10">
                    <div className="max-w-[600px]">
                      <ProjectContent
                        project={project}
                        styles={styles}
                      />
                    </div>
                  </div>
                )}

                {/* IMAGE RIGHT */}

                {!imageLeft && (
                  <div className="flex justify-start pl-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full max-w-[600px]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full rounded-lg shadow-xl object-contain transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </a>
                  </div>
                )}
              </div>

              {/* ================= CENTER DOT ================= */}

              <div
                className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 z-20 ${styles.border}`}
              />

              {/* ================= CONNECTOR ================= */}

              <div
                className={`hidden md:block absolute top-1/2 h-[2px] w-20 ${
                  styles.bg
                } ${
                  imageLeft
                    ? "left-1/2"
                    : "right-1/2"
                }`}
              />

              {/* ================= MOBILE ================= */}

              <div className="md:hidden">

                {/* Project number + line */}

                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`font-bold text-sm ${styles.title}`}
                  >
                    {project.number}
                  </span>

                  <div
                    className={`flex-1 h-[2px] ${styles.bg}`}
                  />
                </div>

                {/* Image */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-8"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full rounded-lg shadow-xl"
                  />
                </a>

                {/* Content */}

                <ProjectContent
                  project={project}
                  styles={styles}
                />

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CONTENT
========================================================= */

const ProjectContent = ({ project, styles }) => {
  return (
    <div>

      {/* PROJECT NUMBER */}

      <p
        className={`hidden md:block font-bold text-sm mb-2 ${styles.title}`}
      >
        {project.number}
      </p>

      {/* TITLE */}

      <h3
        className={`text-3xl md:text-4xl font-bold mb-2 ${styles.title}`}
      >
        {project.title}
      </h3>

      {/* SUBTITLE */}

      <p
        className={`text-lg md:text-xl mb-5 ${styles.subtitle}`}
      >
        ({project.subtitle})
      </p>

      {/* DESCRIPTION */}

      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
        {project.description}
      </p>

      {/* TECHNOLOGY TAGS */}

      <div className="flex flex-wrap gap-3 mb-7">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 bg-white"
          >
            #{tech}
          </span>
        ))}
      </div>

      {/* VIEW PROJECT */}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold shadow-md transition-all duration-200 hover:scale-105 ${styles.bg} ${styles.hover}`}
      >
        View Project
        <span>↗</span>
      </a>

    </div>
  );
};

export default LatestWorks;