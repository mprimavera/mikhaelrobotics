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
import { Copyright } from "lucide-react";

export default function Resume() {
  const data = [
    {
      title: "Future: 2026",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 font-normal text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Applying for M.S. in Artificial Intelligence (online), Johns Hopkins University, starting May, 2026
          </p>
          <a href="https://ep.jhu.edu/programs/artificial-intelligence/"
            target="blank"
            className="mb-8 font-normal text-blue-500 hover:text-blue-400 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Artificial Intelligence Master's Program Online
          </a>
         
        </div>
      ),
    },
  

{
  title: "12/2025",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Built this portfolio from scratch
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            I ...
        </p>
      {/* </div> */}
    </div>
  ),
},


{
  title: "12/2025",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Robotics Engineer graduate from Worcester Polytechnic Institue with a 3.92/4.00 GPA
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            I ...
        </p>
      {/* </div> */}
    </div>
  ),
},


{
  title: "2022-2023",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Robotics: Field service engineering and system integration at Milara Inc.
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            I began working at Milara in their machine shop. Less than six months later I had been promoted to system integration on robotics
            sorters in the semiconductor industry. Three months later, I was promoted to field service engineering as a member of the software team.
            After Milara offered to pay my tuition to earn my degree, I applied to WPI and got accepted. I had to make a major life decision, return to
            college or stay at the job I had secured. I chose to earn the degree, and I have zero regret. 
        </p>
      {/* </div> */}
    </div>
  ),
},


{
  title: "2018-2022",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Founder: Owned and operated an e-commerce store
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Building off previous experience in logistics management, I ...
        </p>
      {/* </div> */}
    </div>
  ),
},

{
  title: "2018-2022",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Designed and manufactured custom products in CNC machines
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Utilizing my skills in manufacturing, and combining those with creativity and an intuitive understanding of market demand, I developed
            three simple products, all of which sold. It was an amazing experience to come up with an idea in my mind, then a few months after 
            meticulous planning for market delivery and profitability, I was holding in my hand a tangible version of a thumb screw design which
            had previously existed only within my mind.
        </p>
      {/* </div> */}
    </div>
  ),
},


{
  title: "11/2017",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Algorithmic Trading
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
          I began the eight-year journey towards algorithmic trading as a result of the spike in Bitcoin in November of 2017. It was my
          first time "investing", and it ultimately led to me taking five online courses, listening to over a dozen audiobooks, reading
          a few more books, then watching every microeconomic, macroeconomic, finance, capital markets, and accounting video on Khan Academy.
        </p>
        {/* <Card className="w-full  flex items-center justify-center"> */}
      <Card className="w-full relative flex flex-col md:flex-row items-center md:items-start gap-4 p-4 ">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Video on the left */}
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

        {/* Description on the right */}
        <CardHeader className="w-full md:w-1/2">
          <CardTitle>The first prototype for AlphaOmega™</CardTitle>
          <CardDescription>
            In the process of learning to invest, I had built an Ethereum mining rig for about $4,000 USD. At the time, they were
          selling on Etsy for $10,000 to $20,000. I had inadverntatnly created the first prototype that would lead to the launch of
          AlphaOmega™ in 2018.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* </div> */}
    </div>
  ),
},


{
  title: "10/2017",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Copyright on Mind: Part I of a trillogy
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
          In October of 2017 I had finished the final draft of part one on a trillogy that I wrote. I was determined to see it through to completion,
          and even though I never intended to become published, I hired an intellectual attourney to aid in securing my first piece of IP.
        </p>
        {/* <Card className="w-full  flex items-center justify-center"> */}

        <GridItem
          area="auto"
          icon={<Copyright className="h-6 w-6 text-center text-black dark:text-neutral-400" />}
          title={
            <a
              href="https://publicrecords.copyright.gov/detailed-record/voyager_29808827"
              target="blank"
              className="text-blue-500 text-center break-all sm:break-normal hover:text-blue-400">
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
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Logistics Manager at MetalProUSA Inc.
      </p>

      {/* Scrollable container */}
      {/* <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2"> */}
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
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
          <p className="mb-2 sm:mb-6 font-normal text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            CNC Machinist at MetalProUSA Inc.
          </p>
          <p 
            className="mb-2 font-normal text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
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
