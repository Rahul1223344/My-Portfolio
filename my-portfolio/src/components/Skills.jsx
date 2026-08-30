import React from "react";

const skillGroups = [
  {
    title: "Frontend Development",
    number: "01",
    color: "blue",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "React Hooks",
      "API Integration",
    ],
  },

  {
    title: "Backend Development",
    number: "02",
    color: "purple",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "CRUD Operations",
      "Server-side Development",
    ],
  },

  {
    title: "Database",
    number: "03",
    color: "green",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "Supabase",
      "Database Design",
    ],
  },

  {
    title: "Tools & Technologies",
    number: "04",
    color: "red",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Figma",
      "Chrome DevTools",
    ],
  },
];

const colorStyles = {
  blue: {
    title: "text-blue-600",
    border: "border-blue-500",
    bg: "bg-blue-600",
    light: "bg-blue-50",
  },

  purple: {
    title: "text-purple-600",
    border: "border-purple-500",
    bg: "bg-purple-600",
    light: "bg-purple-50",
  },

  green: {
    title: "text-green-600",
    border: "border-green-500",
    bg: "bg-green-600",
    light: "bg-green-50",
  },

  red: {
    title: "text-red-600",
    border: "border-red-500",
    bg: "bg-red-600",
    light: "bg-red-50",
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white py-20 md:py-28 px-5 md:px-10 lg:px-20"
    >
      {/* ================= HEADING ================= */}

      <div className="flex justify-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 border-2 border-cyan-500 px-8 py-2 rounded-lg">
          Skills
        </h2>
      </div>

      {/* ================= INTRO ================= */}

      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          I build modern, responsive and user-friendly web applications using
          modern frontend and backend technologies.
        </p>
      </div>

      {/* ================= SKILLS GRID ================= */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group) => {
          const styles = colorStyles[group.color];

          return (
            <div
              key={group.title}
              className={`relative border ${styles.border} rounded-xl p-7 md:p-8 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Number */}

              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`font-bold text-sm ${styles.title}`}
                >
                  {group.number}
                </span>

                <div
                  className={`h-[2px] flex-1 ${styles.bg}`}
                />
              </div>

              {/* Title */}

              <h3
                className={`text-2xl md:text-3xl font-bold mb-6 ${styles.title}`}
              >
                {group.title}
              </h3>

              {/* Skills */}

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm md:text-base text-gray-700 border border-gray-200 ${styles.light} transition-transform duration-200 hover:-translate-y-1`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;