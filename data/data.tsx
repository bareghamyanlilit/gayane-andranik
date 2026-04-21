import { FaChurch, FaHome, FaUtensils } from "react-icons/fa";

export const day=[10,7,2026]
export const theWeddingDate = new Date("2026-07-10T12:00:00");

export const names=["Գայանե  և Անդրանիկ"]
export const txt1="Գեղեցիկ օր և մենք կդառնանք ամուսիններ"
export const txt2Title="Սիրելի՛ ընկերներ և բարեկամներ"
export const txt2Descr="Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան օրվան"
export const txt3="Խնդրում ենք նախապես տեղեկացնել Ձեր մասնակցության մասին մինչև Մայիսի 15-ը"

export const programImgs=['/ekexeci.jpg','/restoran.jpg']
export const program = [
  {
    icon: <FaHome />,
    time: "12:00",
    title: "Փեսայի տուն",
    address: "Երևան",
  },
  {
    icon: <FaHome />,
    time: "13:00",
    title: "Հարսնացուի տուն",
    address: "Երևան",
  },
  {
    icon: <FaChurch />,
    time: "12:00",
    title: "Պսակադրություն",
    address: "Սուրբ Գայանե եկեղեցի",
  },
  {
    icon: <FaUtensils />,
    time: "17:30",
    title: "Հարսանյաց հանդիսություն",
    address: "Հրաշք այգի ռեստորան",
  },
];

export const rsvp='https://script.google.com/macros/s/AKfycbzyfro3JAC3RbjDI90Eg0wsanX9o0lGnQuXLZo9jlUKfxrnSoDCqZwH0F5Yl-pX_SMxwg/exec'



export const anim: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};