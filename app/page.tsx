import Image from "next/image";
import { MatrixRain } from "./components/matrix_rain";
import { WavyBackground } from "@/components/ui/wavy-background";

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
            <p className="max-w-full text-sm sm:text-xl leading-10 tracking-tight text-black dark:text-zinc-300">
              B.S. in Robotics Engineering, Worcester Polytechnic Institute
            </p>

            <p className="max-w-full text-sm sm:text-xl leading-10 tracking-tight text-black dark:text-zinc-300">
              M.S. in Artificial Intelligence, Johns Hopkins University, starting May 2026
            </p>
          </div>

            {/* Dropdown cover letter */}

          
        </main>
      </div>
      </WavyBackground>
    </div>
  );
}
