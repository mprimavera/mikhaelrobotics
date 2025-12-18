import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (

    
    <div className="relative w-full h-screen">

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
            <h1 className="max-w-full text-4xl sm:text-6xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-300">
              Michael Primavera
            </h1>
          </div>

            {/* Details */}

          <div className="flex flex-col items-center gap-6 text-center mt-10">
            <p className="max-w-full text-sm sm:text-lg leading-10 tracking-tight text-black dark:text-zinc-300">
              B.S. in Robotics Engineering, Worcester Polytechnic Institute, December, 2025
            </p>

            {/* <p className="max-w-full text-sm sm:text-lg leading-10 tracking-tight text-black dark:text-zinc-300">
              M.S. in Artificial Intelligence, Johns Hopkins University, starting May, 2026
            </p> */}
            
          </div>

          {/* Dropdown cover letter */}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
          <AccordionTrigger className="max-w-full justify-center text-sm sm:text-lg leading-10 tracking-tight text-black dark:text-zinc-300">
            Learn More
          </AccordionTrigger>
            <AccordionContent className="max-h-70 overflow-y-auto px-2 bg-black/50">
              <p className="font-light text-sm sm:text-base ">
                My journey in engineering began in my family’s basement workshop, where I learned to machine metal parts for a startup called Glidecam. What started as a high school job quickly evolved into a passion for building, improving, and automating systems.
              </p>

              <p className="mt-4 font-light text-sm sm:text-base">
                Over the years, I progressed from machining and deliveries to managing logistics and eventually bringing CNC production in-house—a move that significantly improved profitability and operational control. By the time I was thirty, I had helped grow the operation to include multiple CNC mills, bar-fed lathes, laser engravers, and 3D printers. Later, I launched my own company, AlphaOmega LLC, handling everything from product design and manufacturing to web development and customer support. This experience deepened my appreciation for full-stack engineering—from concept through production—and fueled my interest in robotics and intelligent systems.
              </p>

              <p className="mt-4 font-light text-sm sm:text-base">
                Today, I am two weeks away from officially receiving my B.S. in Robotics Engineering from Worcester Polytechnic Institute, with plans to pursue an online master’s degree in Artificial Intelligence at Johns Hopkins University. As I complete my education, I am seeking a role where I can contribute to innovative robotics projects, refine my technical expertise, and apply practical manufacturing insight to intelligent system design.
              </p>

              <p className="mt-4 font-light text-sm sm:text-base">
                I would welcome the opportunity to discuss how my hands-on experience, entrepreneurial background, and robotics skill set could add value to your organization. Thank you for your time and consideration.
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


