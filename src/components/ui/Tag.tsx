"use client";

import clsx from "clsx";
import { Tag as AriaTag, TagProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Tag = ({ className, ...props }: TagProps) => {
  return (
    <AriaTag
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1 px-2 py-1 text-sm rounded-md",
          "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white",
          "outline-none cursor-pointer",
          "hover:bg-gray-200 dark:hover:bg-gray-600",
          "data-[selected=true]:bg-blue-100 dark:data-[selected=true]:bg-blue-900",
          "data-[focused=true]:ring-2 data-[focused=true]:ring-blue-500",
          "data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed",
          className
        )
      )}
      {...props}
    />
  );
};

export default Tag;