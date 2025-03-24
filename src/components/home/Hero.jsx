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
        { height: "250px", backgroundPosition: "40% 40%", y: "0" },
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

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", updateMousePosition);
//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   useEffect(() => {
//     const animateCursor = () => {
//       setCirclePos((prev) => ({
//         x: prev.x + (mousePos.x - prev.x) * 0.2,
//         y: prev.y + (mousePos.y - prev.y) * 0.2,
//       }));
//       setPointPos((prev) => ({
//         x: prev.x + (mousePos.x - prev.x) * 0.8,
//         y: prev.y + (mousePos.y - prev.y) * 0.8,
//       }));
//       requestAnimationFrame(animateCursor);
//     };
//     animateCursor();
//   }, [mousePos]);

  return (
    <>
      {/* <div className="image-wrap" ref={imageWrap}></div>
      <h1 className="big-name" ref={bigName}>RITIKA</h1>  */}

      <main>
        {/* <div
          className="cursor-circle"
          ref={cursorCircle}
          style={{ transform: `translate(${circlePos.x}px, ${circlePos.y}px)` }}
        ></div>
        <div
          className="cursor-point"
          ref={cursorPoint}
          style={{ transform: `translate(${pointPos.x}px, ${pointPos.y}px)` }}
        ></div> */}

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
