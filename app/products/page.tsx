"use client";

import React from "react";
import Carousel2 from "@/components/ui/carousel_2";
import { Accordion } from "../components/accordion";

// MQP Accordion content with button
const MQPAccordion = [
  {
    title: "Π: Digital Contact Cards",
    content: (
      <div className="space-y-4 pb-2">
        <p>
          This was my first software-driven product. I developed a custom Python script to generate QR codes optimized for smartphone cameras.
        </p>


        {/* Centered button */}
        <div className="flex justify-center mb-2">
          <a
            href="https://youtu.be/SDK4FM9hwQk?si=jGM9AAmJBe8BWb_u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-slate-800 text-blue-400 border-slate-500 rounded-2xl shadow transition
              hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Watch Video
            </button>
          </a>
        </div>
      </div>
    ),
  },
];

export default function Products() {
  const slides = [
    /* Π: Digital Contact Cards */
    {
      title: "Π: Digital Contact Cards",
      src: "/pi_ad.jpg",
      accordion: <Accordion items={MQPAccordion} />,
    },
    {
      title: "Π: Digital Contact Cards",
      src: "/pi_moreColors.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Π: Digital Contact Cards", 
              content: 
              <p>
                These are more color options. The vCard information embedded in the QR code is outdated (if scanned today).
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Π: Digital Contact Cards",
      src: "/pi_scanHere.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Π: Digital Contact Cards", 
              content: 
              <p>
                This image was created to show customers how the contact card works. The vCard information embedded in the QR code
                is outdated (if scanned today).
              </p> 
            },
          ]}
        />
      ),
    },

    /* ζ: Custom Thumb Screws */
    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_rwb.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "ζ: Custom Thumb Screws", 
              content: 
              <p>
                This became my top-selling product.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_size.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "ζ: Custom Thumb Screws", 
              content: 
              <p>
                This photo was created to give customers a sense of the size.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_green.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "ζ: Custom Thumb Screws", 
              content: 
              <p>
                Other colors: green anodize.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_orange.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "ζ: Custom Thumb Screws", 
              content: 
              <p>
                Other colors: orange anodize.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_clearCoat.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "ζ: Custom Thumb Screws", 
              content: 
              <p>
                Other colors: clear-coat anodize.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "ζ: Custom Thumb Screws",
      src: "/zeta_ad.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "ζ: Custom Thumb Screws", 
              content: 
              <p>
                This CAD drawing was created to show customers the precise dimensions.
              </p> 
            },
          ]}
        />
      ),
    },

    /* Ξ: Acrylic Cable Combs */
    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_carousel.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Ξ: Acrylic Cable Combs", 
              content: 
              <p>
                I used a specialized acrylic compound, making these combs significantly stronger than competing products.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_24pin.png",
      accordion: (
        <Accordion
          items={[
            { title: "Ξ: Acrylic Cable Combs", 
              content: 
              <p>
                24-pin cable comb
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_5pinSata.png",
      accordion: (
        <Accordion
          items={[
            { title: "Ξ: Acrylic Cable Combs", 
              content: 
              <p>
                5-pin SATA cable comb
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_set.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Ξ: Acrylic Cable Combs", 
              content: 
              <p>
                This is the full set of sizes I offered.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Ξ: Acrylic Cable Combs",
      src: "/xi_eaglePitcher.png",
      accordion: (
        <Accordion
          items={[
            { title: "Ξ: Acrylic Cable Combs", 
              content: 
              <p>
                This CAD drawing was created to show customers the precise dimensions. I developed this comb for a company that
                was using them in satellites (I did not request permission to use their name here).
              </p> 
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Products
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="">
            These products showcase my experience in end-to-end technical expertise, from the research phase
            all the way through distribution. Each product required navigating IP, engineering, and marketing
            complexities. I honed these skills through years of real-world experience, complemented by formal
            training in Robotics Engineering—and I am now expanding them through an M.S. in Artificial Intelligence.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 px-4">
        <Carousel2 slides={slides} />
      </div>
    </div>
  );
}
