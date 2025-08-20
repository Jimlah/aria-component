"use client";

import clsx from "clsx";
import { Dialog as AriaDialog, DialogProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Dialog = ({ className, ...props }: DialogProps) => {
  return (
    <AriaDialog
      className={twMerge(
        clsx(
          "bg-white dark:bg-gray-800 rounded-lg shadow-xl",
          "outline-none relative",
          "max-w-md w-full mx-4",
          className
        )
      )}
      {...props}
    />
  );
};

export default Dialog;