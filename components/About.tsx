import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16  uppercase tracking-[20px] text-gray-500 text-2xl lg:top-24">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/564x/9f/0d/20/9f0d20b3bb9af7a7a0e216be43ec8d7e.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 mt-16 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold pt-20">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base line-clamp-5 md:line-clamp-none">
          Hello there! I am Ricky, a passionate and creative web developer with
          a flair for turning ideas into interactive digital experiences.
          Whether you&apos;re an entrepreneur with a startup dream, an
          established business seeking a digital makeover, or anyone in between,
          I&apos;m here to help you navigate the ever-evolving web landscape.
          Let&apos;s embark on a web development journey together, where your
          ideas meet my expertise to create something extraordinary. If
          you&apos;re looking for a dedicated web developer who is as intrested
          in your project&apos;s success as you are, I&apos;m just a message
          away. Let&apos;s turn your digital dreams into reality!
        </p>
      </div>
    </motion.div>
  );
}
