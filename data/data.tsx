import { FaChurch, FaHome, FaUtensils } from "react-icons/fa";

export const day=[10,7,2026]
export const theWeddingDate = new Date("2026-07-10T12:00:00");

export const names=["Գայանե  և Անդրանիկ"]
export const txt1="Գեղեցիկ օր և մենք կդառնանք ամուսիններ"
export const txt2Title="Սիրելի՛ ընկերներ և բարեկամներ"
export const txt2Descr="Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան օրվան"
export const txt3="Խնդրում ենք նախապես տեղեկացնել Ձեր մասնակցության մասին մինչև Հունիսի 10-ը"

export const programImgs=['/ekexeci.jpg','/restoran.jpg']
export const program = [
  {
    icon: <FaChurch />,
    time: "12:00",
    title: "Պսակադրություն",
    address: "Սուրբ Գայանե եկեղեցի",
  },
  {
    icon: <FaHome />,
    time: "14:00",
    title: "Հարսի տուն",
    address: "https://yandex.com/maps/105883/khankendi/?ll=46.748218%2C39.819078&mode=whatshere&whatshere%5Bpoint%5D=46.748130%2C39.818812&whatshere%5Bzoom%5D=18.267328&z=18",
  },
  {
    icon: <FaHome />,
    time: "15:00",
    title: "Փեսայի տուն",
    address: "https://yandex.com/maps/org/157304007599?si=v8rn2aa9n4dmqw67k4xnc8gda4",
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