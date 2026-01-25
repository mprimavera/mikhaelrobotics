'use client'

import { Timeline } from "@/components/ui/timeline";
import { GridItem } from "../components/grid_item";
import { GraduationCap, Github, Workflow } from "lucide-react";
import { GridItem2 } from "../components/grid_item_2";
import { IconBrandNextjs } from "@tabler/icons-react";
import Image from "next/image";
import PDFModal from "../components/PDFModal";
import React, { useState } from "react";



export default function Resume() {
    const [open, setOpen] = useState(false);

  const data = [
        {
      title: "11/2017 - Present",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Quantitative Research and Algorithmic Trading Systems
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li> 
              Self-Directed
            </li>
          </ul>
          {/* Link to Quant Development */}
          <div className="w-full max-w-md mx-auto mt-4 sm:mt-4 md:mt-4 lg:mt-8">
            <GridItem
              icon={<Workflow className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="/trading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center break-all sm:break-normal"
                >
                  My Research-to-Production Workflow
                </a>
              }
              description={null}
            />
          </div>
        </div>
      ),
    },
    {
      title: "1/2026",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Johns Hopkins University — MS in Artificial Intelligence
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li>
              Admitted under provisional status
            </li>
            <li>
              Anticipated program start January 2027
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "12/2025",
      content: (
      <div>
        <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
          text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
          Worcester Polytechnic Institute — BS in Robotics Engineering
        </p>
          <div className="space-y-9">
          {/* View Diploma */}
            <div className="w-full max-w-md mx-auto mt-4 sm:mt-4 md:mt-8 lg:mt-12 mb-2 sm:mb-2 md:mb-4 lg:mb-4">
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
      title: "12/2025",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Developed this React project as a portfolio
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li>
              Custom-built this portfolio entirely from scratch (no templates or tutorials).
            </li>
            <li>
              Built using VS Code, GitHub, Next.js with React-based routing, Tailwind CSS, Aceternity UI, Shadcn UI, Lucide, and ChatGPT
            </li>
            <li>
              Deployed and hosted the site on Vercel
            </li>
          </ul>      
          <div className="w-full mt-6">
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
                    alt="Tailwind CSS logo"
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
      title: "2022-2023",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Field Service Engineer – Software Team
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li> 
              Company: Milara Inc.
            </li>
            <li>
              Location: Milford, MA
            </li>
          </ul>
      </div>
      ),
    },

    {
      title: "2018-2022",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Founder – Owned and operated an e-commerce store
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li> 
              Company: AlphaOmega LLC
            </li>
            <li>
              Location: Plymouth, MA
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "1998-2018",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Logistics Manager / CNC Machinist
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li> 
              Company: MetalProUSA Inc.
            </li>
            <li>
              Location: Plymouth, MA
            </li>
          </ul>
        </div>
      ),
    },



  ];
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-12 text-slate-400 font-semibold">
          Experience Timeline
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed mb-12">
          <p>
            Key professional, academic, and technical milestones, including the creation of this interactive portfolio.
          </p>
        </div>
  
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      <div className="h-60 sm:h-56 md:h-94 xl:h-[26rem]" />

          <PDFModal
            isOpen={open}
            onClose={() => setOpen(false)}
            pdfUrl="/WPI_Diploma.pdf"
            title="Official Digital WPI Robotics Engineering Diploma"
          />
    </div>
    </div>
  );
}
