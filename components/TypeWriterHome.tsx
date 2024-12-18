"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypeWriterHome() {
  const words = [
    {
      text: "A",
      className: "text-slate-300",
    },
    {
      text: "FullStack ",
      className: "text-blue-500 dark:text-blue-500",
    },

    {
      text: "Developer",
      className: "text-slate-300",
    },
  ];
  return (
    <div className="  ">
      <h1 className="text-3xl text-slate-300 ">
        I&apos;m <span className="font-bold text-white">Abdi Sileshi</span>
      </h1>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
