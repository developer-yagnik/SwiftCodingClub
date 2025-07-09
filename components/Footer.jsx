// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer id="contact" className="mt-25 px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
      <motion.div
        className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div className="md:max-w-96" variants={fadeInUp}>
          <div className="flex gap-2 items-center ">
            <img
              src="/swift.svg"
              alt="logo"
              className="h-auto w-10"
            />
            <p >Swift Coding Club</p>
          </div>


          <p className="mt-6 text-sm">
            Swift Coding Club is a newly launched community for students at parul univeristy. Our mission is to explore Swift, build innovative apps, and grow together through workshops, projects, and collaboration.
          </p>

        </motion.div>

        <motion.div
          className="flex-1 flex items-start md:justify-end gap-20 md:gap-40"
          variants={fadeInUp}
        >
          <div>
            <h2 className="font-semibold mb-5">Resources Link</h2>
            <ul className="text-sm space-y-2 ">
             <li className="transition-all duration-500 hover:underline underline-offset-4"><a href="#">Home</a></li>
              <Link  className="transition-all duration-500 hover:underline underline-offset-4" href="./resources">
                 <li>Resources</li>
              </Link>
           
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="pt-4 text-center text-sm pb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Copyright {new Date().getFullYear()} © Swift Coding Club - Parul Univeristy. All Right Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
