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
          "outline-none cursor-pointer p-2",
          "hover:bg-gray-100",
          "data-[selected=true]:bg-gray-300",
          className
        )
      )}
      {...props}
    />
  );
};

export default Option;
