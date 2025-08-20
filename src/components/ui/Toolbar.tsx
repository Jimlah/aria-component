"use client";

import clsx from "clsx";
import { Toolbar as AriaToolbar, ToolbarProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Toolbar = ({ className, ...props }: ToolbarProps) => {
  return (
    <AriaToolbar
      className={twMerge(
        clsx(
          "flex items-center gap-2",
          "data-[orientation=vertical]:flex-col",
          className
        )
      )}
      {...props}
    />
  );
};

export default Toolbar;