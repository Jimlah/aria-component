"use client";

import clsx from "clsx";
import { ToggleButton as AriaToggleButton, ToggleButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ToggleButton = ({ className, ...props }: ToggleButtonProps) => {
  return (
    <AriaToggleButton
      className={twMerge(
        clsx(
          "outline-none px-4 py-2 rounded-md text-sm cursor-pointer border border-gray-300 dark:border-gray-600",
          "hover:bg-gray-100 dark:hover:bg-gray-700",
          "data-[selected=true]:bg-blue-100 dark:data-[selected=true]:bg-blue-900 data-[selected=true]:border-blue-500",
          "data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          className
        )
      )}
      {...props}
    />
  );
};

export default ToggleButton;