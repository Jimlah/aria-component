"use client";

import clsx from "clsx";
import { Switch as AriaSwitch, SwitchProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Switch = ({ className, ...props }: SwitchProps) => {
  return (
    <AriaSwitch
      className={twMerge(
        clsx(
          "group flex items-center gap-2 text-sm cursor-pointer",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
          "[&>*:first-child]:pointer-events-none",
          className
        )
      )}
      {...props}
    />
  );
};

export default Switch;