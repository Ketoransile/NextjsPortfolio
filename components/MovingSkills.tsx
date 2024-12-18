"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";

export function MovingSkills() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: (
      <Image src="/techs/cpp.svg" alt="cplusplusimage" width={50} height={50} />
    ),
    name: "C++",
    title: "",
  },
  {
    quote: (
      <Image src="/techs/Express.svg" alt="Express.js" width={50} height={50} />
    ),
    name: "Express.js",
    title: "",
  },
  {
    quote: (
      <Image
        src="/techs/JavaScript.svg"
        alt="JavaScript"
        width={50}
        height={50}
      />
    ),
    name: "JavaScript",
    title: "",
  },
  {
    quote: (
      <Image
        src="/techs/Material.svg"
        alt="Material Ui"
        width={50}
        height={50}
      />
    ),
    name: "Material Ui",
    title: "",
  },
  {
    quote: (
      <Image src="/techs/MongoDB.svg" alt="MongoDb" width={50} height={50} />
    ),
    name: "MongoDb",
    title: "",
  },
  {
    quote: (
      <Image src="/techs/Nextjs.svg" alt="NextJs" width={50} height={50} />
    ),
    name: "NextJs",
    title: "",
  },
  {
    quote: (
      <Image src="/techs/Nodejs.svg" alt="Nodejs" width={50} height={50} />
    ),
    name: "Nodejs",
    title: "",
  },
  {
    quote: (
      <Image src="/techs/Python.svg" alt="Python" width={50} height={50} />
    ),
    name: "Python",
    title: "",
  },
  {
    quote: (
      <Image
        src="/techs/Tailwind.svg"
        alt="Tailwind css"
        width={50}
        height={50}
      />
    ),
    name: "Tailwind css",
    title: "",
  },
  {
    quote: (
      <Image
        src="/techs/TypeScript.svg"
        alt="TypeScript"
        width={50}
        height={50}
      />
    ),
    name: "TypeScript",
    title: "",
  },
];
