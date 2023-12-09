"use client";

import React from "react";

import { CountdownTimer } from "./countdown";
import Gallery from "./gallery";

import image1 from "@/public/images/ajutorsiaventura/1.png";
import image2 from "@/public/images/ajutorsiaventura/3.png";
import image3 from "@/public/images/ajutorsiaventura/4.png";
import image4 from "@/public/images/ajutorsiaventura/5.png";

const FacebookSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="96"
      height="96"
      viewBox="0 0 48 48"
    >
      <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
      <path
        fill="#fff"
        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
      ></path>
    </svg>
  );
};

const InstagramSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="96"
      height="96"
      viewBox="0 0 48 48"
    >
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
        cx="19.38"
        cy="42.035"
        r="44.899"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fd5"></stop>
        <stop offset=".328" stop-color="#ff543f"></stop>
        <stop offset=".348" stop-color="#fc5245"></stop>
        <stop offset=".504" stop-color="#e64771"></stop>
        <stop offset=".643" stop-color="#d53e91"></stop>
        <stop offset=".761" stop-color="#cc39a4"></stop>
        <stop offset=".841" stop-color="#c837ab"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
        cx="11.786"
        cy="5.54"
        r="29.813"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#4168c9"></stop>
        <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <path
        fill="#fff"
        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
      ></path>
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
      <path
        fill="#fff"
        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
      ></path>
    </svg>
  );
};

export default function SignUp() {
  const THREE_DAYS_IN_MS = 24 * 24 * 60 * 60 * 1000 - 2 * (60 * 60 * 1000);
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = 1703781253000;

  const images = [image1, image2, image3, image4];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              4x4 Ajutor si Aventura
            </h1>
            <br />
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
              ORCA & 4x4 Ajutor si Aventura Editia II
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto">
            {/* <div className="text-gray-400 text-center mt-6">
              Already using Open PRO? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
            </div> */}
            <CountdownTimer targetDate={dateTimeAfterThreeDays} /> <br />
            <Gallery images={images} /> <br />
            <br />
            <br />
            <p
              style={{ textAlign: "center", fontSize: "22px", color: "white" }}
            >
              ✅ În data de 27.12.2022 Off Road Club Arad organizează un convoi
              umanitar pentru satele izolate din zona Vârfurile - Halmagiu,
              județul Arad. ✅
            </p>
            <br />
            <p
              style={{ textAlign: "center", fontSize: "22px", color: "white" }}
            >
              🎁 Încercăm să facem 100 de pachete cu alimente de bază si bunuri
              de larg consum pentru persoane vârstnice și copii cu situație
              financiare precare. 🎁
            </p>
            <br />
            <p
              style={{ textAlign: "center", fontSize: "22px", color: "white" }}
            >
              🫶 Orice ajutor este binevenit. 🫶
            </p>
            <br />
            <br />
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
              Beneficiar
            </h1>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">
              {" "}
              CARLA-IASMINA ARDELEAN
            </p>
            <br />
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
              IBAN
            </h1>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">
              {" "}
              RO22 BREL 0005 5246 6078 0100
            </p>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                target="_blank"
                href="https://www.facebook.com/4x4ajutorsiaventura/"
              >
                <FacebookSVG />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/4x4ajutorsiaventura/"
              >
                <InstagramSVG />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
