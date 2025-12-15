import Image from "next/image";
import { MatrixRain } from "./components/matrix_rain";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Matrix Rain Background */}
      <MatrixRain className="absolute top-0 left-0 w-full h-full -z-10" />

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
              MikhaelRobotics.AI
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6 text-center mt-10">
            <p className="max-w-full text-sm sm:text-xl leading-10 tracking-tight text-black dark:text-zinc-300">
              Intelligent robots, from concept to mass production.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
