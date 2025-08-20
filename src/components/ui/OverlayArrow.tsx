"use client";

import clsx from "clsx";
import { OverlayArrow as AriaOverlayArrow, OverlayArrowProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const OverlayArrow = ({ className, ...props }: OverlayArrowProps) => {
  return (
    <AriaOverlayArrow
      className={twMerge(
        clsx(
          "group",
          className
        )
      )}
      {...props}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" className="fill-white dark:fill-gray-800">
        <path d="m0 0 6 6 6-6z" />
      </svg>
    </AriaOverlayArrow>
  );
};

export default OverlayArrow;