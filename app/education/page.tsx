import { defaultOffset } from "motion";
import { Accordion } from "../components/accordion";
import { StickyBanner } from "@/components/ui/sticky-banner";


const CSAccordion = [

  { title: "Object-Oriented Programming in Python, C++, and Java", content: (`Python and C++ were used extensively in robotics coursework
    to implement custom data structures and program control based on sensor feedback, while Java was the language for the Object-Oriented
    Programming course.`),
    defaultOpen: true,
  },
  { title: "MATLAB", content: `MATLAB was required for numerous courses, including Controls, Manipulation, and Industrial Robotics. I also chose
    to use MATLAB in Multivariable Calculus, Linear Algebra, and Circuit Analysis to solve problems ranging from vector fields to DC circuits.` 
  },
  { title: "Software Engineering", content: `On an eleven-person team, I built a full-stack web application. This course focused
    on the agile method, daily scrums, modern libraries, and the PERN stack—PostgreSQL, Express, React, and Node.js. We used
    GitHub for version control and collaboration.`
  },
  { title: "thinkScript", content: `Developed and deployed trading strategies in thinkScript, translating research insights into actionable, testable models.`
  },
  { title: "C and C++", content: `I programmed in C and C++ for automation based on sensor feedback. This experience strengthened my
    understanding of low-level memory management and data representation—and how this knowledge pertains to higher-level languages such as Python.` 
  },
  { title: "Linux OS", content: `I used Linux extensively throughout the robotics curriculum. I have experience with both
  the graphical and command-line interfaces. For version control workflows, I primarily use Git via the command-line interface (Git Bash).` 
  },
  { title: "Version Control and Collaboration", content: `Used GitHub (graphical and command-line), VSCode, WebStorm, and Arduino to
    ensure professional development workflows and collaboration.`
  },
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
  },
  {
    title: "Assembly",
    content: (
      <div className="space-y-4 pb-2">
        <p>
          I took an online embedded systems course alongside the course I was enrolled in at WPI; it was taught by Professor Brock LaMeres, Ph.D.
          The course included programming an MSP430 with about a dozen programs using the Assembly language.
        </p>
        {/* Centered button */}
        <div className="flex justify-center mt-2 mb-2">
          <a
            href="https://youtube.com/playlist?list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&si=DCxNK0uc0eMlfmHg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-slate-800 text-blue-400 border-slate-500 rounded-2xl shadow transition
            hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Course Link
            </button>
          </a>
        </div>
      </div>
      
    ),
    defaultOpen: true,
  },
  {
    title: "WPI Practicum: Writing for the Web (HTML and CSS)",
    content: (
      <div className="space-y-4 pb-2">
        <p>
          My humanities depth component was writing. For the Humanities and Arts Practicum requirement, I completed Writing for the Web. The
          project involved developing a fully functional website using only HTML and CSS, with an emphasis on content optimized for web delivery.
        </p>
        {/* Centered button */}
        <div className="flex justify-center mt-2 mb-2">
          <a
            href="https://wpi.cleancatalog.net/humanities-arts/hu-3910"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-slate-800 text-blue-400 border-slate-500 rounded-2xl shadow transition
            hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              More Information
            </button>
          </a>
        </div>
      </div>
    ),
  },
  { title: "LaTeX", content: `In Robotics Ethics, our team of four was required to write numerous reports using LaTeX.` 
  },  
  { title: "Universal Robots and FANUC", content: `In Industrial Robotics, we programmed a UR5 Universal Robots arm and an M-1iA FANUC delta
    robot.` 
  },
  { title: "G-Code", content: `I have professional experience altering G-Code from post-processors. I also worked with G-Code on the
    MQP when calibrating the motor drivers.` 
  },
]

