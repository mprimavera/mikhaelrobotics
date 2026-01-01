"use client";

import Carousel from "@/components/ui/carousel";

export default function Products() {
  const slideData = [

    // First slide now uses a dummy image + button instead of embedded video
    {

      /* Π: Digital Contact Cards */

      title: "Π: Digital Contact Cards",
      src: "/pi_ad.jpg", // <-- replace this with your actual image
      buttonText: "Watch Video",
      buttonAction: () => window.open("https://youtu.be/SDK4FM9hwQk?si=jGM9AAmJBe8BWb_u", "_blank"),
      bottomDescription: "This was my first software-driven product. I developed a custom Python script to generate QR codes optimized for smartphone cameras.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "Π: Digital Contact Cards",
      src: "/pi_moreColors.jpg",
      bottomDescription: `These are more color options. The vCard information embedded in the QR code is outdated (if scanned with a phone
      today).`,
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
      },

    {
      title: "Π: Digital Contact Cards",
      src: "/pi_scanHere.jpg",
      bottomDescription: `This image was created to show customers how the contact card works. The vCard information embedded in the
      QR code is outdated (if scanned with a phone today).`,
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "Π: Digital Contact Cards",
      src: "/pi_front.jpg",
      bottomDescription: "This was an example template of the front for customers during checkout.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "Π: Digital Contact Cards",
      src: "/pi_back.jpg",
      bottomDescription: "This was an example template of the back for customers during checkout. The vCard information embedded in the QR code is outdated (if you scan this image with a phone now).",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },



    /* ζ: Custom Thumb Screws */

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_rwb.jpg",
      bottomDescription: "This became my top-selling product.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_size.jpg",
      bottomDescription: "This photo was created to give customers a sense of the size.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_green.jpg",
      bottomDescription: "Other colors: green anodize.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },


    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_purple.jpg",
      bottomDescription: "Other colors: purple anodize.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_orange.jpg",
      bottomDescription: "Other colors: orange anodize.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_clearCoat.jpg",
      bottomDescription: "Other colors: clear-coat anodize.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_ad.jpg",
      bottomDescription: "This CAD drawing was created to show customers the precise dimensions.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },



    /* Ξ: Acrylic Cable Combs */

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_carousel.jpg",
      bottomDescription: "I used a specialized acrylic compound, making these combs significantly stronger than competing products.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_24pin.png",
      bottomDescription: "24-pin cable comb",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_5pinSata.png",
      bottomDescription: "5-pin SATA cable comb",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_set.jpg",
      bottomDescription: "This is the full set of sizes I offered.",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },

    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_eaglePitcher.png",
      bottomDescription: "This CAD drawing was created to show customers the precise dimensions. I developed this comb for a company that was using them in satellites (I did not request permission to use their name here).",
      titleColor: "text-slate-400",
      descriptionColor: "text-slate-500"
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Products
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="">
            These are the products I designed, manufactured, marketed, and sold through my e-commerce store. I strategically shifted my
            focus toward strengthening my technical foundation, earning a B.S. in Robotics Engineering and now pursuing an M.S. in
            Artificial Intelligence.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
