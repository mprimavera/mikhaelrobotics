"use client";
import Image from "next/image";
import { GridItem } from "./components/grid_item";

import { ReactNode } from "react";

// Helper component for sections
function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-4">
      <h1 className="max-w-full text-4xl sm:text-6xl font-semibold leading-10 tracking-tight text-slate-400 pb-10 pt-4">
        Michael Primavera
      </h1>
      <h3 className="text-center text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl pb-4 font-semibold leading-10 tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-16">
        {children}
      </div>
    </section>
  );
}

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
          <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 backdrop-blur-sm bg-black/35 min-w-[410px] text-center">
            <ProjectSection title="Robotics Engineer & Software Developer">
              <div className="w-full max-w-7xl mx-auto px-4">
                <p className="text-base sm:text-xl text-slate-500 pt-4 mb-6">
                  This site showcases my production-quality software engineering work through real projects, with additional
                  quantitative systems and product development examples available for deeper review.
                </p>
              </div>
            </ProjectSection>
          </div>
          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={null}
              title={
                <a
                  href="/resume"
                  className="text-center break-all sm:break-normal"
                >
                  Experience Timeline
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
