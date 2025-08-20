"use client";

import clsx from "clsx";
import { ColorArea as AriaColorArea, ColorAreaProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ColorArea = ({ className, ...props }: ColorAreaProps) => {
  return (
    <AriaColorArea
      className={twMerge(
        clsx(
          "w-48 h-32 rounded-md border border-gray-300 dark:border-gray-600 cursor-crosshair",
          "outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          className
        )
      )}
      {...props}
    />
  );
};

export default ColorArea;