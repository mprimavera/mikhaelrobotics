import { Accordion } from "../components/accordion";
import { StickyBanner } from "@/components/ui/sticky-banner";

const MQPAccordion = [
  {
    title: "Mini CNC Mill",
    content: (
      <div className="space-y-4">
        <p>
            The MQP at WPI is a senior design project. My responsibilities were:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Design and implement mechanical bed leveling</li>
          <li>Set up GitHub for sharing of SOLIDWORKS files amongst our team</li>
          <li>Calculations to ensure bearings could handle the torque along the linear rails</li>
          <li>Discovered that the software "glitches" were actually the result of EMF from the VFD powering the spindle</li>
          <li>Developed a laser probe and safety system for the automatic tool changer</li>
          <li>Calibration of axes motors and drivers</li>
          <li>Created new fixturing for the work area</li>
          <li>Contributed significantly to ten of the fourteen sections of the MQP final report</li>
        </ul>

        {/* Centered button */}
        <div className="flex justify-center">
          <a
            href="https://digital.wpi.edu/concern/parent/h128nk052/file_sets/gf06g7088"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-black/50 border-2 text-blue-500 border-slate-700 rounded-2xl shadow transition
            hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              View Full Report
            </button>
          </a>
        </div>
      </div>
    ),
    defaultOpen: true,
  },
];



const RoboticsAccordion = [
  { title: "RBE2001: Mechanical Applications", content: "Using SOLIDWORKS for design and FEA, gears were designed and implemented into a four-bar linkage. The object was to lift an aluminum part with a weak motor attached to a Romi robot, then move the aluminum piece to a preset desired position using line following and wall-sensing sensors." },
  { title: "RBE2002: Sensing and Perception", content: "Used IMU, sonar, vision, and infrared sensors to mathematically blend feedback in software, enabling our Romi robots to navigate a field with ramps and communicate to open a door. PID code was written to enable constant speed and stopping on ramps at various angles" },
  { title: "RBE3001: Manipulation", content: "Using forward and inverse kinematics, vision sensors, and trajectory planning, code was written in MATLAB to detect, grasp, then sort balls according to their color." },
  { title: "RBE3002: Navigation", content: "Using ROS for Linux, a LIDAR sensor was used to first map out the maze the Romi robot was placed in. Then the robot was manually moved, and it oriented itself in the map it created using the LIDAR and Kalman filtering." },
  { title: "Artificial Intelligence in Robotics",     
    content: (
      <div className="space-y-4">
        <p>
          Topics covered were:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>A* search</li>
          <li>Dijkstra's algorithm</li>
          <li>Adversarial search</li>
          <li>Markov decision processes</li>
          <li>Reinforcement learning</li>
          <li>Neural networks</li>
          <li>Deep learning</li>
          <li>AlphaZero</li>
        </ul>
      </div>
    ),
  },
  { title: "Industrial Robotics", content: "Coming 12/31/2025" },
]

const CSAccordion = [
  { title: "Coming 12/31/2025", content: "" },

]

const electricalAccordion = [
  { title: "Coming 12/31/2025", content: "" },

]

const mechanicalAccordion = [
  { title: "Coming 12/31/2025", content: "" },

]

const toolsAccordion = [
  { title: "Coming 12/31/2025", content: "" },

]

const mathematicsAccordion = [
  { title: "Coming 12/31/2025", content: "" },

]


export default function Robotics_engineering() {
  return (

    <div className="">

      <StickyBanner>
        <p className="mx-0 max-w-[90%] text-pink-200 drop-shadow-md backdrop-blur-sm">
          This portfolio is currently being developed. Expect updates to be completed by 12/31/2025...{" "}
        </p>
      </StickyBanner>


      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-white">
          Robotics Engineering
        </h2>
        
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-6">
            I earned a Bachelor of Science in Robotics Engineering from Worcester Polytechnic Institute in December of 2025.
            The program is ABET-accredited. Because this degree is less common than a typical mechanical or electrical
            engineering degree, I created this page to provide more details.
          </p>
          <p className="mb-24">
            The following is a list of the relevant courses I took that pertain to the field of Robotics Engineering.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-12">

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Major Qualifying Project
          </p>
          <Accordion items={MQPAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Robotics Engineering
          </p>
          <Accordion items={RoboticsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Computer Science
          </p>
          <Accordion items={CSAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Electrical Engineering
          </p>
          <Accordion items={electricalAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mechanical Engineering
          </p>
          <Accordion items={mechanicalAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Engineering Software and Tools
          </p>
          <Accordion items={toolsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mathematics
          </p>
          <Accordion items={mathematicsAccordion} />

        </div>
      </div>
    </div>

    );
}

