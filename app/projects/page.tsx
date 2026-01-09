"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

// Helper component for sections
function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <h3 className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-20">
        {children}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          My Projects
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed mb-12">
          <p>
            I’ve included videos showcasing some of the projects I’ve worked on to demonstrate the technical skills I’ve developed. This
            is not a comprehensive list. At Milara, I was not permitted to take photos or videos of the sorters I worked on. During my
            time there, I performed field service engineering as part of their software team at semiconductor cleanroom fabrication
            facilities.
          </p>
        </div>

        {/* ===== Robotics ===== */}
        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 bg-black/70 min-w-[410px]">
          <ProjectSection title="Robotics">
            {/* Industrial Robotics */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/YAJ9Wzltu34?si=KOFma-CiZnBBG-z9"
                    title="Industrial Robotics"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Automation line featuring a Fanuc M-1iA and UR5e, integrated with conveyors and sensors.
                </p>
                <p className="text-sm text-slate-500">
                  My primary responsibility was programming the central UR5e after selecting it to control the system via the PLC. I also handled the video editing.
                </p>
              </BackgroundGradient>
            </div>
            {/* RBE3001 Vision */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/EnIhbuE6zA0?si=p2Yk1_7nzTG5uk_B"
                    title="Robot Vision"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Using MATLAB and vision sensors to locate, grasp, and sort balls by color.
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    As part of a three-person team, we programmed the robot using the MATLAB Computer Vision Toolbox and
                    libraries to control the servo motors. All trajectory planning was written from scratch using both forward
                    and inverse kinematics.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          </ProjectSection>
        </div>

        {/* ===== End-to-End Engineering Project: Mini CNC Mill ===== */}
        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 bg-black/70">
          <ProjectSection title="End-to-End Engineering Project: Mini CNC Mill">
            {/* MQP mini CNC mill */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Cx7HpJapaZQ?si=XWw0iW-Nd3knbpQy"
                    title="Major Qualifying Project"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Major Qualifying Project (MQP): mini CNC mill
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This is the final presentation video for our eleven-member Major Qualifying Project (MQP) team at WPI. I
                    narrated the video and demonstrated my CAD (SOLIDWORKS), MATLAB, and KiCad schematic work.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill: presentation of finalized R&D phase */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/4MgPYenIZXw?si=HAi-hV11wRllbVWy"
                    title="MQP mini CNC mill: presentation of finalized R&D phase"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: presentation of finalized R&D phase
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video is a presentation of the finalized R&D phase for the mechanical bed leveling I designed for the MQP as a
                    senior at WPI. This video illustrates the real-world application of engineering principles and procedures I was
                    responsible for.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill bed leveling torque test */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dUWLDC4rL10?si=-Ljyafnw-oXDsngT"
                    title="MQP mini CNC mill bed leveling torque test"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: successful bed leveling torque test
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video shows successful testing of the helicoil’s ability to withstand the torque calculated to fasten the mini
                    CNC mill’s work plate to the linear rails and ball screw. The test was performed on scrap materials before machining the
                    actual work plate, keeping the project within budget.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill bed leveling implementation */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/TDziKYPmKuU?si=am7WkGicJQjHP1yd"
                    title="MQP mini CNC mill bed leveling helicoil torque testing"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: successful bed leveling implementation
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video shows the mechanical bed leveling I engineered, successfully integrated into a mini CNC mill.
                    The bed could be leveled within ±127 µm across the length and width of the work plate, which held the vice
                    for machining parts.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill: presentation of FMEA analysis for a tool probing concept */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/-mwcSxoPo5E?si=tWpsAsEATLx_ic8H"
                    title="MQP mini CNC mill: presentation of finalized R&D phase"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: presentation of FMEA analysis for a tool probing concept
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video is a presentation of the FMEA analysis I did for a tool probing device I proposed to the MQP team.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill: presentation of space restrictions for add-ons */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/gQxDrpg8AZk?si=MbQkz4IWz_AYlgvJ"
                    title="MQP mini CNC mill: presentation of finalized R&D phase"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: presentation of space restrictions for add-ons
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    The points I made in this video and the FMEA video ultimately led our team to change the design from a conductive
                    tool probe to a laser probe.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill stepper motor and driver calibration */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/_zweEVm8UzY?si=8ROtlGtbpqZbNMk3"
                    title="MQP mini CNC mill e-stop"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: stepper motor and driver calibration
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video shows the successful calibration of the stepper motor's driver. The movement is smooth and controlled.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill e-stop */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/QSF5KapfTn4?si=a8W2FWM4IfbEctrs"
                    title="MQP mini CNC mill e-stop"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: successful e-stop testing
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video shows the successful testing of the e-stop system developed for the mini CNC mill. Our team designed the e-stop to be normally closed, cutting power to the motor drivers while preserving CNC computer status and control. (The rattling sound in the background is the room heater.)
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* Additive manufacturing prototyping */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/wOfjqY_zv5k?si=st4e9MHhEL03FJ1Z"
                    title="Additive Manufacturing Prototyping"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Additive manufacturing prototyping of a new ergonomic thumb screw design
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video demonstrates my experience prototyping with additive manufacturing. It is more cost-effective to develop
                    ideas in CAD, then produce parts on a 3D printer, before subtractive manufacturing.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          </ProjectSection>
        </div>

        {/* ===== Embedded Systems ===== */}
          <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 bg-black/70">
            <ProjectSection title="Embedded Systems">
              {/* Embedded systems PD control*/}
              <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                  <div className="w-full aspect-video mb-4">
                    <iframe
                      loading="lazy"
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/JtrBYZ2HA0A?si=AOZyXL8qBJvhRXvJ"
                      title="Embedded Programming"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                    Embedded programming of proportional-derivative (PD) control in C
                  </p>
                  <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                    <p className="text-sm text-slate-500">
                      Using Linux and the Pico SDK, all code was written from scratch, including the display code and encoder-based
                      proportional-derivative control. Integral control was implemented in other projects.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
              {/* Adjustable Duty Cycle */}
              <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                  <div className="w-full aspect-video mb-4">
                    <iframe
                      loading="lazy"
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/4sNkf1GcZYo?si=Q8oHnvzp2FLXDE7U"
                      title="Adjustable Duty Cycle"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                    Embedded programming in C: adjustable duty cycle
                  </p>
                  <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                    <p className="text-sm text-slate-500">
                      I used a potentiometer with an ADC module to adjust the duty cycle output of a PWM pin on a Raspberry Pi Pico 2 W microcontroller. The code was written in C using a Linux environment. An oscilloscope verified correct operation within ±2.5%.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
              {/* ADC Voltmeter */}
              <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                  <div className="w-full aspect-video mb-4">
                    <iframe
                      loading="lazy"
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/NoOMwVs4Xgc?si=h2jmUgXBTvQxhXA_"
                      title="ADC Voltmeter"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                    Embedded programming in C: ADC voltmeter
                  </p>
                  <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                    <p className="text-sm text-slate-500">
                      I created a voltmeter using a Raspberry Pi Pico 2 W microcontroller, potentiometer, and 7-segment 4-digit LED display.
                      Apart from the SDK library, all code was written from scratch. The display ran on a timer interrupt, and output was
                      based on the ADC reading of the potentiometer's wiper pin.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
          </ProjectSection>
        </div>

        {/* ===== Entrepreneurial & Independent Projects ===== */}
        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 bg-black/70">
          <ProjectSection title="Entrepreneurial & Independent Projects">
            {/* Ethereum mining rig */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/iZbmoNKK79Q?si=ySQ3apqZFEGSVdLW"
                    title="AlphaOmega LLC First Prototype: Cryptocurrency Mining Rig"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  AlphaOmega LLC's first prototype: cryptocurrency mining rig
                </p>

                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    After the Bitcoin price spike in late 2017, I built an Ethereum mining rig. At the time, rigs sold for
                    $10,000–$20,000 online, but I built mine for ~$1,200. This resulted in a significant potential profit.
                  </p>
                  <p className="text-sm text-slate-500">
                    This marked the beginning of AlphaOmega LLC.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* Dynamic Price Modeling */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/ImnPgaXRYiE?si=qbOXJHOjimXK0Olx"
                    title="Dynamic Price Modeling"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Dynamic price modeling using MATLAB and multivariable calculus
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500 pb-2">
                    I used the fixed and variable costs to develop a formula where the intersection of a level plane with a 3D curve
                    yielded the price at which to sell the variable quantity to achieve the desired constant profit rate.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* The Essence of Mathematics: Simplicity */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto mb-8">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/N_LkVzzLo98?si=wY2LWoX80kVWySSI"
                    title="The Essence of Mathematics: Simplicity"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  The Essence of Mathematics: Simplicity
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500 pb-2">
                    I created this video to share the greatest takeaway I had from learning math and physics.
                  </p>
                  <p className="text-sm text-slate-500">
                    "I made a handful of other tutorials as well. Those videos received over 185,000 views, but it wasn’t enough
                    to justify dedicating the time, which I decided was better spent furthering my own knowledge.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
}
