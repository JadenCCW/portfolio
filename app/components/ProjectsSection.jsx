import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 96,
    title: "AnonCheckout",
    description:
      "Google Chrome extension written in Javascript to assume IP from list of proxies, generate unique cookies, spoof HWID and other browser fingerprints, and autofill checkout info. Used Javascript. Developed to efficiently checkout hundreds of limited vinyls and sports cards from Urban Outfitters and Walmart. Generated $80k in profit over 6 months.",
    image: "/images/projects/96.png",
  },
  {
    id: 97,
    title: "Client-side Metric Visualization Framework",
    description:
      "Framework to collect and view client-side data about website performance in near real time. Data includes user behavior and client-side errors. Utilized React, TypeScript, Express, AWS SDK/CDK, API Gateway, Lambda, Opensearch Serverless, IAM/Cognito, and Kibana. Developed for internal-use within AWS.",
    image: "/images/projects/97.png",
  },
  {
    id: 98,
    title: "Meowrf Bot",
    description:
      "Multi-purpose Discord bot that runs on multiple servers and has been referenced in over 50,000 commands. Uses Python, AWS, and Docker. I originally developed it because of constant outages with other popular Discord music bots, but added social features throughout it's development.",
    image: "/images/projects/98.png",
  },
  {
    id: 99,
    title: "Voice of Books",
    description:
      "E-Book platform to be used by multiple primary schools in Tanzania, Africa. Used React/Node.js, MariaDB, AWS, and Python. Production version is functional and deployed locally. Public version was deprecated (non-functional) in 2022 and is available at voiceofbooks.co.",
    image: "/images/projects/99.png",
  },
  {
    id: 100,
    title: "jadenchung.dev",
    description:
      "The website you are looking at right now! Used Next.js (TypeScript), Tailwind, and Vercel. Fun Fact: You can also access this site from meowrf.com!",
    image: "/images/projects/100.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
