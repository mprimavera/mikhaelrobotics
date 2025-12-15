import Image from "next/image";
import { MatrixRain } from "./components/matrix_rain";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Matrix Rain Background */}
      <WavyBackground
       blur={10}
       waveOpacity={0.3}
       colors={["#3DB8FF", "#3D58FF", "#3DFFE4", "#96CBFD", "#FAC3FE"]}
       waveWidth={60}
       className="max-w-4xl mx-auto pb-40">

      {/* Main content */}
      <div className="relative flex items-center justify-center font-sans z-0 w-full h-full">
        <main className="flex flex-col items-center justify-center px-4 sm:px-16 w-full max-w-3xl h-full">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
{/*             <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div> */}

            {/* Main Heading */}
            <h1 className="max-w-full text-4xl sm:text-6xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-300">
              Michael Primavera
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6 text-center mt-10">
            <p className="max-w-full text-sm sm:text-xl leading-10 tracking-tight text-black dark:text-zinc-300">
              B.S. in Robotics Engineering, Worcester Polytechnic Institute
              M.S. in Artificial Intelligence, Johns Hopkins University, starting May 2026
            </p>
          </div>
        </main>
      </div>
      </WavyBackground>
    </div>
  );
}
