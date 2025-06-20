import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "./logo.png";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current!;
    const hero = heroRef.current!;
    const fadeOverlay = fadeOverlayRef.current!;

    gsap.set(logo, {
      scale: 5,
      opacity: 0.2,
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: `+=${window.innerHeight * 5}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
      },
    });

    tl.fromTo(
      logo,
      {
        scale: 5,
        opacity: 0.2,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
      }
    ).fromTo(
      fadeOverlay,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "none",
      },
      0
    ).fromTo(
      hero,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "none",
      },
      0.5
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <div className="logo-container" ref={logoRef}>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="fade-overlay" ref={fadeOverlayRef}></div>
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1>Animation Experiment 452</h1>
          <p>By Codegrid</p>
        </div>
      </section>
      <section className="outro">
        <p>Build your empire. Rule your city.</p>
      </section>
    </div>
  );
};

export default App;