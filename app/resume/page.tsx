'use client'

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GridItem } from "../components/grid_item";
import { Copyright, Github, Linkedin  } from "lucide-react";
import { GridItem2 } from "../components/grid_item_2";
import { IconBrandNextjs, IconBrandVscode } from "@tabler/icons-react";
import Image from "next/image";

export default function Resume() {
  const data = [
    {
      title: "Future: 2026",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 font-normal text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Applied for M.S. in Artificial Intelligence (online), starting May 2026
          </p>  
        </div>
      ),
    },

    {
      title: "12/2025",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Developed this React project as a portfolio
          </p>
          {/* Scrollable container */}
          {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                I custom-built this portfolio completely from scratch (no templates or tutorials). I used VS Code as my IDE, GitHub,
                Next.js with React-based routing, Tailwind CSS, Aceternity UI, Shadcn UI, Lucide, and ChatGPT.
            </p>

            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                I purchased a domain and will use Vercel to host the site. 
            </p>
          {/* </div> */}
          
          <div className="w-full">
            <div
              className="
                grid
                gap-5
                grid-cols-3
                max-w-xl
                mx-auto
                justify-items-stretch
              "
            >

              <GridItem2
                icon={<Github className="h-6 w-6" />}
                description="GitHub"
                link="https://github.com"
              />

              <GridItem2
                icon={<IconBrandNextjs className="h-6 w-6" />}
                description="Next.js"
                link="https://nextjs.org/"
              />

              <GridItem2
                icon={
                  <Image
                    src="/react.png"
                    alt="React logo"
                    width={24}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                  />
                }
                description="React"
                link="https://react.dev/"
              />

              <GridItem2
                icon={
                  <Image
                    src="/tailwindCSS.png"
                    alt="Tailwindcss logo"
                    width={24}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                  />
                }
                description="TailwindCSS"
                link="https://tailwindcss.com/"
              />

              <GridItem2
                icon={
                  <Image
                    src="/aceternityUI.png"
                    alt="Aceternity logo"
                    width={24}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                  />
                }
                description="Aceternity UI"
                link="https://ui.aceternity.com/"
              />

              <GridItem2
                icon={
                  <Image
                    src="/shadcn.png"
                    alt="Shadcn Logo"
                    width={24}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                  />
                }      
                description="Shadcn UI"
                link="https://ui.shadcn.com/"
              />

              <GridItem2
                icon={
                  <Image
                    src="/lucide1.png"
                    alt="Lucide logo"
                    width={24}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                  />
                } 
                description="Lucide"
                link="https://lucide.dev/"
              />

              <GridItem2
                icon={
                        <Image
                    src="/chatgpt1.png"
                    alt="ChatGPT logo"
                    width={24}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                  />
                } 
                description="ChatGPT"
                link="https://chatgpt.com/"
              />

              <GridItem2
                icon={
                        <Image
                    src="/vercel2.png"
                    alt="Vercel logo"
                    width={24}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                  />
                } 
                description="Vercel"
                link="https://vercel.com/home"
              />
            </div>
          </div>
            
        </div>
      ),
    },

    {
      title: "12/2025",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Graduated with a B.S. in Robotics Engineering from WPI with a 3.92 GPA
          </p>
          {/* Scrollable container */}
          {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                I graduated December 30, 2025, with High Distinction honors—the highest academic honor awarded by WPI.
            </p>
          {/* </div> */}
        </div>
      ),
    },

    {
      title: "2022-2023",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Robotics: Field service engineering and system integration at Milara Inc.
          </p>
          {/* Scrollable container */}
          <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                I began working at Milara in their machine shop. Less than six months later I had been promoted to system integration on robotic
                sorters in the semiconductor industry. Three months later, I was promoted to field service engineering as a member of the software team.
            </p>
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                After Milara offered to pay my tuition to earn my degree, I applied to WPI and was accepted with a substantial scholarship. I had to make
                a major life decision: return to college full-time or stay at the job I had secured. Now, I'm officially a robotics engineer.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "2018-2022",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Founder: Owned and operated an e-commerce store
          </p>
          {/* Scrollable container */}
          <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                Building on previous experience in logistics management, I decided to manufacture products and sell them directly to customers.
                I formed an LLC, dealing with everything from price modeling and product photography to web development and customer service.
            </p>
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                Ultimately, I strategically pivoted my focus toward strengthening my technical foundation.
            </p>

          </div>

        </div>
      ),
    },

    {
      title: "2018-2022",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Designed and manufactured custom products in CNC machines
          </p>
          {/* Scrollable container */}
          <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                Utilizing my skills in manufacturing, and combining those with creativity and an intuitive understanding of market demand, I developed
                three simple products, all of which sold.
            </p>
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                It was an amazing experience to come up with an idea in my mind, then a few months after meticulous planning for market delivery and
                profitability, I was holding in my hand a tangible version of a thumbscrew design which had previously existed only within my mind.
            </p>


          </div>
        </div>
      ),
    },

    {
      title: "11/2017",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Algorithmic Trading
          </p>

          {/* Scrollable container */}
          <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
            <p 
              className="mb-2 text-slate-500 sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
              I began an eight-year journey into algorithmic trading as a result of the spike in Bitcoin in November of 2017. It was my
              first time 'investing', and it ultimately led to me taking five online courses, listening to over a dozen audiobooks, reading
              a few more books, then watching every microeconomic, macroeconomic, finance, capital markets, and accounting video on Khan Academy.
            </p>
            </div>
        </div>
      ),
    },

    {
      title: "2008-2018",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Logistics Manager at MetalPro USA Inc.
          </p>

          {/* Scrollable container */}
          {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
              After convincing my boss to bring CNC production in-house, which substantially increased our profitability, I was eventually promoted
              to managing logistics. Profitability increased threefold once I assumed this position.
            </p>
          {/* </div> */}
        </div>
      ),
    },

    {
    title: "1998-2008",
    content: (
      <div>
        <p className="mb-2 sm:mb-6 font-normal text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
          CNC Machinist at MetalPro USA Inc.
        </p>
        <p 
          className="mb-2 font-normal text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
          I programmed and ran Epilog laser engravers, Hurco VM5i and VM10i mills, a Haas Mill, a Matsuura MAM72-70V Mill, a Fanuc
          Robodrill, and I operated bar-fed Mazak and Omniturn lathes. 
        </p>
        
      </div>
    ),
  },

  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      <div className="h-40 sm:h-60 md:h-80 lg:h-200 xl:h-[28rem]" />
    </div>
    
  );
}

