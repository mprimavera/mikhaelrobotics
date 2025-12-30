'use client'

import { useState, useRef } from "react";
type AccordionItem = {
  title: string
  content: React.ReactNode
  defaultOpen?: boolean
}

type AccordionProps = {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  // Track which item is open
  const [openIndex, setOpenIndex] = useState<number | null>(
    items.findIndex(item => item.defaultOpen) ?? null
  );

  return (
    <div className="mx-auto max-w-lg">
      <div className="space-y-0 border border-slate-400/50 rounded-lg overflow-hidden">
        {items.map((item, index) => {
          const contentRef = useRef<HTMLDivElement>(null);
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`group backdrop-blur-md px-3 py-1
                ${index === 0 ? "rounded-t-lg" : ""}
                ${index === items.length - 1 ? "rounded-b-lg" : ""}
              `}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-lg font-medium text-blue-500/85
                  hover:-translate-y-0.5 transition-all duration-300"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                {item.title}
                <div className="text-secondary-500">
                  {/* Plus/Minus icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`h-5 w-5 block ${isOpen ? "hidden" : "block"}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </summary>

              <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: isOpen
                    ? contentRef.current?.scrollHeight + "px"
                    : "0px",
                }}
              >
                <div className="px-6 pb-4 text-secondary-500">
                  {item.content}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
