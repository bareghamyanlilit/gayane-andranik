import { anim, program, programImgs } from "@/data/data";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export function Program() {
  return (
    <section className="bg-[#ffffff] text-[#1b1b1b] px-6 py-12">
      <motion.h2 {...anim} className="relative z-0 text-center text-2xl mb-10 ">
        Ժամանակացույց
        <p className=" absolute w-max -z-1 text-5xl -top-1 left-1/2 -translate-x-1/2 text-[#1b1b1b13] ">
          Ժամանակացույց
        </p>
      </motion.h2>

      {program.map((item, i) => (
        <div className=" bg-cover font-bold  bg-no-repeat  bg-center" key={i}>
          <ProgramItem {...item} />
        </div>
      ))}
    </section>
  );
}

const getImage = (title) => {
  if (title === "Պսակադրություն") return programImgs[0];
  if (title === "Հարսանյաց հանդիսություն") return programImgs[1];
  return null;
};

const ProgramItem = ({ icon, time, title, address }) => {
  const img = getImage(title);

  return (
    <div className="my-8 flex flex-col items-center text-xl">
      <motion.p {...anim} className="text-4xl">
        {icon}
      </motion.p>
      <motion.p {...anim} className="opacity-80">
        {time}
      </motion.p>
      <motion.h3 {...anim}>{title}</motion.h3>
      <motion.p {...anim} className="text-sm opacity-80">
        {address}
      </motion.p>

      {img && <img src={img} className="my-4 max-w-full rounded" />}

      <motion.a
        {...anim}
        href={`https://www.google.com/maps/search/${address}`}
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-1.5 text-sm"
      >
        <FaMapMarkedAlt />
        Ինչպես հասնել
      </motion.a>

      {title !== "Հարսանյաց հանդիսություն" && (
        <img
          src="https://static.thenounproject.com/png/arrow-icon-5953741-512.png"
          className="rotate-215 w-20 h-20 opacity-60 my-10"
        />
      )}
    </div>
  );
};
