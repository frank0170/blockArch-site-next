"use client";

import React, { useState } from "react";

const ContactForm = ({ firma }: any) => {
  const [name, setName] = useState<any>();
  const [telefon, setTelefon] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [mesaj, setMesaj] = useState<any>();

  return (
    <div className="md:col-span-1 ml-3">
      <div className="pt-5 flex justify-end">
        <a
          href="/afaceri"
          className="btn text-orange-600 border border-orange-600 hidden md:block"
        >
          Inapoi
        </a>
      </div>
      <br />
      <div className="border border-gray-300 pb-4 mt-1 mb-5 flex flex-col justify-center items-center">
        <br />
        Esti interesat de aceasta afacere?
        <br />
        <br />
        <input
          type="text"
          placeholder="Nume"
          required
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <input
          type="text"
          placeholder="Telefon"
          onChange={(e) => setTelefon(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <textarea
          placeholder="Mesaj"
          onChange={(e) => setMesaj(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <a
          className="btn text-white bg-orange-600"
          href={`mailto:consulting.staff@yahoo.com?subject=Afaceri%20de%20Vanzare%20-%20${firma}&body=Nume:%20${name}%0A%0AEmail:%20${email}%0A%0ATelefon:%20${telefon}%0A%0AMesaj:%20${mesaj}`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
