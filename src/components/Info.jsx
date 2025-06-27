import { Fragment } from "react";
import { BiArrowFromLeft, BiArrowToLeft, BiCopyright } from "react-icons/bi";

export default function Info() {
  const socialLinks = [
    // {
    //   src: "github.webp",
    //   name: "GitHub",
    //   link: "https://github.com/ali007-depug",
    // },
    {
      src: "linkedIn.webp",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ali-abdelbagi-02313b223/",
    },
    // {
    //   src: "x.webp",
    //   name: "X",
    //   link: "https://x.com/AAbuel3iz?t=CuBNSxHRhlU9fmVw9JExdQ&s=09",
    // },
    // {
    //   src: "insta.webp",
    //   name: "instagram",
    //   link: "https://www.instagram.com/ali_abdelbagi?utm_source=qr&igsh=NnRsaHc2eDdoNDBz",
    // },
    // {
    //   src: "facebook.webp",
    //   name: "facebook",
    //   link: "https://www.facebook.com/ali.abdelbagiali.3",
    // },
  ];

  const icons = socialLinks.map((social, index) => {
    return (
      <Fragment key={index}>
        <a
          href={social.link}
          title={social.name}
          target="_blank"
          className=""
        >
          <img
            src={social.src}
            alt={social.name}
            width={30}
            className="size-7 md:size-8"
          />
        </a>
      </Fragment>
    );
  });

  return (
    <div className="w-fit my- relative left-[-50%] translate-x-[50%] bottom-[-30px] bg-white rounded px-5 py-2 min-w-80">
      {/* developer Info */}
      <div className="text-xs md:text-base w-full bg-white  flex items-center flex-wrap gap-2">
        <p className="text-center">
          تم تطوير الموقع بواسطة{" "}
          <span className="font-bold text-sm md:text-lg">Ali AbdElbagi</span>
        </p>
        <p className="text-center font-bold"><BiArrowToLeft/></p>
        <div className="Links flex gap-4 justify-center ">{icons}</div>
      </div>
      {/* copy wright */}
      {/* <p><BiCopyright/> 2025</p> */}
    </div>
  );
}
