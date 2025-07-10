"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "motion/react";
import Link from "next/link";


export function BackgroundLinesDemo() {
  return (
    <BackgroundLines id="home" className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="md:mt-0 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Swift Coding Club, <br /> Parul University
      </h2>

      <p
        className="pt-3 max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best guidance from our Swift experts, including iOS developers, app designers, SwiftUI enthusiasts, and WWDC winners completely free.
      </p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
         <a
          href="#hero-scroll"
          className="w-36 md:w-60 transform rounded-lg bg-black px-4 md:px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center"
        >
          Explore Now
        </a>
        <Link href="/resources">
          <button
            className="w-36 md:w-60 transform rounded-lg border border-gray-300 bg-white px-3 md:px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
           Resources
          </button>
        </Link>
      </motion.div>
    </BackgroundLines>

  );
}
