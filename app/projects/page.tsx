"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function projects() {
  return (

    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-full">
          My Projects (more coming over the next few days...)
        </h2>
        <p className="text-slate-500 lg:text-xl md:text-base max-w-3xl">
          I’ve included videos showing some of the projects I’ve worked on to demonstrate the technical skills I’ve developed.
          This is not intended to be a comprehensive list. Additionally, while I was at Milara, I was not permitted to take
          photos or videos of the sorters I worked on. During my time there, I performed field service engineering as part
          of their software team at cleanroom semiconductor fabrication facilities.
        </p>
      </div>

      <div className="min-h-screen flex flex-wrap justify-center gap-x-16 gap-y-20 mt-10 px-25 lg:px-50">


      <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
          {/* YouTube video */}
          <div className="w-full aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/YAJ9Wzltu34?si=KOFma-CiZnBBG-z9"
              title="Industrial Robotics"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Automation line featuring a Fanuc M-1iA and UR5e, integrated with conveyors and sensors.
          </p>

          <p className="text-sm text-neutral-400">
            My primary responsibility was programming the central UR5e, after selecting it to control the system via the PLC.
            I handled the video editing as well.
          </p>

        </BackgroundGradient>
      </div>


      <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">

          {/* YouTube video */}
          <div className="w-full aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/EnIhbuE6zA0?si=p2Yk1_7nzTG5uk_B"
              title="Robot Vision"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Using MATLAB and vision sensors to locate, grab, and sort balls according to their colors.
          </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">

          <p className="text-sm text-neutral-400">
            On a team of three, we programmed the robot using MATLAB. We used the MATLAB Computer Vision Toolbox, and some libraries
            for powering the servo motors. Beyond that, all trajectory planning was written from scratch using both forward and inverse
            kinematics. (The video was not intended for a presentation, just for my own personal reflection.)
          </p>
            </div>

        </BackgroundGradient>
      </div>


      <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
          {/* YouTube video */}
          <div className="w-full aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/JtrBYZ2HA0A?si=AOZyXL8qBJvhRXvJ"
              title="Embedded Programming"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Embedded programming of proportional-derivative (PD) control in C.
          </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">

          <p className="text-sm text-neutral-400">
            Using Linux OS and the Pico SDK library, all code was written from scratch. This included the code for the display,
            as well as using the encoder to provide proportional and derivative control. I've used integral control for other projects,
            as well. (The video was not intended for a presentation, just for my own personal reflection.)
          </p>
            </div>

        </BackgroundGradient>
      </div>


      <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
          {/* YouTube video */}
          <div className="w-full aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/Cx7HpJapaZQ?si=XWw0iW-Nd3knbpQy"
              title="Senior Design Project"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Senior Design Project: Mini CNC Mill
          </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">

          <p className="text-sm text-neutral-400">
            This is the final presentation video for our eleven-student team's senior design project (MQP) at WPI. I narrated the video. It shows the vast
            amount of CAD I was responsible for (SOLIDWORKS), as well as MATLAB work and schematic creation using KiCad.
          </p>
            </div>

        </BackgroundGradient>
      </div>  
    </div>
  </div>
      
  );
}
