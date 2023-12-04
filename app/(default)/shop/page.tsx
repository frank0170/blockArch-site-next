"use client";
import React, { useState, useEffect } from "react";
import CardArticle from "@/components/cardProdus";
import Link from "next/link";

// export const metadata = {
//   title: "Shop",
//   description: "Page description",
// };

const page = () => {
  const [pc, setPC] = useState<any>([]);
  const [server, setServer] = useState<any>([]);
  const [ws, setWS] = useState<any>([]);

  useEffect(() => {
    const getPC = async () => {
      let results = await fetch("/.netlify/functions/get_pc").then((response) =>
        response.json()
      );
      setPC(results);
      console.log("hey", results);
    };

    getPC();
  }, []);

  useEffect(() => {
    const getServer = async () => {
      let results = await fetch("/.netlify/functions/get_server").then(
        (response) => response.json()
      );
      setServer(results);
      console.log("hey", results);
    };

    getServer();
  }, []);

  useEffect(() => {
    const getWS = async () => {
      let results = await fetch("/.netlify/functions/get_workstation").then(
        (response) => response.json()
      );
      setWS(results);
      console.log("hey", results);
    };

    getWS();
  }, []);

  const [category, setCategory] = useState("pc");

  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gray-900 opacity-75"
          aria-hidden="true"
        ></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Magazinul online sa va lasa in curand...
            </h1>

            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Pentru orice oferte sau recomandari, ne puteti trimite un mail la
              frank@blockarch.ro
            </p>
            <ul className="flex flex-wrap flex-col text-lg text-gray-400 -mx-2 -my-1 mt-5">
              <li className="flex items-center mx-2 my-1">
                <button onClick={() => setCategory("pc")}>
                  Desktop Gaming
                </button>
              </li>
              <li className="flex items-center mx-2 my-1">
                <span onClick={() => setCategory("server")}>Server</span>
              </li>
              <li className="flex items-center mx-2 my-1">
                <span onClick={() => setCategory("ws")}>Workstation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                <h3 className="h3 mb-3">Categorii</h3>

                <ul className="flex flex-wrap flex-col text-lg text-gray-400 -mx-2 -my-1 mt-5">
                  <li className="flex items-center mx-2 my-1">
                    <button onClick={() => setCategory("PC_GAMING")}>
                      Desktop Gaming
                    </button>
                  </li>
                  <li className="flex items-center mx-2 my-1">
                    <span onClick={() => setCategory("SERVER")}>Server</span>
                  </li>
                  <li className="flex items-center mx-2 my-1">
                    <span onClick={() => setCategory("WORKSTATION")}>
                      Workstation
                    </span>
                  </li>
                </ul>
              </div>

              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  {category === "PC_GAMING" &&
                    pc.map((item: any) => (
                      <Link
                        href={`/shop/${item.model}?modelName=${item.model}&collectionName=${category}`}
                        key={item.model}
                      >
                        <CardArticle
                          model={item.model}
                          descriere={item.descriere}
                        />
                      </Link>
                    ))}
                  {category === "SERVER" &&
                    server.map((item: any) => (
                      <CardArticle
                        model={item.model}
                        descriere={item.descriere}
                      />
                    ))}
                  {category === "WORKSTATION" &&
                    ws.map((item: any) => (
                      <CardArticle
                        model={item.model}
                        descriere={item.descriere}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
