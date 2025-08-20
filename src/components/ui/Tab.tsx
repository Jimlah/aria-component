"use client";

import clsx from "clsx";
import { Tab as AriaTab, TabProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Tab = ({ className, ...props }: TabProps) => {
  return (
    <AriaTab
      className={twMerge(
        clsx(
          "px-4 py-2 text-sm cursor-pointer outline-none",
          "hover:text-gray-900 dark:hover:text-white",
          "data-[selected=true]:text-blue-600 dark:data-[selected=true]:text-blue-400",
          "data-[selected=true]:border-b-2 data-[selected=true]:border-blue-600 dark:data-[selected=true]:border-blue-400",
          "data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          className
        )
      )}
      {...props}
    />
  );
};

export default Tab;