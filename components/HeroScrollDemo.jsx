"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div id="hero-scroll" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Become iOS Developer <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Swift & SwifUI
              </span>
            </h1>
          </>
        }>
        <Image
          src="./club.svg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}
