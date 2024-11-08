import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/times.jpg"
          width={500}
          height={500}
          style={{ borderRadius: "20px" }}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg  ">
            My name is Jaden Chung (정운서) and I&apos;m a student at Brown
            University pursuing a Sc.B in Applied Mathematics and Computer
            Science! <br></br>
            <br></br>
            In the past, I&apos;ve worked with Java, Python, JavaScript/Node.js,
            OCaml, C, AWS, and some other useful developer tools. I&apos;ve been
            able to apply these skills during my internships at Amazon Web
            Services and Microsoft, and I am excited to bring my skillset to
            Stripe for the Summer of 2025.
            <br></br>
            <br></br>
            In my free time, I enjoy cooking, travelling, brewing coffee
            (perfecting my latte art), buying clothes, and spending time with
            friends/family.
            <br></br>
            <br></br>
            Thanks for checking me out! ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
