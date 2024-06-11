"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import Freelacer from "../../public/images/Cards/Freelancer.png";
import SDE from "../../public/images/Cards/SDE.png";
import UI from "../../public/images/Cards/UI.png";
import FullStack from "../../public/images/Cards/FullStack.png";


import { motion } from "framer-motion";

export default function About() {
  const images = [
    Freelacer,
    SDE,
    UI,
    FullStack,
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
        Hello, my name is <span className="font-bold">Sanjay Gawai</span>, and I&apos;m - a passionate software engineer with a Bachelor of Technology in Electronics and 
        Telecommunication and a Diploma in Computer Science. My journey in the world of technology has been both exciting and fulfilling,
         driven by an insatiable curiosity and a dedication to continuous learning and improvement.

        </Paragraph>
        <h3 className=" mt-4 font-bold">My Background : </h3>
        <Paragraph >
        My formal education laid a strong foundation for my career. With a Bachelor of Technology in Electronics and Telecommunication,
        also Completed a Diploma in Computer Science, I developed a comprehensive skill set that bridges hardware and software, allowing me to approach problems from multiple angles.
        </Paragraph>
        <h3 className=" mt-4 font-bold">My Passion : </h3>
        <Paragraph >
        Since the early days of my journey, I've been captivated by the art of crafting exceptional digital experiences.
         As a developer, I thrive on turning lines of code into functional and elegant solutions. My goal is not just to create
          software but to build digital marvels that seamlessly merge form and function. This passion led me to become a certified <span className="font-bold">Full Stack Web Developer </span>
           through Coding Ninjas, where I honed my skills in both front-end and back-end development
        </Paragraph>
        <h3 className=" mt-4 font-bold">Continuous Learning : </h3>
        <Paragraph >
        The tech world is ever-evolving, and I am committed to staying at the forefront of this dynamic field.
         I am continuously learning new things and upgrading myself, embracing the latest technologies and methodologies 
         to ensure that my skills remain sharp and relevant. This commitment to growth enables me to tackle complex challenges 
         and deliver innovative solutions.

        </Paragraph>
        <h3 className=" mt-4 font-bold">Sharing My Journey : </h3>
        <Paragraph >
        Through this website, I aim to share my insights, experiences, and creations with you.
         Whether you're a fellow developer seeking solutions, a writer in search of inspiration,
          or someone who appreciates the finer aspects of design, there's something here for you.
           I believe in the power of community and collaboration,
         and I hope that my journey can inspire and support others on their own paths.
        </Paragraph>
        <h3 className=" mt-4 font-bold">Join Me : </h3>
        <Paragraph >
        Join me on this journey of bytes and narratives, logic and creativity, code and prose. 
        Together, we can explore the boundless possibilities of technology and storytelling, all while reveling in the sheer beauty of thoughtful design. Thank you for being here,
         and I can't wait to embark on this adventure with you.
        </Paragraph>
   
      </div>
    </div>
  );
}
