"use client";

import clsx from "clsx";
import { ProgressBar as AriaProgressBar, ProgressBarProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ProgressBar = ({ className, ...props }: ProgressBarProps) => {
  return (
    <AriaProgressBar
      className={twMerge(
        clsx(
          "flex flex-col gap-1",
          className
        )
      )}
      {...props}
    />
  );
};

export default ProgressBar;