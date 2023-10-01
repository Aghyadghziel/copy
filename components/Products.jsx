"use client";
import React, { useRef, useEffect } from "react";
import "../app/global.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from ".";

const Products = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const sections = gsap.utils.toArray(".slider section");

    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 2,
        end: () => "+=" + slider.offsetWidth,
      },
    });
    tl.to(slider, {
      xPercent: -72,
    });

    sections.forEach((stop, index) => {
      tl.from(stop.querySelector(".content"), {
        yPercent: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: stop.querySelector(".content"),
          start: "left center",
          end: "center center",
          containerAnimation: tl,
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <>
      <div className="outer ">
        <div className="slider" ref={sliderRef}>
          <section>
            <div className="inner">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/23/04/14/boat-8270209_1280.jpg"
                alt="photo"
              />
              <div className="content ">
                {" "}
                <h1>AiOS Niue</h1>
                <p>
                  Join the Revolution Embark on a journey of seamless
                  collaborations and operational excellence. With B2B and C2C
                  Connect, not only do you open doors to lucrative business
                  partnerships, but you also empower your operations with the
                  latest in AI-driven innovations. Join us, and let's redefine
                  the future of business.
                </p>
                <Button
                  title="Explore More"
                  containerStyles="rounded-full shadow-sm mt-[10px]"
                  textStyles=""
                  href="/products/niue"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="inner">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/23/04/14/boat-8270209_1280.jpg"
                alt="photo"
              />
              <div className="content">
                {" "}
                <h1>Smart Employee Consult </h1>
                <p>
                  Connect & Conquer with AiOS Smart Employees and Consults
                  Welcome to the future of business collaborations. As
                  industries advance, so does our dedication to provide you with
                  cutting-edge tools. Dive into a world where consumer relations
                  blend effortlessly with top-tier service.
                </p>
                <Button
                  title="Explore More"
                  containerStyles="rounded-full shadow-sm mt-[10px]"
                  textStyles=""
                  href="/products/smart_employee"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="inner">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/23/04/14/boat-8270209_1280.jpg"
                alt="photo"
              />
              <div className="content">
                {" "}
                <h1>AiOS Pathfinder</h1>
                <p>
                  Unlock Your AI Superpowers with the AI Job Readiness Program!
                  Ever wondered how AI is shaping our world? Want to be part of
                  the change and not just watch from the sidelines? Dive into
                  the AI Job Readiness Program! We're here to help you
                  understand AI in a fun and easy way, preparing you to take on
                </p>
                <Button
                  title="Explore More"
                  containerStyles="rounded-full shadow-sm mt-[10px]"
                  textStyles=""
                  href="/products/pathfinder"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="inner">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/23/04/14/boat-8270209_1280.jpg"
                alt="photo"
              />
              <div className="content">
                {" "}
                <h1>Universal Chat</h1>
                <p>
                  Step into a world where language barriers vanish! Universal
                  Chat redefines real-time translation, offering an experience
                  unparalleled by apps like WhatsApp and Google Translation.
                  Engage effortlessly in multi-language conversations, with our
                </p>
                <Button
                  title="Explore More"
                  containerStyles="rounded-full shadow-sm mt-[10px]"
                  textStyles=""
                  href="/products/universal_chat"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="image-container">
        <img src="/background.webp" data-distance="80" alt="anime" />
      </div>
    </>
  );
};

export default Products;
