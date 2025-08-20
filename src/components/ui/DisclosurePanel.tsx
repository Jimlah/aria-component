"use client";

import clsx from "clsx";
import { DisclosurePanel as AriaDisclosurePanel, DisclosurePanelProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const DisclosurePanel = ({ className, ...props }: DisclosurePanelProps) => {
  return (
    <AriaDisclosurePanel
      className={twMerge(
        clsx(
          "mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-md",
          "data-[entering]:animate-in data-[entering]:slide-down-1 data-[entering]:fade-in",
          "data-[exiting]:animate-out data-[exiting]:slide-up-1 data-[exiting]:fade-out",
          className
        )
      )}
      {...props}
    />
  );
};

export default DisclosurePanel;