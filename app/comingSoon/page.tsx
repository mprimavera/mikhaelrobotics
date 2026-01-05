"use client";

import React from "react";
import Carousel2 from "@/components/ui/carousel_2";
import { Accordion } from "../components/accordion";

// MQP Accordion content with button
const MQPAccordion = [
  {
    title: "Π: Digital Contact Cards",
    content: (
      <div className="space-y-4">
        <p>
          This was my first software-driven product. I developed a custom Python script to generate QR codes optimized for smartphone cameras.
        </p>


        {/* Centered button */}
        <div className="flex justify-center">
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

export default function CarouselTestPage() {
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
                These are more color options. The vCard information embedded in the QR code is outdated (if scanned with a phone today).
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
                is outdated (if scanned with a phone today).
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Π: Digital Contact Cards",
      src: "/pi_front.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Π: Digital Contact Cards", 
              content: 
              <p>
                This was an example template of the front for customers during checkout.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Π: Digital Contact Cards",
      src: "/pi_back.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Π: Digital Contact Cards", 
              content: 
              <p>
                This was an example template of the back for customers during checkout. The vCard information embedded in the QR
                code is outdated (if you scan this image with a phone now).
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
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <Carousel2 slides={slides} />
    </div>
  );
}
