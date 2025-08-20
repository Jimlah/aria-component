"use client";

import clsx from "clsx";
import { Link as AriaLink, LinkProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Link = ({ className, ...props }: LinkProps) => {
  return (
    <AriaLink
      className={twMerge(
        clsx(
          "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
          "underline cursor-pointer outline-none",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed",
          className
        )
      )}
      {...props}
    />
  );
};

export default Link;