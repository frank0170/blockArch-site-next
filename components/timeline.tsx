export default function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Bringing the world's ideas to life</h2>
            <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Inceputul</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2020</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">InvestNetwork a fost fondat in Arad, Romania.</h4>
                </div>
                <p className="text-lg text-gray-400">Fondat un start-up care avea ca scop creearea de site-uri si platforme web.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Orizonturi noi</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2021</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Dezvoltarea punctelor de lucru in orase noi, Timisoara, Romania.</h4>
                </div>
                <p className="text-lg text-gray-400">Prima extindere a companiei, ajungand la un numar de 5 developeri.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Finantari</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2022</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Proiectul BlockArch prinde contur</h4>
                </div>
                <p className="text-lg text-gray-400">Castigam primele proiecte de fonduri nerambursabile pentru a dezvolta compania.</p>
              </div>
            </div>

            {/* 4th item */}


            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Proiecte de amploare</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2023</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Colaborari</h4>
                </div>
                <p className="text-lg text-gray-400">Colaborarea si fuziunea cu diferite firma de consultanta/contabilitate pentru dezvoltarea de proiecte pentru fonduri europene si primii clienti mari.</p>
              </div>
            </div>

            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Cercetare tehnica</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2024</div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Workstations marca BlockArch</h4>
                </div>
                <p className="text-lg text-gray-400">Inceputul departamentului de creat workstations si echipamenete tehnologice custom.</p>
              </div>
            </div>


            

          </div>

        </div>
      </div>
    </section>
  )
}
