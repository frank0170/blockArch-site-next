"use client";

import React from "react";

import { CountdownTimer } from "./countdown";
import Gallery from "./gallery";

import image1 from "@/public/images/ajutorsiaventura/1.png";
import image2 from "@/public/images/ajutorsiaventura/3.png";
import image3 from "@/public/images/ajutorsiaventura/4.png";
import image4 from "@/public/images/ajutorsiaventura/5.png";

export default function SignUp() {
  const THREE_DAYS_IN_MS = 24 * 24 * 60 * 60 * 1000 - 2 * (60 * 60 * 1000);
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

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
          </div>
        </div>
      </div>
    </section>
  );
}
