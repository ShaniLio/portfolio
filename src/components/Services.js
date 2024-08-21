import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Development",
    description: " Skilled in building responsive, dynamic websites using HTML, CSS, JavaScript, and React. Focused on clean code and user-friendly designs",
    link: "Learn More",
  },
  {
    name: "Web Designer",
    description: " Experienced in creating clean, modern, and user-centered designs. Proficient in crafting responsive layouts and intuitive interfaces.",
    link: "Learn More",
  },
  {
    name: "React Developer",
    description: "Expert in building dynamic, scalable web applications using React. Adept at creating reusable components and managing state for seamless user experiences. ",
    link: "Learn More",
  },
];
const Services = () => {
  return (
   
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-gradient mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am Front-End Developer with over 3 Months of Internship
              experience
            </h3>
            <button className="btn btn-sm">See my Work</button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          // viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            <div>
              {services.map((service, index) => {
                // destructuring properties from service object
                const { name, description, link } = service;
                return <div
                className="border-b border-white/20 h-[220px] lg:h-[156px] mb-[38px] flex"
                key={index}>
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                    <p className="font-secondary  leading-tight">{description}</p>
                  </div>
                  
                  <div className="flex flex-col flex-1 items-end">
                    <a
                    className="btn w-9 h-9 mb-[43px] flex justify-center items-center"
                    href="/">
                    <BsArrowUpRight/>                    
                    </a>
                    <a className="text-gradient text-sm" href="/">{link}</a>
                  </div>
                </div>;
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
