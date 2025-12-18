import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Resume() {
  const data = [
    {
      title: "Future: 2026",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 font-normal text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Applying for M.S. in Artificial Intelligence (online), Johns Hopkins University, starting May, 2026
          </p>
          <a href="https://ep.jhu.edu/programs/artificial-intelligence/"
            target="blank"
            className="mb-8 font-normal text-blue-500 hover:text-blue-400 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Artificial Intelligence Master's Program Online
          </a>
         
        </div>
      ),
    },
  
{
  title: "2008-2018",
  content: (
    <div>
      <p className="mb-2 sm:mb-6 text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        Logistics Manager at MetalProUSA
      </p>

      {/* Scrollable container */}
      <div className="mb-8 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
        <p 
          className="mb-2 text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
          After convincing my boss to bring CNC production in-house, which substantially increased our profitability, I was eventually promoted to managing logistics. This involved streamlining deliveries, reorganizing the warehouse layout, and tracking parts in process both on paper and electronically. I also adjusted order frequency and quantities to reduce expenses, implemented digital scales to speed up inventory tracking, and held meetings with warehouse management to ensure all workers were aligned with the changes as they occurred.
        </p>
      </div>
    </div>
  ),
},


      {
      title: "1998-2008",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 font-normal text-slate-300 break-all sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            CNC Machinist at MetalProUSA
          </p>
          <p 
            className="mb-2 font-normal text-slate-500 break-all sm:break-normal max-w-full sm:text-2xl leading-10 tracking-tight">
            Programmed and ran Epilog laser engravers, Hurco VM5 and VM10 mills, a Fanuc Robodrill, a Matsura MAM72-70V Mill, and operated a Mazak lathe. 
          </p>
         
          <div className="h-40 sm:h-60 md:h-80 lg:h-6 xl:h-[0rem]" />
        </div>
      ),
    },


  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
    
  );
}
