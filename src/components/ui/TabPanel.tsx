"use client";

import clsx from "clsx";
import { TabPanel as AriaTabPanel, TabPanelProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TabPanel = ({ className, ...props }: TabPanelProps) => {
  return (
    <AriaTabPanel
      className={twMerge(
        clsx(
          "mt-4 outline-none",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          className
        )
      )}
      {...props}
    />
  );
};

export default TabPanel;