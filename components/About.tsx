import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center px-40 pt-24 text-slate-300 ">
      <div className="">
        <Image src="/abdisa2.svg" alt="my-image" width={500} height={500} />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl text-primary font-bold">About Me</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In et
          temporibus placeat, vel, cumque perspiciatis repellat, quo sunt
          impedit harum laborum pariatur! Natus quibusdam delectus praesentium
          tenetur doloribus quae quasi!Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, illum ex deserunt consequatur
          vero odit atque vitae eius pariatur ut consequuntur earum quod
          similique ipsam aspernatur sequi ad voluptatem harum! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae doloremque
          asperiores nihil. Quaerat dicta iure est autem. Molestiae alias
          exercitationem eum, nam, quaerat deleniti amet labore delectus qui
          perspiciatis fugiat!
        </p>
      </div>
    </div>
  );
};

export default About;
