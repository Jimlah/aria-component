"use client";

import clsx from "clsx";
import { MenuSection as AriaMenuSection, SectionProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const MenuSection = ({ className, ...props }: SectionProps<object>) => {
  return (
    <AriaMenuSection
      className={twMerge(
        clsx(
          "outline-none",
          "not-first:border-t not-first:border-gray-200 dark:not-first:border-gray-600 not-first:mt-2 not-first:pt-2",
          className
        )
      )}
      {...props}
    />
  );
};

export default MenuSection;