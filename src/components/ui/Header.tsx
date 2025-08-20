"use client";

import clsx from "clsx";
import { Header as AriaHeader } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

const Header = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <AriaHeader
      className={twMerge(
        clsx(
          "font-semibold text-gray-900 dark:text-white px-2 py-1",
          className
        )
      )}
      {...props}
    />
  );
};

export default Header;