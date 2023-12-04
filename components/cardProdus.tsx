"use client";

import Image from "next/image";

export default function CardArticle({ model, descriere }: any) {
  return (
    <article
      className="flex flex-col h-full shadow-lg rounded-xl"
      data-aos="zoom-y-out"
    >
      <header>
        <div className="block mb-6" suppressHydrationWarning>
          <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
            {/* <Image
              className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
              src={TutorialImage01}
              width={352}
              height={198}
              alt="imagine"
            /> */}
          </figure>
        </div>

        <h3 className="text-xl font-bold leading-snug tracking-tight">
          <p>{model}</p>
        </h3>
        <p className="text-gray-600">{descriere}</p>
      </header>
      <br />
      {/* <p className="text-gray-600 grow">
        <b>Beneficiari:</b> {beneficiariIntro}
      </p>
      <p className="text-gray-600 grow">
        <b>Valoare:</b> {valoare}
      </p>
      <p className="text-gray-600 grow">
        <b>Cofinantare:</b> {cofinantare}
      </p>
      <p className="text-gray-600 grow">
        <b>Locatie:</b> {locatie}
      </p> */}

      <footer className="text-sm flex items-center mt-4">
        {/* <div>
    <span className="text-gray-600">By </span>
    <a className="font-medium hover:underline" href="#0">Lisa Allison</a> & <a className="font-medium hover:underline" href="#0">Justin Park</a>
  </div> */}
      </footer>
    </article>
  );
}
