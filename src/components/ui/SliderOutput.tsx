"use client";

import clsx from "clsx";
import { SliderOutput as AriaSliderOutput, SliderOutputProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const SliderOutput = ({ className, ...props }: SliderOutputProps) => {
  return (
    <AriaSliderOutput
      className={twMerge(
        clsx(
          "text-sm text-gray-700 dark:text-gray-300",
          className
        )
      )}
      {...props}
    />
  );
};

export default SliderOutput;