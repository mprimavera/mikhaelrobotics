"use client";

import Carousel from "@/components/ui/carousel";

export default function Machines() {
  const slideData = [

    /* Lathes */
    {
      title: "Mazak Quick Turn Nexus 100-II M",
      src: "/mazak1.jpg", // <-- replace this with your actual image
      bottomDescription: "This Mazak has live tooling, an automatic bar feeder for three-foot lengths, a parts catcher, and conveyor for automatic chip removal.",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    {
      title: "OmniTurn GT-75",
      src: "/omniTurn1.jpg", // <-- replace this with your actual image
      bottomDescription: "This OmniTurn lathe has gang tooling, an automatic bar feeder for two-foot lengths, and a parts catcher.",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    /* Mills */
    {
      title: "Hurco VM10i Mill",
      src: "/hurcoVM10.jpg", // <-- replace this with your actual image
      bottomDescription: "This is a verticle mill with a rotary axis option. (1 of 3)",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    {
      title: "Hurco VM5i Mill",
      src: "/hurcoVM5i1.jpg", // <-- replace this with your actual image
      bottomDescription: "This is a verticle mill (2 of 3).",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

        {
      title: "Hurco VM5i Mill",
      src: "/hurcoVM5i2.jpg", // <-- replace this with your actual image
      bottomDescription: "This is a verticle mill (3 of 3)).",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    /* Lasers */
    {
      title: "Epilog Mini Laser",
      src: "/laser1.jpg", // <-- replace this with your actual image
      bottomDescription: "This is an Epilog Mini, 50-watt C02 laser with a rotary add-on. (1 of 2)",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    {
      title: "Epilog Mini Laser",
      src: "/laser2.jpg", // <-- replace this with your actual image
      bottomDescription: "This is an Epilog Mini, 50-watt C02 laser with a rotary add-on. (2 of 2)",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    /* Welder */
    {
      title: "Miller SyncroWave 250 DX",
      src: "/welder1.jpg", // <-- replace this with your actual image
      bottomDescription: "This is a TIG welder for metals",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    /* Brake */
    {
      title: "Atek Bantam Press Brake",
      src: "/brake.jpg", // <-- replace this with your actual image
      bottomDescription: "This is a press brake for bending metals",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    /* Tumblers */
    {
      title: "Abrasive Tumbler",
      src: "/tumbler1.jpg", // <-- replace this with your actual image
      bottomDescription: "This is a large tumbler for deburring metals (1 of 2)",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },

    {
      title: "Abrasive Tumbler",
      src: "/tumbler2.jpg", // <-- replace this with your actual image
      bottomDescription: "This is a small tumbler for deburring metals (2 of 2)",
      titleColor: "text-pink-200/85",
      descriptionColor: "text-pink-200/85"
    },


  ];

  return (

    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-full">
              Machines
          </h2>
          <p className="text-slate-500 lg:text-xl md:text-base max-w-3xl">
            Over the years, I’ve learned that integrity is a primary key to success in business; therefore, I remain open about the
            entrepreneurial experience, network, and resources I’ve built. While this approach may result in fewer opportunities, it
            ensures alignment with a company seeking my exact skill set, character, and drive—creating an optimal outcome for both parties.
          </p>
          <p className="text-slate-500 lg:text-xl md:text-base max-w-3xl">
            These are the machines I currently have in my shop.
          </p>
      </div>
          
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
