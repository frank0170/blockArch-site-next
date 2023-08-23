"use client";

import Link from "next/link";

import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState<any>();
  const [telefon, setTelefon] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [mesaj, setMesaj] = useState<any>();

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
            Echipa noastră de experți este aici pentru a vă ajuta să transformați ideile și proiectele dvs. în realitate.    </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form></form>

            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name"
                  >
                    Nume <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Nume"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourcompany.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                  >
                    Telefon <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="text"
                    type="text"
                    className="form-input w-full text-gray-300"
                    onChange={(e) => setTelefon(e.target.value)}
                    placeholder="Telefon"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="company-name"
                  >
                    Mesaj<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    onChange={(e) => setMesaj(e.target.value)}
                    placeholder="Mesajul dvs."
                    required
                  />
                </div>
              </div>

              {/* <div className="text-sm text-gray-500 text-center">
                I agree to be contacted by Open PRO about this offer as per the Open PRO <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
              </div> */}
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <a
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href={`mailto:consulting.staff@yahoo.com?subject=Contact&body=Nume:%20${name}%0A%0AEmail:%20${email}%0A%0ATelefon:%20${telefon}%0A%0AMesaj:%20${mesaj}`}
                  >
                      Contacteaza-ne
                  </a>
                </div>
              </div>
            </form>
            {/* <div className="text-gray-400 text-center mt-6">
              Already using Open PRO? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
