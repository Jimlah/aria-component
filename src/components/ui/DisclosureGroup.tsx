"use client";

import clsx from "clsx";
import { DisclosureGroup as AriaDisclosureGroup, DisclosureGroupProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const DisclosureGroup = ({ className, ...props }: DisclosureGroupProps) => {
  return (
    <AriaDisclosureGroup
      className={twMerge(
        clsx(
          "space-y-2",
          className
        )
      )}
      {...props}
    />
  );
};

export default DisclosureGroup;