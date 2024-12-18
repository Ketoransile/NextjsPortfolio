import React from "react";
import TestimonialsSection from "./TestimonialsSection";

const Testimonials = () => {
  return (
    <div className="flex flex-col pt-24 px-40">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-center text-primary font-bold">
          Testimonials
        </h1>
        <h1 className="text-2xl text-slate-300 text-center">
          Real experiences from those who have worked with me
        </h1>
      </div>
      <div className="">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Testimonials;
