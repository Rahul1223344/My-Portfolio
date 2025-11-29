import AboutMeCoverPic from ".././assets/images/AboutMeCoverPic.png";
import ReactIcon from ".././assets/icons/react_svg.svg?react"
import CssIcon from ".././assets/icons/CssIcon.svg?react"
import HtmlIcon from '.././assets/icons/HtmlIcon.svg?react'
import JsIcon from ".././assets/icons/JavaScript.svg?react"

const About = () => {
const skills = [
"#javascript", "#react.js", "#redux",  "#express.js", "#html", "#css", "#sass", "#bootstrap", "#tailwind", "#git", "#github", "#terminal", "#figma"
];


return (
<div className="bg-black min-h-screen text-white flex flex-col items-center px-6 py-12 md:px-20">
{/* About Me Section */}
<div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
{/* Text Section */}
<div className="md:w-1/2">
<h2 className="text-3xl md:text-2xl font-bold text-cyan-400 mb-6">ABOUT ME</h2>
<p className="text-lg leading-relaxed mb-6">
I help business owners and busy web developers to design & develop creative websites
that fits their vision and attracts the visitors to stay for ever. Technologies and
tools that I use to create such awesome websites.
</p>
<div className="flex flex-wrap gap-3">
{skills.map((skill, index) => (
<span
key={index}
className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-cyan-600 transition"
>
{skill}
</span>
))}
</div>
</div>


{/* Image Section - hidden on mobile */}
<div className="hidden md:flex md:w-1/2 justify-center">
<img
src={AboutMeCoverPic}
alt="Developer Illustration"
className="w-80 md:w-[400px]"
/>
</div>
</div>


{/* MERN Stack Section */}
<div className="w-full max-w-6xl mt-16">
<h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8">React Developer</h2>
<div className="flex flex-wrap justify-center items-center gap-12">
{/* React Icon */}
<div className="flex flex-col items-center">
<ReactIcon />
<span className="mt-2 font-semibold">React</span>
</div>


{/* JavaScript Icon */}
 <div className="flex flex-col items-center">
  <JsIcon />
    <span className="mt-2 font-semibold">JavaScript</span>
 </div>


{/* HTML Icon */}
<div className="flex flex-col items-center">
           <HtmlIcon />
            <span className="mt-2 font-semibold">HTML</span>
          </div>

{/* CSS Icon */}
 <div className="flex flex-col items-center">
            <CssIcon />
            <span className="mt-2 font-semibold">CSS</span>
          </div>
</div>
</div>
</div>
);
};


export default About;