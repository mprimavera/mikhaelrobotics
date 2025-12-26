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
      bottomDescription: "This was my first product to use software. I wrote a custom python script to generate QR codes with an optimal data size for smartphones.",
      titleColor: "text-blue-300/70",
      descriptionColor: "text-blue-300/70"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_rwb.jpg",
      bottomDescription: "This is the number-one selling product I had created.",
      titleColor: "text-blue-300/70",
      descriptionColor: "text-blue-300/70"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_ad.jpg",
      bottomDescription: "This is the CAD drawing I created to show customers the exact size.",
      titleColor: "text-slate-600/70",
      descriptionColor: "text-slate-600/70"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_carousel.jpg",
      bottomDescription: "I used a special actylic compound that made the combs far stronger than the competition.",
      titleColor: "text-blue-300/70",
      descriptionColor: "text-blue-300/70"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_set.jpg",
      bottomDescription: "This is the complete set of sizes I was selling.",
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
                Through the years I've learned that integrity is one of the primary keys to success in business. Therefore, I am being open
                and honest about my achievements and intentions. That strategy may make some companies apprehensive about hiring someone who has the 
                capabilities I have, but I believe that although following the proper path will open fewer doors, it will welcome opportunities
                with far more potential for both myself and the companies that are as hungry as I am.
            </p>


            <p className="text-slate-500 lg:text-xl md:text-base max-w-3xl">
                These are the products I designed, manufactured, marketed, and sold on the e-commerce store I created. I shut it down due to inconsistent
                income, with the intention of starting a new company in 2030 after learning to engineer agentic electromechanical systems.
            </p>

            </div>
        </div>
        
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
    </div>
  );
}
