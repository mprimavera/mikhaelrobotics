import Image from "next/image";
import { GridItem } from "./components/grid_item";
const learnMore = [
  { title: "Learn More", content: `As I complete my education, I am seeking a role where I can contribute to innovative projects
    and refine my technical expertise.` },
]


export default function Home() {
  return (
    <div className="relative w-full h-screen ">
      {/* Main content */}
      <div className="relative flex items-center justify-center font-sans w-full h-full
        bg-[url('/cover.png')]
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
          <div className="flex flex-col items-center gap-6 text-center mt-10 mb-10">
            <p className="max-w-full text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-slate-400">
              Robotics Engineer & Quantitative Developer
            </p>
          </div>



          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={null}
              title={
                <a
                  href="/trading"
                  className="text-center break-all sm:break-normal"
                >
                  Learn More
                </a>
              }
              description={null}
            />
          </div>

        </main>
      </div>
    </div>
  );
}
