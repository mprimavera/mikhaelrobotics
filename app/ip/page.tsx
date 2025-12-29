"use client";

import { GridItem } from "../components/grid_item";
import { GridItem2 } from "../components/grid_item_2";
import { Copyright } from "lucide-react";
import Image from "next/image";


export default function Ip() {
  return (
    <div className="bg-black/0">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-white">
          Intellectual Property
        </h2>

        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-6">
            After our family business handled manufacturing and engineering for one company for nearly 20 years, the owners decided to move production to China. Our machine shop was left empty. Reality hit as hard and cold as the metals we manufacture: the bottom line drives modern business.
          </p>

          <p className="mb-6">
            We were left with nothing because we allowed the company we worked with to secure all the IP, trusting they would remain loyal. After consulting lawyers, I realized it is imperative for a company’s survival to own its IP.
          </p>

          <p className="mb-6">
            After hiring an IP attorney to secure a copyright for part one of a trilogy I wrote, I learned how to apply for trademarks. I applied for “AlphaOmega” in the computer industry but was denied because another company, Alpha Omega Solutions, which made automotive software, already held the trademark. I hired an attorney to dispute the United States Patent and Trademark Office’s decision, but I lost.
          </p>

          <p className="mb-6">
            I now work with IP attorneys whenever I need to sign a contract. I understand the importance of IP both from my perspective as an employee and from that of the employer.
          </p>
        </div>
      </div>



      

    <div className="space-y-9">

      {/* Copyright */}
      <div className="w-full max-w-md mx-auto">
        <GridItem
          area="auto"
          icon={<Copyright className="h-6 w-6 text-center text-neutral-400" />}
          title={
            <a
              href="https://publicrecords.copyright.gov/detailed-record/voyager_29808827"
              target="_blank"  rel="noopener noreferrer"
              className="text-blue-500 text-center  sm:break-normal hover:text-blue-400">
              Copyright for Mind
            </a>
          }
          description={null}
        />
      </div>

      {/* Trademark Dispute */}
      <div className="w-full max-w-md mx-auto">
        <GridItem
          area="auto"
          icon={<img src="/registered_tm.png" alt="My Icon" className="w-6 h-6" />}
          title={
            <a
              href="https://tsdr.uspto.gov/#caseNumber=88075231&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch"
              target="_blank"  rel="noopener noreferrer"
              className="text-blue-500 text-center  sm:break-normal hover:text-blue-400">
              AlphaOmega Trademark Dispute
            </a>
          }
          description={null}
        />
      </div>

    </div>
  </div>

  );
}
