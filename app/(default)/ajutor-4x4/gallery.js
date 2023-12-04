"use client";

import React, { useState } from "react";
import Image from "next/image";

const NextIcon = () => {
  return (
    <svg
      width="80"
      height="94"
      viewBox="0 0 80 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.3736 55.777L21.5895 73.6151V65.1392L48.7344 52.7855L48.4574 53.2564V52.0653L48.7344 52.5639L21.5895 40.1825V31.7344L58.3736 49.5724V55.777Z"
        fill="white"
      />
      <circle cx="40" cy="51" r="38.5" stroke="white" stroke-width="3" />
    </svg>
  );
};

const PrevIcon = () => {
  return (
    <svg
      width="80"
      height="94"
      viewBox="0 0 80 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5895 55.777V49.5724L54.3736 31.7344V40.1825L27.2287 52.5639L27.478 52.0653V53.2564L27.2287 52.7855L54.3736 65.1392V73.6151L17.5895 55.777Z"
        fill="white"
      />
      <circle cx="40" cy="51" r="38.5" stroke="white" stroke-width="3" />
    </svg>
  );
};

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={prevImage}>
          <PrevIcon />
        </button>
        {Array.from({ length: 3 }).map((_, index) => {
          const imageIndex = (currentIndex + index) % images.length;
          return (
            <Image
              key={index}
              src={images[imageIndex]}
              alt={`Image ${imageIndex + 1}`}
              style={{
                width: "300px",
                height: "300px",
                margin: "0 20px",
                borderRadius: "4px",
              }}
            />
          );
        })}
        <button onClick={nextImage}>
          <NextIcon />{" "}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
