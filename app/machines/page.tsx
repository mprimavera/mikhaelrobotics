
"use client";

import React from "react";
import Carousel2 from "@/components/ui/carousel_2";
import { Accordion } from "../components/accordion";

export default function Machines() {
  const slides = [

    /* Lathes */
    {
      title: "Mazak Quick Turn Nexus 100-II M",
      src: "/mazak1.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Mazak Quick Turn Nexus 100-II M", 
              content: 
              <p>
                This Mazak has live tooling, an automatic bar feeder for three-foot lengths, a parts catcher, and a conveyor for
                automatic chip removal.
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "OmniTurn GT-75",
      src: "/omniTurn1.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "OmniTurn GT-75", 
              content: 
              <p>
                This OmniTurn lathe has gang tooling, an automatic bar feeder for two-foot lengths, and a parts catcher.
              </p> 
            },
          ]}
        />
      ),
    },

    /* Mills */
    {
      title: "Hurco VM10i Mill",
      src: "/hurcoVM10.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Hurco VM10i Mill", 
              content: 
              <p>
                This is a vertical mill with a rotary axis option (1 of 3).
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Hurco VM5i Mill",
      src: "/hurcoVM5i1.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Hurco VM5i Mill", 
              content: 
              <p>
                This is a vertical mill (2 of 3).
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Hurco VM5i Mill",
      src: "/hurcoVM5i2.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Hurco VM5i Mill", 
              content: 
              <p>
                This is a vertical mill (3 of 3).
              </p> 
            },
          ]}
        />
      ),
    },

    /* Lasers */
    {
      title: "Epilog Mini Laser",
      src: "/laser1.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Epilog Mini Laser", 
              content: 
              <p>
                This is an Epilog Mini, 50-watt CO₂ laser with a rotary add-on (1 of 2).
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Epilog Mini Laser",
      src: "/laser2.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Epilog Mini Laser", 
              content: 
              <p>
                This is an Epilog Mini, 50-watt CO₂ laser with a rotary add-on (2 of 2).
              </p> 
            },
          ]}
        />
      ),
    },
  
    /* Welding */
    {
      title: "Miller SyncroWave 250 DX",
      src: "/welder1.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Miller SyncroWave 250 DX", 
              content: 
              <p>
                This is a TIG welder for metals.
              </p> 
            },
          ]}
        />
      ),
    },

    /* Forming */
    {
      title: "Atek Bantam Press Brake",
      src: "/brake.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Atek Bantam Press Brake", 
              content: 
              <p>
                This is a press brake for bending metals.
              </p> 
            },
          ]}
        />
      ),
    },

    /* Deburring */
    {
      title: "Abrasive Tumbler",
      src: "/tumbler1.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Abrasive Tumbler", 
              content: 
              <p>
                This is a large tumbler for deburring metals (1 of 2).
              </p> 
            },
          ]}
        />
      ),
    },
    {
      title: "Abrasive Tumbler",
      src: "/tumbler2.jpg",
      accordion: (
        <Accordion
          items={[
            { title: "Abrasive Tumbler", 
              content: 
              <p>
                This is a small tumbler for deburring metals (2 of 2).
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
          Machines
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-6">
            In addition to my quantitative trading and research experience, I have built a technical workshop
            that reflects my hands-on problem-solving skills and operational expertise. This workshop demonstrates
            my ability to design, build, and execute complex systems—a skill set directly applicable to engineering,
            automation, and R&D roles.
          </p>
        </div>
      </div>       
    <div className="flex flex-col items-center py-12 px-4">
      <Carousel2 slides={slides} />
    </div>
    </div>
  );
}
