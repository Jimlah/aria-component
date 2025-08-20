"use client";

import clsx from "clsx";
import { MenuItem as AriaMenuItem, MenuItemProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const MenuItem = ({ className, ...props }: MenuItemProps) => {
  return (
    <AriaMenuItem
      className={twMerge(
        clsx(
          "outline-none cursor-pointer px-2 py-1.5 rounded-md text-sm",
          "hover:bg-gray-100 dark:hover:bg-gray-700",
          "data-[focused=true]:bg-gray-100 dark:data-[focused=true]:bg-gray-700",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default MenuItem;