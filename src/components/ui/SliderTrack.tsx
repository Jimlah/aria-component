"use client";

import clsx from "clsx";
import { SliderTrack as AriaSliderTrack, SliderTrackProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  return (
    <AriaSliderTrack
      className={twMerge(
        clsx(
          "relative bg-gray-300 dark:bg-gray-600 rounded-full",
          "group-data-[orientation=horizontal]:w-full group-data-[orientation=horizontal]:h-2",
          "group-data-[orientation=vertical]:h-full group-data-[orientation=vertical]:w-2",
          "cursor-pointer",
          className
        )
      )}
      {...props}
    />
  );
};

export default SliderTrack;