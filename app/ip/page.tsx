"use client";

import { GridItem } from "../components/grid_item";
import { GridItem2 } from "../components/grid_item_2";
import { Copyright } from "lucide-react";
import Image from "next/image";


export default function Ip() {
  return (
    <div className="bg-black/0">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Intellectual Property
        </h2>

        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-6">
            After our family business handled manufacturing and engineering for a single company for nearly 20 years,
            the owners decided to move production to China. The silver lining to the situation is that I experienced firsthand
            the importance of IP.
          </p>

          <p className="mb-6">
            As time progressed, I ended up hiring an IP attorney to secure a copyright for part one of a trilogy I wrote. Later, I
            learned how to file for trademarks. I applied for "AlphaOmega" in the computer hardware industry but was denied because
            another company, Alpha Omega Solutions, held a trademark in a similar industry. I hired an attorney to dispute the United
            States Patent and Trademark Office’s decision, and ultimately did not win.
          </p>

          <p className="mb-6">
            As someone who understands the importance of IP both as an engineer and as an employer, I now work with an IP attorney
            whenever I need to sign a contract.
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
              className="text-blue-400 text-center  sm:break-normal">
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
          icon={null}
          title={
            <a
              href="https://tsdr.uspto.gov/#caseNumber=88075231&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch"
              target="_blank"  rel="noopener noreferrer"
              className="text-blue-400 text-center  sm:break-normal">
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
