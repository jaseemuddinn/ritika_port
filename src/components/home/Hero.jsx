"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./style.css";

const Cursor = () => {
  const cursorCircle = useRef(null);
  const cursorPoint = useRef(null);
  const imageWrap = useRef(null);
  const bigName = useRef(null); // Reference for .big-name
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [pointPos, setPointPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!bigName.current) return; // Ensure ref exists before accessing

    gsap
      .timeline({ defaults: { duration: 1.3, ease: "power4.inOut" } })
      .to(".image-wrap", {
        height: "550px",
        backgroundSize: "105%",
        duration: 1.5,
        ease: "power1.inOut",
      })
      .to(
        ".image-wrap",
        { height: "250px", backgroundPosition: "20% 35%", y: "0" },
        1.5
      )
      .from(
        bigName.current,
        { y: window.innerHeight - bigName.current.getBoundingClientRect().top },
        1.5
      )
      .from(".hide", { opacity: "0" }, 1.5);

    setTimeout(() => {
      if (imageWrap.current) imageWrap.current.style.pointerEvents = "auto";
    }, 2000);
  }, []);

  return (
    <>
      <main>
        <div ref={imageWrap} className="image-wrap getHover"></div>
        <h1 ref={bigName} className="big-name getHover">
          RITIKA
        </h1>

        <span className="scroll hide">Scroll down</span>
        <span className="line hide"></span>

        <div className="bottom-section hide">
          <p>
            <i className="bx bxs-map-pin"></i> Straight from India
          </p>
          <ul className="social-media">
            <li>
              <a href="#" className="getHover">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="getHover">
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#" className="getHover">
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Cursor;
