"use client";

import clsx from "clsx";
import { SliderThumb as AriaSliderThumb, SliderThumbProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  return (
    <AriaSliderThumb
      className={twMerge(
        clsx(
          "w-5 h-5 bg-blue-600 border-2 border-white rounded-full shadow-md",
          "outline-none cursor-pointer",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "data-[dragging=true]:bg-blue-700 data-[dragging=true]:scale-110",
          "data-[disabled=true]:cursor-not-allowed",
          "transition-all duration-150",
          "relative z-10",
          className
        )
      )}
      {...props}
    />
  );
};

export default SliderThumb;