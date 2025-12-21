import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (

    
    <div className="relative w-full h-screen ">

      {/*Background Effect */}
      <WavyBackground
       blur={10}
       waveOpacity={0.15}
       colors={["#3DB8FF", "#3D58FF", "#3DFFE4", "#96CBFD", "#FAC3FE"]}
       waveWidth={60}
       className="min-h-screen">

      {/* Main content */}
      <div className="relative flex items-center justify-center font-sans z-0 w-full h-full">
        <main className="flex flex-col items-center justify-center px-4 sm:px-16 w-full max-w-3xl">
          <div className="flex flex-col items-center gap-6 text-center">


            {/* Main Heading */}
            <h1 className="max-w-full text-4xl sm:text-6xl font-semibold leading-10 tracking-tight text-zinc-300">
              Michael Primavera
            </h1>
          </div>

            {/* Details */}

          <div className="flex flex-col items-center gap-6 text-center mt-10">
            <p className="max-w-full text-sm sm:text-lg leading-10 tracking-tight text-zinc-300">
              B.S. in Robotics Engineering, Worcester Polytechnic Institute, December, 2025
            </p>

            {/* <p className="max-w-full text-sm sm:text-lg leading-10 tracking-tight text-zinc-300">
              M.S. in Artificial Intelligence, Johns Hopkins University, starting May, 2026
            </p> */}
            
          </div>

          {/* Dropdown cover letter */}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
          <AccordionTrigger className="max-w-full justify-center text-sm sm:text-lg leading-10 tracking-tight text-zinc-300">
            Learn More
          </AccordionTrigger>
            <AccordionContent className="max-h-50 overflow-y-auto px-2 bg-black/50">
              <p className="font-light text-slate-300 text-sm sm:text-base ">
                My journey in engineering began with machining metal parts for a startup called Glidecam when I was in high school. Over the years, I progressed
                to managing logistics.
              </p>

              <p className="mt-4 font-light text-slate-300 text-sm sm:text-base">
                Later, I launched my own company, AlphaOmega LLC: handling everything from product design and manufacturing to web development and
                 customer support.
              </p>

              <p className="mt-4 font-light text-slate-300 text-sm sm:text-base">
                In December of 2025, I graduated with a B.S. in Robotics Engineering from Worcester Polytechnic Institute, and I plan to pursue
                an online master’s degree in Artificial Intelligence at Johns Hopkins University. 
              </p>

              <p className="mt-4 font-light text-slate-300 text-sm sm:text-base">
                As I complete my education, I am seeking a role where I can contribute to innovative robotics projects, refine my technical expertise, and apply practical manufacturing insight to intelligent system design.
              </p>
            
            </AccordionContent>
            </AccordionItem>
          </Accordion>

        </main>
      </div>
      </WavyBackground>
    </div>
  );
}


