import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yd5blzp', 'template_40o1bkl', form.current, 'hjD3KyMI67F7luEmp')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Clears the form fields after success
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl font-bold uppercase text-gradient mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[35px] h-[76px] text-gradient lg:text-[60px] leading-none mb-12">
                Let's Work <br />
                Together{" "}
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gradient focus:border-accent hover:border-accent transition-all"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gradient focus:border-accent hover:border-accent transition-all"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
            <textarea
              className="bg-transparent border-b py-10 outline-none w-full placeholder:text-gradient focus:border-accent hover:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
