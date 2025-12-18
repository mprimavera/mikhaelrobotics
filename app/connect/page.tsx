"use client";

import { Box, Mail, MessageSquareText } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ContactForm from "../components/contact_page";
import { Vortex } from "@/components/ui/vortex";
import { Linkedin } from "lucide-react";


export default function ConnectPage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-10">
      
      <ul className="w-full  max-w-4xl grid gap-6">
        <Vortex baseSpeed={0.01} baseHue={180} rangeSpeed={.3}>

        <div className="space-y-6">
        {/* Email direct */}
        <GridItem
          area="auto"
          icon={<Mail className="h-6 w-6 text-center text-black dark:text-neutral-400" />}
          title={
            <a
              href="mailto:michael@mikhaelrobotics.ai"
              className="text-center text-blue-500 break-all sm:break-normal hover:text-blue-400"
            >
              michael@mikhaelrobotics.ai
            </a>
          }

          description={null}
        />

        <GridItem
          area="auto"
          icon={<Linkedin className="h-6 w-6 text-center text-black dark:text-neutral-400" />}
          title={
            <a
              href="https://linkedin.com/in/mikhaelrobotics"
              target="blank"
              className="text-blue-500 text-center break-all sm:break-normal hover:text-blue-400">
              MikhaelRobotics on Linkedin
            </a>
          }

          description={null}
        />

        {/* Contact form */}
        {/* <GridItem
          area="auto"
          icon={<MessageSquareText className="h-6 w-6 text-black dark:text-neutral-400" />}
          title={<span>Message</span>}
          description={
            <ContactForm
              formId="YOUR_FORMSPREE_ID"
              inputClassName="w-full rounded-md px-4 py-2.5 text-slate-300 bg-neutral-900 border border-neutral-700 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              textAreaClassName="w-full rounded-md px-4 py-2.5 text-slate-300 bg-neutral-900 border border-neutral-700 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              buttonClassName="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
            />
          }
        /> */}

        </div>
    </Vortex>
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`list-none ${area}`}>
      <div className="relative rounded-2xl border p-4 md:p-6 md:rounded-3xl w-full max-w-md mx-auto backdrop-blur-sm">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Icon + Title line centered */}
        <div className="flex items-center justify-center gap-3 ">
          <div className="flex-shrink-0">{icon}</div>
          <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
        </div>

        {description && (
          <div className="text-sm text-black dark:text-neutral-400 text-center">
            {description}
          </div>
        )}
      </div>
    </li>
  );
};
