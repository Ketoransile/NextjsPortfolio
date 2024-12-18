import React from "react";
import { ProjectCard } from "./ProjectCard";
const projects = [
  {
    title: "Bet Real Estate",
    description:
      "A responsive app for property listings, bookings, and easy scheduling of visits.",
    image: "/techs/pr2.png",
    projectLink: "https://bet-real-estate.vercel.app/",
    githubLink: "https://github.com/Ketoransile/Bet-Real-EstateProject",
  },
  {
    title: "Your Notes",
    description:
      "Your personal space to organize, capture, and manage ideas effortlessly.",
    image: "/techs/pr3.png",
    projectLink: "https://yournote-3pnr.onrender.com/",
    githubLink: "https://github.com/Ketoransile/Mern-Todo-App",
  },
  {
    title: "Jobify",
    description:
      "Track your job applications, manage opportunities, and stay organized with ease.",
    image: "/techs/pr4.png",
    projectLink: "https://jobify-cpey.onrender.com",
    githubLink: "https://github.com/Ketoransile/Jobify-",
  },
];
const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <h1 className="text-primary text-center text-3xl">Projects</h1>
        <h2 className="text-slate-400 text-center text-xl pt-4">
          Showcasing My Work and Creations
        </h2>
      </div>
      <div className="flex justify-between px-40">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
