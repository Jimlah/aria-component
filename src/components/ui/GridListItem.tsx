"use client";

import clsx from "clsx";
import { GridListItem as AriaGridListItem, GridListItemProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const GridListItem = ({ className, ...props }: GridListItemProps) => {
  return (
    <AriaGridListItem
      className={twMerge(
        clsx(
          "outline-none cursor-pointer px-2 py-1.5 rounded-md text-sm",
          "hover:bg-gray-100 dark:hover:bg-gray-700",
          "data-[selected=true]:bg-blue-100 dark:data-[selected=true]:bg-blue-900",
          "data-[focused=true]:ring-2 data-[focused=true]:ring-blue-500",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default GridListItem;