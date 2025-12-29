import React from "react";
import Image from "next/image";

// Internal Import
import Style from "@/styles/aboutus.module.css";
import { Brand } from "@/components";
import images from "@/img";

const AboutUs = () => {
  const founderArray = [
    {
      name: "Arunpandian",
      position: "Co-founder",
      images: images.founder1,
    },
    {
      name: "Tejas",
      position: "Co-founder",
      images: images.founder2,
    },
    {
      name: "Gokulakannan",
      position: "Co-founder",
      images: images.founder3,
    },
  ];

  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We're impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} alt="About us" />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We're impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div key={i} className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default AboutUs;
