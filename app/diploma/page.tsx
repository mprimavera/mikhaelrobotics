"use client";

import { useState } from "react";
import { GridItem } from "../components/grid_item";
import { GraduationCap, University } from "lucide-react";
import PDFModal from "../components/PDFModal";

export default function Diploma() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black/0">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Diploma
        </h2>

        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-6">
            This page provides an official digital copy of my Robotics Engineering diploma from WPI.
          </p>

          <p>
            I graduated with High Distinction, the highest academic honor awarded by WPI. A reference link is provided below the diploma.
          </p>
        </div>
      </div>

      <div className="space-y-9">
        {/* View Diploma */}
        <div className="w-full max-w-md mx-auto">
          <GridItem
            area="auto"
            icon={
              <GraduationCap className="h-6 w-6 text-neutral-400" />
            }
            title={
              <button
                onClick={() => setOpen(true)}
                className="text-blue-400 hover:underline text-center"
              >
                View Diploma (PDF)
              </button>
            }
            description={null}
          />
        </div>

        {/* Honors Reference */}
        <div className="w-full max-w-md mx-auto">
          <GridItem
            area="auto"
            icon={
              <University className="h-6 w-6 text-neutral-400" />
            }
            title={
              <a
                href="https://wpi.cleancatalog.net/graduation-with-honors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-center hover:underline"
              >
                Graduation with Honors
              </a>
            }
            description={null}
          />
        </div>
      </div>

      <PDFModal
        isOpen={open}
        onClose={() => setOpen(false)}
        pdfUrl="/WPI_Diploma.pdf"
        title="WPI Robotics Engineering Diploma"
      />
    </div>
  );
}
