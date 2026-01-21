'use client'

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
import { GraduationCap, Github, Linkedin  } from "lucide-react";
import { GridItem2 } from "../components/grid_item_2";
import { IconBrandNextjs, IconBrandVscode } from "@tabler/icons-react";
import Image from "next/image";
import PDFModal from "../components/PDFModal";
import React, { useState } from "react";



export default function Resume() {
    const [open, setOpen] = useState(false);

  const data = [
        {
      title: "11/2017 - Current",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Quantitative Research and Algorithmic Trading Systems
          </p>
            <ul 
              className="list-disc pl-5 space-y-1 mb-2 text-slate-500 sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                <li> Designed and implemented systematic trading algorithms across multiple commodities, using statistical modeling,
                  probability theory, and historical datasets to evaluate strategy performance. 
                </li>
                <li>
                  Developed end-to-end workflows including data acquisition, signal generation, backtesting, and parameter optimization,
                  with disciplined tracking of performance metrics and risk. 
                </li>
                <li>
                  Translated research insights into executable code, supporting iterative refinement of models under real-world market conditions. 
                </li>
            </ul>
          </div>
      ),
    },
    {
      title: "1/2026",
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
            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                I custom-built this portfolio completely from scratch (no templates or tutorials). I used VS Code as my IDE, GitHub,
                Next.js with React-based routing, Tailwind CSS, Aceternity UI, Shadcn UI, Lucide, and ChatGPT.
            </p>

            <p 
              className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
                I purchased a domain and will use Vercel to host the site. 
            </p>          
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
          <p 
            className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
              I graduated December 30, 2025, with High Distinction honors—the highest academic honor awarded by WPI.
          </p>
          <div className="space-y-9">
          {/* View Diploma */}
            <div className="w-full max-w-md mx-auto">
              <GridItem
                area="auto"
                icon={
                  <GraduationCap className="h-6 w-6 text-neutral-400" />
                }
                title={
                  <button
                    onClick={() => setOpen(true)}
                    className="text-blue-400 hover:underline text-center"
                  >
                    View Diploma (PDF)
                  </button>
                }
                description={null}
              />
            </div>
          </div>
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
          <ul 
          className="list-disc pl-5 space-y-1 mb-2 text-slate-500 sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            <li> 
              Collaborated with software, electrical, and mechanical engineering teams to debug, calibrate, validate, and commission
              robotic sorting and handling systems deployed in semiconductor manufacturing environments. 
            </li>
            <li>
              Promoted twice within one year based on technical performance. 
            </li>
            <li>
              Authored documentation of technical procedures used for training new technicians. 
            </li>
          </ul>
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
          <ul 
          className="list-disc pl-5 space-y-1 mb-2 text-slate-500 sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            <li> 
              Designed, manufactured, and sold custom CNC-machined products through a self-developed e-commerce platform.
            </li>
            <li>
              Managed CAD/CAM workflows and CNC programming, marketing strategy, supplier logistics, production processes, quality
              controls, and end-to-end customer support. 
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "2008-2018",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Logistics Manager / CNC Machinist at MetalPro USA Inc.
          </p>
          <ul 
          className="list-disc pl-5 space-y-1 mb-2 text-slate-500 sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            <li> 
              Led logistics, inventory control, production scheduling, and workflow optimization.
            </li>
            <li>
              Programmed and operated CNC mills, lathes, laser engravers, and multi-axis machining centers.
            </li>
          </ul>
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
      <div className="h-64 sm:h-64 md:h-80 lg:h-180 xl:h-[28rem]" />

          <PDFModal
            isOpen={open}
            onClose={() => setOpen(false)}
            pdfUrl="/WPI_Diploma.pdf"
            title="Official Digital WPI Robotics Engineering Diploma"
          />
    </div>
  );
}
