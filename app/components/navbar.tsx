"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function InnerNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-black/0 shadow-md px-4 sm:px-8",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center py-4">
        {/* Responsive oval menu */}
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home" />
          <MenuItem setActive={setActive} active={active} item="Résumé" />
          <MenuItem setActive={setActive} active={active} item="Products" />
          <MenuItem setActive={setActive} active={active} item="Pricing" />
        </Menu>
      </div>
    </div>
  );
}

// Menu wrapper: always hugs content
const Menu = ({
  setActive,
  children,
}: {
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  children: React.ReactNode;
}) => {
  return (
    <div className="
      inline-flex justify-center items-center
      px-3 sm:px-6 py-1 sm:py-2  /* padding closer to text on small screens */
      border-2 border-blue-500
      rounded-xl sm:rounded-full  /* use rounded-xl for small screens, full for larger */
      transition-all duration-300
      gap-3 sm:gap-6
      overflow-hidden
    ">
      {children}
    </div>
  );
};

// Menu item with glowing blue text and responsive font
interface MenuItemProps {
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
  item: string;
}

const MenuItem = ({ setActive, active, item }: MenuItemProps) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer px-2 sm:px-3 py-1 sm:py-2 transition-all duration-200 whitespace-nowrap",
        active === item ? "text-blue-500 font-semibold" : "text-gray-900 dark:text-white",
        "hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]",
        "text-sm sm:text-base md:text-lg lg:text-xl"
      )}
      onMouseEnter={() => setActive(item)}
      onClick={() => setActive(item)}
    >
      {item}
    </div>
  );
};
