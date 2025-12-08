import React, { useState, useEffect } from 'react';
import { ArrowUpRight} from 'lucide-react';
import CustomPortfolio from "../../Images/CustomPortfolio.png"
import Vintage from "../../Images/Vintage.png"
import Frenly from "../../Images/Frenly.png"
import SpamImage from "../../Images/spam_image.webp"

const PortfolioHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Custom Portfolio Development",
      category: "Web Development",
      description: "A fully customized, modern portfolio website designed for showcasing professional skills, achievements, and projects. Built with a clean UI, smooth animations, and optimized performance to enhance personal branding.",
      color: "from-indigo-600 to-blue-600",
      image: CustomPortfolio,
      Url: "https://sahilportfolio605.netlify.app/"
    },
    {
      id: 2,
      title: "Vintage — Cinematic Scrolling Experience",
      category: "Creative Web Experience",
      description: "A cinematic, scroll-driven web experience built for showcasing smooth GSAP animations, interactive transitions, and motion-based storytelling. Designed to deliver dynamic camera movements, immersive sequences, and a seamless narrative flow.",
      color: "from-yellow-600 to-amber-600",
      image: Vintage,
      Url: "https://srvintage.netlify.app/"
    },
    {
      id: 3,
      title: "Frenly — Responsive Animated Web Experience",
      category: "Interactive Web Development",
      description: "A fully responsive and animation-rich web experience designed with React, Tailwind, and GSAP. Built to deliver smooth scroll-based interactions, consistent UI across devices, and modern motion-driven visual design inspired by Dribbble concepts.",
      color: "from-emerald-600 to-teal-600",
      image: Frenly,
      Url: "https://sahilrathore.github.io/frenly-website/"
    },
    {
      id: 4,
      title: "Spam Message Detection Web App",
      category: "Machine Learning",
      description: "A fully deployed NLP-based spam detection application built using Streamlit. Features a complete ML pipeline with TF-IDF text vectorization, class balancing via Random OverSampler, and a high-accuracy Multinomial Naïve Bayes model delivering 99% classification performance.",
      color: "from-purple-600 to-violet-600",
      image: SpamImage,
      Url: "https://github.com/SAHILRATHORE/Spam-Message-Detector.git"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 sm:py-16 lg:py-24">

        {/* Header Section */}
        <div
          className="mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
          }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Our Work
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-6 sm:mb-8">
            Real projects, real results.
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-4xl leading-relaxed">
            At Rethink, every project starts with a problem worth solving and ends with a fast, modern experience people actually enjoy using. From custom websites with smooth animations to full‑stack web apps and AI‑powered features, our work is built to look sharp, load quickly and deliver measurable outcomes for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${index * 100 + 200}ms`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <a href={project.Url}
                target='_blank'>
                <div className="hand group relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <button className='hand absolute top-[40%] left-[30%] px-5 py-3 border rounded-4xl text-3xl uppercase font-bold  hidden group-hover:block z-10 transition-all duration-500 cursor-pointer'>View project</button>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                    {project.category}
                  </div>
                </div>
              </a>
              {/* Project Content */}
              <div className="hand p-6 sm:p-8">
                <div className="hand flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className={`w-6 h-6 sm:w-7 sm:h-7 text-purple-400 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1 -translate-y-1' : ''
                      }`}
                  />
                </div >

                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover Overlay Effect */}
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
        <div
          className="mt-16 sm:mt-20 lg:mt-24 "
        >
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-black mb-4 sm:mb-6 leading-tight">
            From idea to launch
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-4xl leading-relaxed">
            Whether you’re at the sketch-on-paper stage or ready to rebuild something that already exists, we treat every project as a collaboration, not just a task list. You bring the vision; we bring design, code and AI to make it real.
          </p>
        </div>

      </div>
    </div>
  );
}
export default PortfolioHero