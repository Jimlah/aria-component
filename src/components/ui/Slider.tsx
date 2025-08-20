"use client";

import clsx from "clsx";
import { Slider as AriaSlider, SliderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Slider = ({ className, ...props }: SliderProps<number | number[]>) => {
  return (
    <AriaSlider
      className={twMerge(
        clsx(
          "group flex flex-col gap-2 w-full",
          "data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-row",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default Slider;