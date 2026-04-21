import { anim, theWeddingDate } from "@/data/data";
import { useEffect, useState } from "react";

const weddingDate: any = theWeddingDate;

export function TimeBox() {
  const [timeLeft, setTimeLeft] : any= useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

        setTimeLeft({
          days: pad(days),
          hours: pad(hours),
          minutes: pad(minutes),
          seconds: pad(seconds),
          finished: false,
        });
      } else {
        setTimeLeft((prev: any) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className=" flex flex-col gap-5 text-center  text-[#ffffff]  px-0 ">
      <h2 className=" font-bold text-lg">
        Միջոցառմանը մնաց
      </h2>
      <div className="">
        {timeLeft.finished ? (
          <div className="text-black text-2xl font-semibold px-4  rounded-xl shadow">
            Հարսանիքն արդեն սկսվել է 🎉
          </div>
        ) : (
          <div className="flex justify-center text-4xl font-extralight ">
            <TimeBoxItem label="Օր" value={timeLeft.days} /> |
            <TimeBoxItem label="Ժամ" value={timeLeft.hours} /> |
            <TimeBoxItem label="Րոպե" value={timeLeft.minutes} /> |
            <TimeBoxItem label="Վայրկյան" value={timeLeft.seconds} />
          </div>
        )}
      </div>
    </section>
  );
}

const TimeBoxItem = ({ label, value }) => (
  <div className="px-2 text-center ">
    <h2>{value}</h2>
  </div>
);
