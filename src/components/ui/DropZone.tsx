"use client";

import clsx from "clsx";
import { DropZone as AriaDropZone, DropZoneProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const DropZone = ({ className, ...props }: DropZoneProps) => {
  return (
    <AriaDropZone
      className={twMerge(
        clsx(
          "border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6",
          "outline-none cursor-pointer transition-colors",
          "hover:border-blue-400 dark:hover:border-blue-500",
          "data-[drop-target=true]:border-blue-600 dark:data-[drop-target=true]:border-blue-400",
          "data-[drop-target=true]:bg-blue-50 dark:data-[drop-target=true]:bg-blue-900/20",
          className
        )
      )}
      {...props}
    />
  );
};

export default DropZone;