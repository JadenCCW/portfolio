"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>hi, i&apos;m jaden</span>
            <br></br>
            <span>
              <TypeAnimation
                sequence={[
                  "i code",
                  1500,
                  "i solve problems",
                  1500,
                  "i design systems",
                  1500,
                  "i love taco bell",
                  1500,
                  "hmu if u fw me 🖤",
                  2000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </span>
          </h1>
          <div></div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/jaden.jpg"
              alt="jaden image"
              className="absolute transform rounded-full aspect-square object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
