"use client";

import { Box, Mail, MessageSquareText } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ContactForm from "../components/contact_page";
import { Vortex } from "@/components/ui/vortex";
import { Linkedin, Github } from "lucide-react";
import { GridItem } from "../components/grid_item";

export default function ConnectPage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-10">
      
      <ul className="w-full max-w-4xl grid gap-6 justify-items-center">
        <Vortex baseHue={180} >

        <div className="space-y-6">
          {/* Email direct */}
          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={<Mail className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="mailto:michael@mikhaelrobotics.ai"
                  className="text-center break-all sm:break-normal"
                >
                  michael@mikhaelrobotics.ai
                </a>
              }
              description={null}
            />
          </div>
          {/* LinkedIn */}
          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={<Linkedin className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="https://linkedin.com/in/mikhaelrobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center break-all sm:break-normal"
                >
                  Michael Primavera on LinkedIn
                </a>
              }
              description={null}
            />
          </div>
          {/* GitHub */}
          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={<Github className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="https://github.com/mprimavera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center break-all sm:break-normal"
                >
                  Michael Primavera on GitHub
                </a>
              }
              description={null}
            />
          </div>



        </div>
    </Vortex>
      </ul>
    </div>
  );
}
