import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* text */}
          <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-6 mb-5 lg:mb-0 items-start">
            <h2 className="h2 leading-tight text-gradient">
              My latest <br />
              Work.
            </h2>
            <p className="max-w-sm mb-6">
            Experienced in creating responsive, user-focused web applications and designs. Proficient in React for dynamic interfaces, and skilled in HTML, CSS, and JavaScript for full-stack web development. Passionate about delivering clean code, intuitive user experiences, and modern design solutions.
            </p>
            <button className="btn btn-sm mb-10 ">View All Project</button>
          </motion.div>

          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-6">
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt="Portfolio project"
              />
              {/* role */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Web Designer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-accent font-bold text-3xl">Project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt="Portfolio project"
              />
              {/* role */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">BootStrap Developer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-accent font-bold text-3xl">Project Title</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-6 mt-7 lg:mt-0">
          <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt="Portfolio project"
              />
              {/* role */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Developer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-accent font-bold text-3xl">Project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt="Portfolio project"
              />
              {/* role */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Web Developer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-[4rem] group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-accent font-bold text-3xl">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
