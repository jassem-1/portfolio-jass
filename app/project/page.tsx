"use client";;
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    slug: "app",
    name: "App",
  },
  {
    slug: "design",
    name: "Design",
  },
];

const projectTypes = [
  {
    slug: "case-study",
    name: "Case Study",
  },
  {
    slug: "real-project",
    name: "Real Project",
  },
];

const initialProjects = [
  {
    slug: "Reward Factory",
    title: "Reward Factory",
    image: "/assets/images/home/myLatestProject/projects/rewardFactory.png",
    repositoryUrl: "https://github.com/jassem-Souey/portfolio",
    demoUrl: "https://rewardfactory.io/",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
  {
    slug: "Landing Page",
    title: "Landing Page",
    image: "/assets/images/home/myLatestProject/projects/landing.png",
    repositoryUrl: "https://github.com/jassem-Souey/portfolio",
    demoUrl: "https://drive.google.com/file/d/1ixxR1rh_p8C3VlfhGBSCWXoNi533ZZW7/view?usp=sharing",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
  {
    slug: "Swap Widget",
    title: "Swap Widget",
    image: "/assets/images/home/myLatestProject/projects/swap.png",
    repositoryUrl: "https://github.com/jassem-Souey/portfolio",
    demoUrl: "https://drive.google.com/file/d/1-_6SghMgv-pzY4xxSdgAtF4N77s44r9W/view?usp=drive_link",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
  {
    slug: "Data Fetching Interface ",
    title: "Data Fetching Interface",
    image: "/assets/images/home/myLatestProject/projects/datafetching.png",
    repositoryUrl: "https://github.com/jassem-Souey/portfolio",
    demoUrl: "https://drive.google.com/file/d/18GFu0plZ79paKMUqWIMLnpdyx1rr9Z2M/view?usp=sharing",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
  {
    slug: "Some Block Explorer interfaces ",
    title: "Some Block Explorer interfaces",
    image: "/assets/images/home/myLatestProject/projects/block.png",
    demoUrl: "https://drive.google.com/file/d/1mJ_0m3haexTE0Y88iUgzVBHEnZywBBuk/view?usp=sharing",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
   {
    slug: "Ongoing Mern Ecommerce website",
    title: "Ongoing Mern Ecommerce website",
    image: "/assets/images/home/myLatestProject/projects/ecomm.png",
    demoUrl: "https://drive.google.com/file/d/1o63mVRR_JzPIu8IOhA6W-d81A3HeReQu/view?usp=sharing",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
  {
    slug: "FullStack Team management app ",
    title: "FullStack Team management app ",
    image: "/assets/images/home/myLatestProject/projects/esprit.png",
    demoUrl: "https://drive.google.com/file/d/1uXBSKRnyt7-vJbZWZJ6oCt3Xb7qCa8cH/view?usp=drive_link",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
  {
    slug: "Static Crypto-Related Interface",
    title: "Static Crypto-Related Interface",
    image: "/assets/images/home/myLatestProject/projects/static.png",
    repositoryUrl: "https://github.com/jassem-Souey/portfolio",
    demoUrl: "https://belguith-dashboard.vercel.app/",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStacks: [
      {
        name: "Next JS",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[0],
  },
];

export default function Project() {
  const [projects, setProjects] = useState(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]"
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2 }}
          className="mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text"
        >
          Explore jassem&apos;s Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="font-medium text-xl lg:text-2xl text-accent max-w-[730px] mx-auto"
        >
          Take a look at something I&apos;ve worked on
        </motion.p>
      </div>
      <div className="my-[50px] h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="col-span-4 shadow-md hover:shadow-2xl hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out"
            >
              
                <div className="relative overflow-hidden max-h-48 rounded-tl-2xl rounded-tr-2xl">
                  <div className="relative">
                    <Image
                      className="object-cover"
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      width={700}
                      height={700}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 px-6 py-3">
                    <div className="flex flex-row flex-wrap gap-x-4">
                      {project.techStacks.map((techStack, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="p-1 bg-white border-[0.5px] border-gray/70 rounded-full hover:cursor-help"
                        >
                          <Image
                            src={techStack.imageUrl}
                            alt={`${techStack.name} icon`}
                            loader={({ src }) => src}
                            width={36}
                            height={36}
                            title={techStack.name}
                            unoptimized
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 py-4">
                  <h5 className="mb-2 text-base font-bold line-clamp-1">
                    {project.title}
                  </h5>
               
                  <div className="grid grid-flow-col gap-4 mt-4">
                    {project.demoUrl && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          // Check if the demoUrl is a Google Drive link
                          if (project.demoUrl.includes("drive.google.com")) {
                            // Open the Google Drive link in a new tab
                            window.open(project.demoUrl, "_blank");
                          } else {
                            // Otherwise, navigate to the demoUrl
                            window.location.href = project.demoUrl;
                          }
                        }}
                        className="flex flex-row items-center justify-center border border-black gap-2 px-4 py-2 text-sm font-medium text-black transition-all duration-200 transform rounded-lg shadow-lg bg-white hover:gradient-bg line-clamp-1"
                      >
                        <span>Visit Demo</span>
                        <IoMdOpen />
                      </button>
                    )}
                  </div>
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
