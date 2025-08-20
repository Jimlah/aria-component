"use client";

import clsx from "clsx";
import { Disclosure as AriaDisclosure, DisclosureProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  return (
    <AriaDisclosure
      className={twMerge(
        clsx(
          "group",
          className
        )
      )}
      {...props}
    />
  );
};

export default Disclosure;