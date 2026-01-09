import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Accordion } from "./components/accordion";

const learnMore = [
  { title: "Learn More", content: `As I complete my education, I am seeking a role where I can contribute to innovative projects
    and refine my technical expertise.` },
]


export default function Home() {
  return (
    <div className="relative w-full h-screen ">
      {/* Main content */}
      <div className="relative flex items-center justify-center font-sans w-full h-full
        bg-[url('/arm_chip.jpeg')]
        bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/70 pointer-events-none z-0
        [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]" />
        <main className="
          relative z-10
          flex flex-col items-center justify-center
          px-4 sm:px-16
          w-full max-w-3xl
          ">
          <div className="flex flex-col items-center gap-6 text-center">

            {/* Main Heading */}
            <h1 className="max-w-full text-4xl sm:text-6xl font-semibold leading-10 tracking-tight text-slate-400">
              Michael Primavera
            </h1>
          </div>

          {/* Details */}
          <div className="flex flex-col items-center gap-6 text-center mt-10">
            <p className="max-w-full text-sm font-semibold sm:text-lg leading-10 tracking-tight text-slate-400">
              B.S. in Robotics Engineering, Worcester Polytechnic Institute, December 2025
            </p>
            <p className="max-w-full text-sm font-semibold sm:text-lg leading-10 tracking-tight text-slate-400">
              Applying for M.S. in Artificial Intelligence, Johns Hopkins University, starting May 2026
            </p>
          </div>

          <Accordion items={learnMore} />

        </main>
      </div>
    </div>
  );
}


