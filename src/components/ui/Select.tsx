"use client";

import clsx from "clsx";
import { Select as AriaSelect, SelectProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Select = ({ className, ...props }: SelectProps) => {
  return (
    <AriaSelect
      className={twMerge(clsx("outline-none group", className))}
      {...props}
    />
  );
};

export default Select;
