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
            During my experience in our family business, I saw firsthand the importance of intellectual property
            in engineering and manufacturing.
          </p>

          <p className="mb-6">
            I secured a copyright for Part I of a trilogy I wrote and also applied for a trademark, gaining practical
            experience navigating the United States Patent and Trademark Office process and collaborating with IP attorneys.
          </p>

          <p className="mb-6">
            These experiences highlight my understanding of IP as both a creator and engineer, demonstrating initiative
            and attention to legal and technical detail.
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
              target="_blank" rel="noopener noreferrer"
              className="text-blue-400 text-center  sm:break-normal">
              Copyright for Part I: Mind
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
              target="_blank" rel="noopener noreferrer"
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
