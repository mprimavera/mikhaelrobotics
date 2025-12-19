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
import { Copyright, Github, Linkedin,  } from "lucide-react";
import { GridItem2 } from "../components/grid_item_2";
import { IconBrandNextjs, IconBrandVscode } from "@tabler/icons-react";
import Image from "next/image";

export default function Resume() {
  const data = [
    {
      title: "Future: 2026",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 font-normal text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Applying for M.S. in Artificial Intelligence (online), Johns Hopkins University, starting May 2026
          </p>
          <a href="https://ep.jhu.edu/programs/artificial-intelligence/"
            target="_blank"  rel="noopener noreferrer"
            className="mb-8 font-normal text-blue-500 hover:text-blue-400  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Artificial Intelligence Master's Program Online
          </a>
         
        </div>
      ),
    },
  

{
  title: "12/2025",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Developed this React project as a portfolio
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            I custom built this portfolio completely from scratch (no templates or tutorials). I used GitHub, VSCode, NEXT.JS with React and
             route handling, TailwindCSS, Aceternity UI, ShadCN, Lucide, and ChatGPT.
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
            description="NEXT.JS"
            link="https://nextjs.org/"
          />

          <GridItem2
            icon={
              <Image
                src="/react.png"
                alt="React logo"
                width={24}
                height={24}
                className="object-contain"
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
                className="object-contain"
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
                className="object-contain"
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
                className="object-contain"
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
                className="object-contain"
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
                className="object-contain"
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
                className="object-contain"
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
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Graduated with a B.S. in Robotics Engineering from WPI with a 3.92 GPA
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            I will be receiving my diploma in early January, 2026. I officially finished my courses on 12/12/2025.
        </p>
      {/* </div> */}
    </div>
  ),
},


{
  title: "2022-2023",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
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
            After Milara offered to pay my tuition to earn my degree, I applied to WPI and got accepted. I had to make a major life decision, return to
            college or stay at the job I had secured. It was one of the best decisions I've ever made.
        </p>
        
      </div>
    </div>
  ),
},


{
  title: "2018-2022",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Founder: Owned and operated an e-commerce store
      </p>

      {/* Scrollable container */}
      <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
        <p 
          className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Building off previous experience in logistics management, I decided to manufacture products and sell them direct to customers.
            I formed an LLC, and dealt with everything from developing price modeling, to product photos and web development, to customer service
            and setting up automated shipping nexuses in each state.
        </p>

        <p 
          className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Although I did make sales, the income wasn't steady enough to pursue it further.
        </p>


      </div>
             
      <Card className="w-full relative flex flex-col md:flex-row items-center md:items-start gap-4 p-4 ">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <CardContent className="w-full md:w-1/2 flex justify-center">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/ImnPgaXRYiE?si=rXmw1jVXKugv35bx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

        </CardContent>

        <CardHeader className="w-full md:w-1/2">
          <CardTitle>I developed dynamic price modeling using multivariable calculus and MATLAB</CardTitle>
          <CardDescription>
          I learned through real-life experience what determines whether a company survives: coming up with a mathematical
          model of a proper go-to-market strategy for profitability.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
},

{
  title: "2018-2022",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
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
            profitability, I was holding in my hand a tangible version of a thumb screw design which had previously existed only within my mind.
        </p>


      </div>
    </div>
  ),
},


{
  title: "11/2017",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Algorithmic Trading
      </p>

      {/* Scrollable container */}
      <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
        <p 
          className="mb-2 text-slate-500 sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
          I began the eight-year journey towards algorithmic trading as a result of the spike in Bitcoin in November of 2017. It was my
          first time "investing", and it ultimately led to me taking five online courses, listening to over a dozen audiobooks, reading
          a few more books, then watching every microeconomic, macroeconomic, finance, capital markets, and accounting video on Khan Academy.
        </p>
        </div>

      <Card className="w-full relative flex flex-col md:flex-row items-center md:items-start gap-4 p-4 ">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <CardContent className="w-full md:w-1/2 flex justify-center">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/iZbmoNKK79Q?si=LcMVxB0FPoK9FB9I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </CardContent>

        <CardHeader className="w-full md:w-1/2">
          <CardTitle>The first prototype for AlphaOmega LLC</CardTitle>
          <CardDescription>
          In the process of learning to invest, I had built an Ethereum mining rig for about $4,000 USD. At the time, they were
          selling on Etsy for $10,000 to $20,000. I had inadvertently created the first prototype that would lead to the launch of
          AlphaOmega LLC in 2018.
          </CardDescription>
        </CardHeader>
      </Card>


    </div>
  ),
},


{
  title: "10/2017",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Copyright on Mind: Part I of a trilogy
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
          In October of 2017 I had finished the final draft of part one on a trilogy that I wrote. I was determined to see it through to completion,
          and even though I never intended to become published, I hired an intellectual attorney to aid in securing my first piece of IP.
        </p>

        <GridItem
          area="auto"
          icon={<Copyright className="h-6 w-6 text-center text-black dark:text-neutral-400" />}
          title={
            <a
              href="https://publicrecords.copyright.gov/detailed-record/voyager_29808827"
              target="_blank"  rel="noopener noreferrer"
              className="text-blue-500 text-center  sm:break-normal hover:text-blue-400">
              Copyright for Mind
            </a>
          }
          description={null}
        />

    </div>
  ),
},


{
  title: "2008-2018",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Logistics Manager at MetalProUSA Inc.
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
          After convincing my boss to bring CNC production in-house, which substantially increased our profitability, I was eventually promoted
           to managing logistics. Profitability increased by three fold once I was put in this position.
        </p>
      {/* </div> */}
    </div>
  ),
},


      {
      title: "1998-2008",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 font-normal text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            CNC Machinist at MetalProUSA Inc.
          </p>
          <p 
            className="mb-2 font-normal text-slate-500  sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            I programmed and ran Epilog laser engravers, Hurco VM5i and VM10i mills, a Hass Mill, a Matsura MAM72-70V Mill, a Fanuc
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

