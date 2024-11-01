import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="bg-slate-800 text-white py-10">
      <div className="min-h-screen container flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-full md:w-2/4 space-y-6">
          <h3
            data-aos="fade-up"
            className="text-xl font-bold text-orange-500 uppercase tracking-[4px]"
          >
            About FlexForce
          </h3>
          <h1 data-aos="fade-up" className="text-5xl font-bold">
            Welcome to Us
          </h1>
          <p data-aos="fade-up" className="text-orange-400 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            vel.
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, molestiae?
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            vitae eum facilis, earum enim nesciunt.
          </p>
          <span data-aos="fade-up" className="text-orange-400 font-bold">
            Read More..
          </span>
        </div>

        <div data-aos="fade-up">
          <div>
            <Image src="/about.jpg" alt="img" width={455} height={455} />
          </div>
        </div>
      </div>
    </div>
  );
}
