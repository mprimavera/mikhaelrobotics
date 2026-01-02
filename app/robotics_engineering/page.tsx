import { defaultOffset } from "motion";
import { Accordion } from "../components/accordion";
import { StickyBanner } from "@/components/ui/sticky-banner";

const MQPAccordion = [
  {
    title: "Mini CNC Mill",
    content: (
      <div className="space-y-4">
        <p>
            The MQP at WPI is a senior design project. I completed the following tasks:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed and implemented mechanical bed leveling</li>
          <li>Set up GitHub for remote sharing of SOLIDWORKS files among our team</li>
          <li>Performed calculations to ensure that the bearings along the linear rails could handle the torque from the spindle</li>
          <li>Discovered that the software "glitches" were actually the result of EMF from the VFD powering the spindle</li>
          <li>Developed a laser probe and safety system for the automatic tool changer</li>
          <li>Calibrated axes motors and drivers</li>
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
            <button className="px-4 py-2 bg-slate-800 text-blue-400 border-slate-500 rounded-2xl shadow transition
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
    { title: "Artificial Intelligence in Robotics",     
    content: (
      <div className="space-y-4">
        <p>
          The course was taught using Python. Topics covered were:
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
    defaultOpen: true,
  },
  { title: "RBE2001: Mechanical Applications", content: `
    Using SOLIDWORKS for design and FEA, gears were designed and implemented into a four-bar linkage. The objective was to lift an
    aluminum part with a weak motor attached to a Romi robot, then move the aluminum piece to a preset desired position using line
    following and wall-sensing sensors.`, },
  { title: "RBE2002: Sensing and Perception", content: `IMU, sonar, vision, and infrared sensors were used with C++ to mathematically
    blend feedback in software, enabling our Romi robots to navigate a field with ramps and communicate to open a door. PID code was
    written to enable constant speed and stopping on ramps at various angles` },
  { title: "RBE3001: Manipulation", content: `Using forward and inverse kinematics, vision sensors, and trajectory planning, our team of
    three wrote MATLAB code to detect, grasp, and sort balls according to their color.` },
  { title: "RBE3002: Navigation", content: `Using ROS on Linux, we mapped the maze with a LIDAR sensor. The robot was then manually
    moved and oriented itself on the map using the LIDAR and Kalman filtering.` },
  { title: "Industrial Robotics", content: `Our four-person team programmed an Arduino PLC, which controlled a system of industrial
    robots: a UR5 Universal Robot, an M-1iA Fanuc delta robot, two conveyor belts with laser break-beam sensors.` },
]

const CSAccordion = [
  { title: "Microcontroller Programming",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>MSP430 programming in Assembly and C</li>
          <li>Raspberry Pi programming in C and Python</li>
          <li>Pico CNC with grblHAL firmware programming in C (MQP Mini CNC Mill)</li>
          <li>PLC programming: Arduino PLC IDE</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
  { title: "Software Engineering", content: `On an eleven-person team, I built a full-stack web application. This course focused
    on the agile method, daily scrums, using modern libraries, and the PERN stack—PostgreSQL, Express, React, and Node.js. We used
    GitHub for version control and collaboration.` 
  },
  { title: "Linux OS", content: `I used the Linux operating system heavily in the robotics courses. I have experience with both
  the graphical and command line interfaces. When using Git, I prefer using Git Bash over GitHub Desktop.` 
  },
  { title: "C and C++", content: `I programmed in C and C++ for automation based on sensor feedback. Learning C after Python
    helped me understand how Python data types work under the hood.` 
  },
  { title: "Object-Oriented Programming in Python and Java", content: `Java was the language used in the Object-Oriented Programming
    course. Python and C++ were used in the robotics courses for creating data structures.` 
  },
  { title: "HTML and CSS", content: `For my Humanities Capstone, I took Writing for the Web. In this course, I built a fully-
    functional website starting with a blank text file. We did not use any libraries.` 
  },
  { title: "LaTeX", content: `In Robotics Ethics, our team of four was required to write numerous reports using LaTeX.` 
  },  
  { title: "Universal Robot and Fanuc", content: `In Industrial Robotics we programmed a UR5 Universal Robot and an M-1iA Fanuc delta
    robot.` 
  },  
  { title: "MATLAB", content: `MATLAB was required for numerous courses, including Controls, Manipulation, and Industrial Robotics. I
    also used MATLAB when taking Multivariable Calculus, Linear Algebra, and Circuit Analysis for solving problems ranging from vector
    fields to DC circuits.` 
  },
  { title: "G-Code", content: `I have professional experience altering G-Code from post processors. I also worked with G-Code on the
    MQP when calibrating the motor drivers.` 
  },
  
]

const electricalAccordion = [
  { title: "Embedded Systems", content: (`This course required using KiCad to come up with schematics for all circuits created.
    The calculations to ensure proper design of voltages and currents were done with MATLAB, and electrical simulations were done
    with MATLAB Simscape Electrical.`), 
    defaultOpen: true,},
  { title: "Communications Protocols", content: (
    <div className="space-y-4">
      <p>
        Communications protocols were used in numerous robotics courses and embedded systems. Covered protocols were:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>UART</li>
        <li>I2C</li>
        <li>SPI</li>
      </ul>
    </div>
  ),
  },
  { title: "Circuit Analysis", content: `This course primarily covered DC circuits, with some exposure to AC circuits. MATLAB was used
    for solving systems of equations that modeled the circuits. The node method was used heavily in this course.` 
  },
  { title: "Electromagnetism", content: `This calculus-based course covered the physics of electromagnetism. The lab associated
    with this course required the building and analysis of DC circuits.` 
  },

]

const mechanicalAccordion = [
  { title: "Statics", content: (`This course covered forces and moments acting on structures and mechanical systems in
    equilibrium. A heavy emphasis was placed on creating free-body diagrams to model the system, then solving the resulting 
    systems of equations.`), 
    defaultOpen: true,},
  { title: "Controls Engineering", content: `Controls was a required course for robotics majors and covered modeling of both closed- and
     open-loop systems. The Laplace transform and MATLAB were used in this course for creating steady-state systems. This course covered
     both mechanical and electrical systems.` 
  },
  { title: "Chemistry: Properties, bonding, and forces", content: `This calculus-based course covered the Bohr model of the atom, which uses
    probability to determine the location of electrons in corresponding shells. Lattice structures and their properties were covered, as
    well as photons and electromagnetic waves.` 
  },
  { title: "Newtonian Physics", content: `This calculus-based course covered the energy, momentum, and kinematics.` 
  },
  { title: "Modern Physics", content: `This calculus-based course covered special and general relativity, as well as quantum energy such
    as photons. The foundations of quantum mechanics were introduced as well.` 
  },
]

const toolsAccordion = [
  { title: "Engineering Software and Tools",     
    content: (
      <div className="space-y-4">
        <p>
            The engineering software I used included:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SOLIDWORKS CAD, Finite Element Analysis, and CAM</li>
          <li>Fusion360 CAD and CAM</li>
          <li>MATLAB for mathematical modeling, vision sensors, as well as mechanical and electrical system simulations</li>
          <li>Linux, GitHub, VSCode, WebStorm, and Arduino</li>
          <li>Oscilloscope, multimeter, and voltage supplies</li>
          <li>Basic soldering</li>
          <li>Strain gauges, tachometers, temperature sensors, electronic torque wrenches, and dial indicators</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
]

const mathematicsAccordion = [
  { title: "Math Courses", 
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Differential and Integral Calculus</li>
          <li>Multivariable Vector Calculus</li>
          <li>Probability Applications</li>
          <li>Discrete Math with Boolean algebra and set theory</li>
          <li>Linear Algebra</li>
          <li>Differential Equations</li>
          <li>Engineering Math (covered the application of advanced math in engineering)</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
]

const businessAccordion = [
  { title: "IQP: Interactive Qualifying Project", content: (`This course was a three-term project on a team of four people. Our task
    was to get an online store up and running, after gauging the market demand and deciding how best to implement the go-to-market
    strategy.` ),
    defaultOpen: true,
  },
  { title: "Entrepreneurship", content: `This course covered the basics of taking an engineering innovation to market. The course
    was based on the book, The Startup Playbook by David Kidder and Reid Hoffman.` 
  },
  { title: "Microeconomics", content: `This course covered the basics of microeconomics: demand, supply, and equilibrium price, as
    well as price elasticity and market types—such as perfectly competitive versus monopolies and those in between.` 
  },
  { title: "Khan Academy Economics", 
    content: (
      <div className="space-y-4">
        <p>
          I watched every video in Khan Academy's following Economics sections:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Macroeconomics</li>
          <li>Microeconomics</li>
          <li>Finance and Capital Markets</li>
          <li>Economics and Personal Finance</li>
        </ul>

                {/* Centered button */}
        <div className="flex justify-center">
          <a
            href="https://www.khanacademy.org/economics-finance-domain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-slate-800 text-blue-400 border-slate-500 rounded-2xl shadow transition
            hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Khan Academy Economics
            </button>
          </a>
        </div>
      </div>
    ),
  },

]

export default function Robotics_engineering() {
  return (

    <div className="">

      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
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

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Major Qualifying Project
          </p>
          <Accordion items={MQPAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Robotics Engineering
          </p>
          <Accordion items={RoboticsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Computer Science
          </p>
          <Accordion items={CSAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Electrical Engineering
          </p>
          <Accordion items={electricalAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mechanical Engineering
          </p>
          <Accordion items={mechanicalAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Engineering Software and Tools
          </p>
          <Accordion items={toolsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mathematics
          </p>
          <Accordion items={mathematicsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Business
          </p>
          <Accordion items={businessAccordion} />

        </div>
      </div>
    </div>

    );
}

