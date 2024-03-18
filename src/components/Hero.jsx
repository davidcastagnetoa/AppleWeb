import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo);
  const handleVideoSrcSet = () => {
    window.innerWidth < 768 ? setVideoSrc(smallHeroVideo) : setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      duration: 2,
      opacity: 1,
      delay: 1,
      ease: "power2.inOut",
    });
    gsap.to("#cta", {
      duration: 2,
      opacity: 1,
      delay: 1,
      y: -50,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col ">
        {/* GSAP Animation */}
        <p id="hero" className="hero-title">
          Iphone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl ">From €1999 or €199/month</p>
      </div>
    </section>
  );
};

export default Hero;
