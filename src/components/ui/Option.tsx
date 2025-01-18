"use client";

import clsx from "clsx";
import {
  ListBoxItem as AriaOption,
  ListBoxItemProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Option = ({ className, ...props }: ListBoxItemProps) => {
  return (
    <AriaOption
      className={twMerge(
        clsx(
          "outline-none cursor-pointer px-2 py-1.5 rounded-md",
          "hover:bg-gray-100",
          "data-[selected=true]:bg-gray-300",
          "data-[disabled=true]:cursor-not-allowed",
          "data-[disabled=true]:text-gray-300 text-sm",
          className
        )
      )}
      {...props}
    />
  );
};

export default Option;
