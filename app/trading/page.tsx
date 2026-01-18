"use client";

import { ReactNode } from "react";

// Helper component for sections
function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-20">
      <h3 className="text-center text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-20">
        {children}
      </div>
    </section>
  );
}

export default function Trading() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Trading
        </h2>

        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed mb-12">
          <p className="mb-6">
            My formal training is in Robotics Engineering, with strong foundations in systems design, applied mathematics,
            control theory, and software engineering. In parallel, I have spent over eight years in independent study and
            applied experimentation in market microstructure, derivatives, and systematic trading design, while designing, implementing, and
            evaluating algorithmic trading strategies. My focus has been on building research tools that support clear,
            disciplined reasoning about model behavior under live market conditions.
          </p>
          <p className="mb-6">
            The following is an illustrative example showing how I use fundamental data sets to construct and evaluate a quantitative trading hypothesis,
            then translate that into executable strategy code to generate trade histories, providing context on how models are analyzed and iteratively
            refined through numerical evaluation.
          </p>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 pb-36 md:pb-28 lg:pb-20 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Acquire and Analyze Relevant Data">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Data.png"
                alt="Crude oil trading strategy research visualization"
                className="w-full h-full object-contain rounded-lg"
              />

              <p className="text-base text-center sm:text-xl mb-2 text-slate-400">
                The process begins by identifying relevant fundamental drivers and analyzing their relationship to price behavior.
              </p>

              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                This example uses data readily available on the internet, and it is displayed here using Excel for visualization purposes.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 pb-36 md:pb-28 lg:pb-20 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Construct and Evaluate a Quantitative Model from Fundamental Data">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Strategy.png"
                alt="Crude oil trading strategy research visualization"
                className="w-full h-full object-contain rounded-lg"
              />

              <p className="text-base text-center sm:text-xl mb-2 text-slate-400">
                Using the data, a quantitative model is constructed to estimate a conditional price expectation,
                which is then evaluated and refined through numerical analysis.
              </p>

              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                This formula is simply an example of the process, and this is not to imply that the formula is corresponding to the data shown
                in the images on this page. The underlying analysis is performed programmatically; Excel is used here solely for visualization
                and parameter inspection.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 pb-36 md:pb-28 lg:pb-20 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Implementing the Model within an Automated Execution Framework">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Code.png"
                alt="Crude oil trading strategy research visualization"
                className="w-full h-full object-contain rounded-lg"
              />

              <p className="text-base text-center sm:text-xl mb-2 text-slate-400">
                The model is then implemented as executable strategy logic, integrating signal generation, state management, and execution constraints.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                The underlying platform provides market data and visualization. All strategy logic,
                signal generation, and trade state handling were designed and implemented by me.
                These examples are provided solely to illustrate system design and research workflow,
                not to disclose proprietary methods or claim statistical edge.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 pb-36 md:pb-28 lg:pb-20 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Execution and Reporting Output">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Results_1.png"
                alt="Crude oil trading strategy research visualization"
                className="w-full h-full object-contain rounded-lg"
              />

              <p className="text-base text-center sm:text-xl mb-2 text-slate-400">
                Models are evaluated using out-of-sample testing and sensitivity analysis to assess robustness under changing market conditions.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                This report is generated by the underlying trading platform using executed orders
                produced by my strategy logic. It is included to demonstrate end-to-end system
                integration—from signal generation through execution and reporting—rather than
                to emphasize profitability.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 pb-36 md:pb-28 lg:pb-14 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Robustness Analysis and Iterative Refinement">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Results_2.png"
                alt="Crude oil trading strategy execution report"
                className="w-full h-full object-contain rounded-lg"
              />

              <p className="text-base sm:text-xl mb-2 text-slate-400">
                Evaluation emphasizes risk-adjusted performance, stability across regimes, and behavior under adverse market conditions.
              </p>
            </div>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
}
