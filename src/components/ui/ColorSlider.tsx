"use client";

import clsx from "clsx";
import { ColorSlider as AriaColorSlider, ColorSliderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ColorSlider = ({ className, ...props }: ColorSliderProps) => {
  return (
    <AriaColorSlider
      className={twMerge(
        clsx(
          "flex flex-col gap-2 w-full",
          "data-[orientation=vertical]:flex-row data-[orientation=vertical]:h-full",
          className
        )
      )}
      {...props}
    />
  );
};

export default ColorSlider;