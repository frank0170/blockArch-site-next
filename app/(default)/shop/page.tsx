import React from 'react'

const page = () => {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900 opacity-75" aria-hidden="true"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">Magazinul online sa va lasa in curand...</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Pentru orice oferte sau recomandari, ne puteti trimite un mail la frank@blockarch.ro</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default page