import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for Summer 2025 opportunities. Connect with
          me on Linkedin or email me directly at jaden_chung@brown.edu!
          <br></br>
          <br></br>
          Feel free to check out my resume as well! 😙
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/JadenCCW/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://linkedin.com/in/jadenccw/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <iframe
          src="https://drive.google.com/file/d/1s3I8z9wkt8a8V7aEMQLQ7YsSEfQspbuJ/preview?usp=sharing"
          width="561px"
          height="726px"
        ></iframe>
      </div>
    </section>
  );
};

export default ResumeSection;