const mathematicsAccordion = [
  { title: "Math Courses", 
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Probability Applications</li>
          <li>Discrete Math with Boolean algebra and set theory</li>
          <li>Multivariable Calculus</li>
          <li>Differential Equations</li>
          <li>Linear Algebra</li>
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
          I watched every video in the following Khan Academy economics sections:
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

const RoboticsAccordion = [
    { title: "Artificial Intelligence in Robotics",     
    content: (
      <div className="space-y-4">
        <p>
          The course was taught using Python and covered the following topics:
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
    Using SOLIDWORKS for CAD and FEA, gears were designed and integrated into a four-bar linkage. The objective was to lift an aluminum
    part using a weak motor attached to a Romi robot, then move the part to a preset position using line-following and wall-sensing sensors.`
  },
  { title: "RBE2002: Sensing and Perception", content: `IMU, sonar, vision, and infrared sensors were used with C++ to mathematically
    blend feedback in software, enabling our Romi robots to navigate a field with ramps and communicate to open a door. PID code was
    written to enable constant speed control and stopping on ramps at various angles.`
  },
  { title: "RBE3001: Manipulation", content: `Using forward and inverse kinematics, vision sensors, and trajectory planning, our team of
    three wrote MATLAB code to detect, grasp, and sort balls according to their color.`
  },
  { title: "RBE3002: Navigation", content: `Using ROS on Linux, we mapped the maze with a LiDAR sensor. The robot was then manually
    moved and oriented itself on the map using LiDAR and Kalman filtering.`
  },
  { title: "Industrial Robotics", content: `Our four-person team programmed an Arduino PLC, which controlled a system of industrial
    robots (a UR5 Universal Robots arm and an M-1iA FANUC delta robot), as well as two conveyor belts.`
  },
]

const electricalAccordion = [
  { title: "Communications Protocols", content: (
    <div className="space-y-4">
      <p>
        Communication protocols were applied extensively in robotics and embedded systems coursework.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>UART</li>
        <li>I2C</li>
        <li>SPI</li>
      </ul>
    </div>
  ),
  defaultOpen: true,
  },
  { title: "Embedded Systems", content: (`This course required the use of KiCad to develop schematics for all circuits.
    The calculations to ensure proper design of voltages and currents were done with MATLAB, and electrical simulations were done
    with MATLAB Simscape Electrical.`),
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
     open-loop systems. The Laplace transform and MATLAB were used in this course for analyzing steady-state system behavior. This course covered
     both mechanical and electrical systems.` 
  },
  { title: "Chemistry: Properties, Bonding, and Forces", content: `This calculus-based course covered the Bohr model of the atom, which uses
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
          The engineering software and tools I used included:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SOLIDWORKS CAD, Finite Element Analysis, and CAM</li>
          <li>Fusion 360 CAD and CAM</li>
          <li>MATLAB for mathematical modeling, vision sensors, as well as mechanical and electrical system simulations</li>
          <li>Oscilloscopes, multimeters, and voltage supplies</li>
          <li>Basic soldering</li>
          <li>Strain gauges, tachometers, temperature sensors, electronic torque wrenches, and dial indicators</li>
          <li>Affinity Designer and Affinity Photo (graphic design)</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
]

const MQPAccordion = [
  {
    title: "Mini CNC Mill",
    content: (
      <div className="space-y-4 pb-2">
        <p>
          The Major Qualifying Project (MQP) at WPI is a senior design requirement. My key contributions included:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed and implemented mechanical bed leveling</li>
          <li>Established a GitHub-based workflow for version control and remote collaboration on SOLIDWORKS files</li>
          <li>Performed load and torque calculations to verify bearing capacity along the linear rails</li>
          <li>Discovered that the software "glitches" noticed by students were actually the result of electromagnetic interference (EMI)
            from the VFD powering the spindle</li>
          <li>Developed a laser probe and safety system for the automatic tool changer</li>
          <li>Calibrated axis motors and drivers</li>
          <li>Created new fixturing for the work area</li>
          <li>Contributed significantly to ten of the fourteen sections of the MQP final report</li>
        </ul>

        {/* Centered button */}
        <div className="flex justify-center mt-2 mb-2">
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

export default function Education() {
  return (

    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Education
        </h2>
        
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-6">
            I earned a Bachelor of Science in Robotics Engineering from Worcester Polytechnic Institute in December of 2025.
            The program is ABET-accredited. Because this degree is more specialized and less widely offered than typical computer,
            mechanical, or electrical engineering degrees, I created this page to provide additional detail.
          </p>
          <p className="mb-24">
            The following is a list of the relevant courses I took that pertain to the fields of Robotics Engineering and Business.
          </p>
        </div>
        {/* Accordions */}
        <div className="space-y-12">

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Computer Science
          </p>
          <Accordion items={CSAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mathematics
          </p>
          <Accordion items={mathematicsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Business
          </p>
          <Accordion items={businessAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Robotics Engineering
          </p>
          <Accordion items={RoboticsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Electrical Engineering
          </p>
          <Accordion items={electricalAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mechanical Engineering
          </p>
          <Accordion items={mechanicalAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Engineering Software and Tools
          </p>
          <Accordion items={toolsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Major Qualifying Project
          </p>
          <Accordion items={MQPAccordion} />

        </div>
      </div>
    </div>

    );
}

