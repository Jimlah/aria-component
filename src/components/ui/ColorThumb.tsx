"use client";

import clsx from "clsx";
import { ColorThumb as AriaColorThumb, ColorThumbProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ColorThumb = ({ className, ...props }: ColorThumbProps) => {
  return (
    <AriaColorThumb
      className={twMerge(
        clsx(
          "w-5 h-5 border-2 border-white rounded-full shadow-md cursor-pointer",
          "outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "data-[dragging=true]:scale-110",
          "transition-transform duration-150",
          className
        )
      )}
      {...props}
    />
  );
};

export default ColorThumb;