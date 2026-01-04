// import React from "react";
// import { TextHoverEffect } from "@/components/ui/text-hover-effect";

// export default function ConnectPage() {
//   return (
//     <div className="h-[40rem] flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl overflow-hidden">
//       <TextHoverEffect text="Coming Soon!" />
//     </div>
//   );
// }


"use client";

import Carousel2 from "@/components/ui/carousel_2";

export default function Products() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Carousel2
        slides={[
          {
            src: "/pi_ad.jpg", // first image
          },
          {
            src: "/pi_moreColors.jpg", // second image
          },
          {
            src: "/pi_scanHere.jpg", // third image
          },
        ]}
      />
    </div>
  );
}
