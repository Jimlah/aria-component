"use client";

import clsx from "clsx";
import { ColorSwatch as AriaColorSwatch, ColorSwatchProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ColorSwatch = ({ className, ...props }: ColorSwatchProps) => {
  return (
    <AriaColorSwatch
      className={twMerge(
        clsx(
          "w-8 h-8 rounded border border-gray-300 dark:border-gray-600 cursor-pointer",
          "outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default ColorSwatch;