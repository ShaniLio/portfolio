import React from "react";
//counterIncrement:
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-[130vh]">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ once: false, amount: 0.6 }}
            className="flex-1"
          >
            <h2 className="h2 text-gradient">About Me</h2>
            <h3 className="h3 mb-4">
              I am Front-End Developer with over 3 Months of Internship
              experience
            </h3>
            <p className="mb-6">
              As a React Developer, I build dynamic, responsive, and
              user-friendly web applications. With a strong foundation in
              JavaScript, HTML, and CSS, I use React to create modular, scalable
              components and integrate third-party APIs for seamless user
              experiences
            </p>
            <div className="flex gap-x-14 lg:gap-x-14 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp duration={5} start={0} end={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp duration={5} start={0} end={8} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a className="text-gradient btn-link" href="/">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
