"use client";

import clsx from "clsx";
import { Tabs as AriaTabs, TabsProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <AriaTabs
      className={twMerge(
        clsx(
          "flex flex-col",
          "data-[orientation=horizontal]:flex-col",
          "data-[orientation=vertical]:flex-row",
          className
        )
      )}
      {...props}
    />
  );
};

export default Tabs;