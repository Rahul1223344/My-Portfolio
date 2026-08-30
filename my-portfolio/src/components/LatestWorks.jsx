import React from "react";
import harigurus from "../assets/images/harigurus.webp";
import eazygrad from "../assets/images/eazygrad.webp";

const projects = [
  {
    title: "Harigurus",
    subtitle: "Event Booking",
    description:
      "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
    tech: [
      "react.js",
      "express.js",
      "node.js",
      "swiper.js",
      "mongoDB",
      "mongoose",
      "css",
      "javascript",
      "figma",
    ],
    image: harigurus,
    color: "orange",
    reverse: false,
  },
  {
    title: "EazyGrad",
    subtitle: "EdTech Startup",
    description:
      "Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.",
    tech: [
      "node.js",
      "express.js",
      "mongoDB",
      "mongoDBAtlas",
      "ejs",
      "swiper.js",
      "html",
      "css",
      "javascript",
      "lighthouse",
      "figma",
    ],
    image: eazygrad,
    color: "purple",
    reverse: true,
  },
];

const LatestWorks = () => {
  return (
    <section
      id="latest-works"
      className="bg-[#f3f3f3] py-24 px-6 md:px-20 relative"
    >
      {/* Heading */}
      <div className="flex justify-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 border-2 border-cyan-500 px-8 py-2 rounded-lg">
          Latest Works
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-cyan-400 -translate-x-1/2"></div>

        {projects.map((p, i) => (
          <div
            key={i}
            className={`mb-24 flex flex-col md:flex-row items-center ${
              p.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <div className="w-full md:w-1/2 px-6">
              <h3
                className={`text-3xl font-bold ${
                  p.color === "orange"
                    ? "text-orange-500"
                    : "text-purple-600"
                }`}
              >
                {p.title}
              </h3>

              <p
                className={`mb-4 ${
                  p.color === "orange"
                    ? "text-orange-400"
                    : "text-purple-500"
                }`}
              >
                ({p.subtitle})
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed max-w-md">
                {p.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-600"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* CENTER DOT */}
            <div className="hidden md:flex w-[60px] justify-center relative">
              <div
                className={`w-5 h-5 rounded-full border-4 bg-white z-10 ${
                  p.color === "orange"
                    ? "border-orange-400"
                    : "border-purple-500"
                }`}
              ></div>

              {/* horizontal connector */}
              <div
                className={`absolute top-1/2 w-10 h-[2px] ${
                  p.color === "orange"
                    ? "bg-orange-400"
                    : "bg-purple-500"
                } ${
                  p.reverse ? "right-full" : "left-full"
                }`}
              ></div>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-1/2 px-6 mb-8 md:mb-0">
              <img
                src={p.image}
                alt={p.title}
                className="w-full max-w-[520px] mx-auto drop-shadow-xl"
              />

              {/* MOBILE BUTTON */}
              <div className="flex justify-center mt-6 md:hidden">
                <button
                  className={`px-6 py-2 rounded-md text-white shadow-md ${
                    p.color === "orange"
                      ? "bg-orange-400"
                      : "bg-purple-600"
                  }`}
                >
                  {p.title} ↗
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWorks;