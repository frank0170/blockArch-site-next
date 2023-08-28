import Image from 'next/image'
import TargetImage from '@/public/images/features-02-image.png'
import Link from 'next/link'

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">From the big picture to every tiny detail, we got you covered.</h2>
          </div>


                <a
                  className="cursor-pointer  block rounded py-4 px-4 bg-blue text-white border-0"
                  href='/assets/Brosura.pdf'

                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >

                  <span className="ml-4 ">Download Invoice</span>
                </a>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <Image className="mx-auto md:max-w-none" src={TargetImage} width={540} height={520} alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">Be the change you want to see</div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-purple-600">.</span> Pentru dezvoltatori</h4>
                    <p className="text-lg text-gray-400">Dezvoltam proiectele cu o atenție deosebită la nevoile și cerințele dezvoltatorilor, creând astfel soluții care le optimizează fluxul de lucru și le facilitează munca creativă.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-teal-500">.</span> Pentru designeri</h4>
                    <p className="text-lg text-gray-400">De asemeea abordăm construirea proiectelor cu o focalizare deplină asupra nevoilor designerilor, creând soluții care le permit să-și exprime creativitatea și să ofere experiențe vizuale remarcabile.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-pink-500">.</span> Pentru echipe</h4>
                    <p className="text-lg text-gray-400">Nu lasam deoparte in construirea proiectelor si nevoile echipelor, oferind soluții personalizate care facilitează colaborarea eficientă, comunicarea fluidă și maximizarea productivității."</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
