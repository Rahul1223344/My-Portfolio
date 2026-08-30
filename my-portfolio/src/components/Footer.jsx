import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* ================= ABOUT ================= */}

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Rahul Raj<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Frontend developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>

            <p className="text-gray-500 mt-5 text-sm">
              Turning ideas into interactive digital experiences.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="/#home"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Home
              </a>

              <Link
                to="/about"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                About
              </Link>

              <a
                href="/#skills"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>

              <a
                href="/#latest-works"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Latest Works
              </a>

              <a
                href="/#contact"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>

            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              Have a project or opportunity in mind?
              Let's build something great together.
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:scale-105"
            >
              Get In Touch
              <span>↗</span>
            </a>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Rahul Raj. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Built with{" "}
              <span className="text-cyan-400">React</span> & ❤️
            </p>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;