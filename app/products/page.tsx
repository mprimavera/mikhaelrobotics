"use client";

import Carousel from "@/components/ui/carousel";

export default function products() {
  const slideData = [

    // First slide now uses a dummy image + button instead of embedded video
    {
      title: "Π: Digital Contact Cards",
      src: "/pi_ad.jpg", // <-- replace this with your actual image
      buttonText: "Watch Video",
      buttonAction: () => window.open("https://youtu.be/SDK4FM9hwQk?si=jGM9AAmJBe8BWb_u", "_blank"),
      bottomDescription: "This was my first software-driven product. I developed a custom Python script to generate QR codes optimized for smartphone scanning.",
      titleColor: "text-blue-300/70",
      descriptionColor: "text-blue-300/70"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_rwb.jpg",
      bottomDescription: "This became my top-selling product.",
      titleColor: "text-blue-300/70",
      descriptionColor: "text-blue-300/70"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_ad.jpg",
      bottomDescription: "This CAD drawing was created to show customers the precise dimensions.",
      titleColor: "text-slate-600/70",
      descriptionColor: "text-slate-600/70"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_carousel.jpg",
      bottomDescription: "I used a specialized acrylic compound, making these combs significantly stronger than competing products.",
      titleColor: "text-blue-300/70",
      descriptionColor: "text-blue-300/70"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_set.jpg",
      bottomDescription: "This is the full set of sizes I offered.",
      titleColor: "text-blue-300/70",
      descriptionColor: "text-blue-300/70"
    },

  ];

  return (

        <div className="">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl mb-4 text-white max-w-full">
                Products (more coming over the next few days...)
            </h2>

          <div className="mb-8 max-h-50 sm:max-h-35 md:max-h-40 lg:max-h-50 overflow-y-auto pr-2">

            <p className="text-slate-500 lg:text-xl md:text-base max-w-3xl">
                Over the years, I’ve learned that integrity is a primary key to success in business. I strive to be open and honest about my
                achievements and intentions. While this approach may make some companies hesitant to hire someone with my capabilities,
                I believe that choosing the right path may open fewer doors but will create far more meaningful opportunities for both
                myself and companies equally driven to excel.
            </p>


            <p className="text-slate-500 lg:text-xl md:text-base max-w-3xl">
                These are the products I designed, manufactured, marketed, and sold through my e-commerce store. I eventually closed it
                due to inconsistent income, with plans to start a new company in 2030 after completing my studies in agentic electromechanical
                engineering.
            </p>

            </div>
        </div>
        
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
    </div>
  );
}
