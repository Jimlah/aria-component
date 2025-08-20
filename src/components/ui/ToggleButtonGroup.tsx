"use client";

import clsx from "clsx";
import { ToggleButtonGroup as AriaToggleButtonGroup, ToggleButtonGroupProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ToggleButtonGroup = ({ className, ...props }: ToggleButtonGroupProps) => {
  return (
    <AriaToggleButtonGroup
      className={twMerge(
        clsx(
          "inline-flex",
          "data-[orientation=horizontal]:flex-row",
          "data-[orientation=vertical]:flex-col",
          className
        )
      )}
      {...props}
    />
  );
};

export default ToggleButtonGroup;