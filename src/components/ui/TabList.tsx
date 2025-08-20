"use client";

import clsx from "clsx";
import { TabList as AriaTabList, TabListProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TabList = ({ className, ...props }: TabListProps<object>) => {
  return (
    <AriaTabList
      className={twMerge(
        clsx(
          "flex border-b border-gray-300 dark:border-gray-600",
          "data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r data-[orientation=vertical]:border-b-0",
          className
        )
      )}
      {...props}
    />
  );
};

export default TabList;