import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-20 md:py-28 px-5 md:px-10 lg:px-20"
    >
      {/* ================= HEADING ================= */}

      <div className="flex justify-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 border-2 border-cyan-500 px-8 py-2 rounded-lg">
          Contact
        </h2>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* ================= LEFT ================= */}

        <div>
          <p className="text-cyan-600 font-bold text-sm mb-3">
            LET'S CONNECT
          </p>

          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Have a project
            <br />
            in mind?
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            I'm always interested in working on new projects and
            opportunities. If you have an idea or project you'd like
            to discuss, feel free to get in touch.
          </p>

          {/* Contact Details */}

          <div className="space-y-6">

            {/* Email */}

            <a
              href="mailto:rahul7488071@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 text-xl">
                @
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="text-gray-900 font-medium group-hover:text-cyan-600 transition-colors">
                  rahul7488071@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}

            <a
              href="tel:+918468961606"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 text-xl">
                ☎
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="text-gray-900 font-medium group-hover:text-cyan-600 transition-colors">
                  +91 8468961606
                </p>
              </div>
            </a>

            {/* Location */}

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 text-xl">
                ●
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="text-gray-900 font-medium">
                  India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT - FORM ================= */}

        <div className="border border-gray-200 rounded-xl p-7 md:p-9 shadow-sm">

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">
            Send me a message
          </h3>

          <form className="space-y-5">

            {/* Name */}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Subject */}

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="What is this regarding?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Message */}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-[1.01] transition-all duration-200"
            >
              Send Message ↗
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;