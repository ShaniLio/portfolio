import React from "react";
//image
import image from "../assets/lio2.png";
//icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//Type Animation
import { TypeAnimation } from "react-type-animation";
// Motion Animation
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[75vh] lg:min-h-[75vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-[35px] lg:text-[55px] font-bold leading-[0.8] mb-2"
            >
              Muhammad <span className="text-gradient">Faizan</span>
            </motion.h1>

            <motion.div className="mb-6  text-[23px] lg:text-[34px] font-secondary font-semibold uppercase leading-[1]"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}>
              <span className="">
                I am a{" "}
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Designer",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                  speed={50}
                  className="text-gradient"
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            <motion.p className="mb-6  max-w-lg mx-auto lg:mx-0 "
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}>
              As a React Developer, I build dynamic, responsive, and
              user-friendly web applications. With a strong foundation in
              JavaScript, HTML, and CSS, I use React to create modular, scalable
              components and integrate third-party APIs for seamless user
              experiences
            </motion.p>
            <motion.div className="flex mt-2 max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}>
              <button className="btn btn-lg">Contact Me</button>
              <a className="text-gradient btn-link" href="/">
                My Portfolio
              </a>
            </motion.div>
            <motion.div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}>
              <a href="/">
                <FaGithub />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
              <a href="/">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[582px] mx-auto"
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          >
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
