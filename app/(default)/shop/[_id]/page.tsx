import TutorialImage01 from "@/public/images/consult-main.jpg";
import Image from "next/image";
import ContactForm from "./contactForm";

export const metadata = {
  title: "Afaceri",
  description: "Page description",
};

async function getProdus(modelName: any, collectionName: any) {
  const res = await fetch(
    `/.netlify/functions/get_product?modelName=${modelName}&collectionName=${collectionName}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data;
}

export default async function page({ params }: any) {
  const proiect: any = await getProdus(params.modelName, params.collectionName);

  // imagine: TutorialImage04,
  // titlu: "Proiect 4",
  // beneficiari: "1",
  // valoare: "50-100",
  // cofinantare: "10%",
  // locatie: " vest",
  // proiect: "PNRR",
  // firma: "tractor",

  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-5 mx-5 sm:px-5">
          <div className="pt-20 pb-12 md:pt-20 md:pb-5">
            {/* Page header */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                {/* grid 1 */}

                <div className="max-w-3xl pb-5 md:pb-5 text-center md:text-left">
                  <h1 className="h1">{proiect.titlu}</h1>

                  <p className="text-xl text-gray-600">{proiect.intro}</p>
                  <br />

                  <div className="border-b border-gray-300 pb-4 mt-5 mb-5" />

                  <br />
                  <div>
                    {" "}
                    <b style={{ fontSize: "25px" }}>Date de Contact</b>
                    <br />
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      Nume: <b className="text-orange-700">Lelica Crisan</b>
                    </p>
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      Telefon: <b className="text-orange-700">0744 506 685</b>
                    </p>
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      Email:{" "}
                      <b className="text-orange-700">
                        consulting.staff@yahoo.com
                      </b>
                    </p>
                  </div>
                </div>
              </div>

              {/* grid 2 */}
              <ContactForm firma={proiect.titlu} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
