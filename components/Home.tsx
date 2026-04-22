"use client";
import { Calendar } from "../components/calendar";
import { motion } from "framer-motion";
import {
  anim,
  day,
  names,
  txt1,
  txt2Descr,
  txt2Title,
  txt3,
} from "@/data/data";
import { Program } from "@/components/Program";
import { TimeBox } from "@/components/TimeBox";
import { Footer } from "./footer";
import { useState } from "react";
import { MusicPlayer } from "./music";
import Image from "next/image";
import AttendanceGuests from "./RSVP";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="max-w-xl m-auto h-screen overflow-x-hidden">
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 bg-[#4A4A4A70] right-5 top-6 rounded-[10px] w-16 h-16flex justify-center items-center"
        >
          <Image
            src="/musIcon.png"
            alt="music"
            width={20}
            height={20}
            className="w-full p-3 invert-100"
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      {/* 1 img */}
      <div
        className=" min-h-screen gap-50 justify-end max-w-xl m-auto bg-cover font-bold  bg-no-repeat  bg-center  text-[#ffffff] flex flex-col items-center text-center p-8 py-20 "
        style={{
          backgroundImage: "url('/first.png')",
        }}
      >
        <div>
          <h1 className=" text-shadow-2xs   rounded-2xl text-3xl md:text-7xl">
            {names[0]}
          </h1>
          <p>{txt1}</p>
        </div>
        <TimeBox />
      </div>

      <div className=" flex flex-col gap-5 text-center text-[#1b1b1b]  px-6 py-10">
        <motion.h2 {...anim} className=" font-bold text-lg">
          {txt2Title}
        </motion.h2>
        <motion.p {...anim} className=" text-base  opacity-90">
          {txt2Descr}
        </motion.p>
      </div>

      <Program />

      <Calendar year={day[2]} month={day[1]} highlightDay={day[0]} />

      <AttendanceGuests />

      {/* text info */}
      <section className="text-center bg-white text-[#1b1b1b]  px-2 py-8">
        <motion.h2 {...anim} className="my-4 font-bold text-base">
          {txt3}
        </motion.h2>
      </section>

      <Footer />
    </div>
  );
}
