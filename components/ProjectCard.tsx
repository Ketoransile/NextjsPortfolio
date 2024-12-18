"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export function ProjectCard({
  title,
  description,
  image,
  projectLink,
  githubLink,
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-navbar  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className=" text-lg  text-slate-300 font-bold  dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-slate-400 text-sm max-w-xs mt-2 dark:text-neutral-200"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-3"
        >
          <Image
            src={image}
            height="800"
            width="800"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            translateX={-20}
            as="button"
            className="flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-normal dark:text-white text-slate-400 font-bold"
          >
            <FaLink />
            <Link href={projectLink}>Live Link</Link>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={20}
            as="button"
            className="flex items-center gap-2  px-3 py-1 rounded-lg  dark:bg-white dark:text-black text-slate-400 text-xs font-bold"
          >
            <FaGithub />
            <Link href={githubLink}>Github Link</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
