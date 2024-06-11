import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "React.js",
      src: "/images/logos/react.png",

      className: "h-10 w-14",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "Javascript",
      src: "/images/logos/javascript.png",

      className: "h-10 w-14",
    },
    {
      title: "Typescript",
      src: "/images/logos/typescript.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Bootstrap",
      src: "/images/logos/bootstrap.png",

      className: "h-10 w-14",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb.png",

      className: "h-10 w-14",
    },
    {
      title: "MySql",
      src: "/images/logos/mysql.png",

      className: "h-10 w-14",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",

      className: "h-10 w-14",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-14",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },

 
  ];

  const learningStack = [

    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "MySql",
      src: "/images/logos/mysql.png",

      className: "h-10 w-14",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",

      className: "h-10 w-14",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-14",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.png",

      className: "h-10 w-14",
    },
    {
      title: "Springboot",
      src: "/images/logos/springboot.png",

      className: "h-10 w-14",
    },
    {
      title: "Django",
      src: "/images/logos/django.png",

      className: "h-10 w-14",
    },
    {
      title: "Kubernetes",
      src: "/images/logos/kubernets.png",

      className: "h-10 w-14",
    },
    {
      title: "Flutter",
      src: "/images/logos/flutter.png",

      className: "h-10 w-14",
    },
    {
      title: "React Native",
      src: "/images/logos/reactnative.png",

      className: "h-10 w-14",
    },
    {
      title: "Android Studio",
      src: "/images/logos/android.png",

      className: "h-10 w-14",
    },


 
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack : Learning
      </Heading>
      <div className="flex flex-wrap">
        {learningStack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
