import React from "react";
import Image from "next/image";
import Title from "./Title";

const About = () => {
  return (
    <div className="bg-secondary py-14 ">
      <div className="container mx-auto md:flex items-center gap-20   ">
        <div className="">
          <div className="relative w-[445px] h-[600px] ">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="text-white ">
          <Title addClass="text-[40px] ">We Are Feane</Title>
          <p className="my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
