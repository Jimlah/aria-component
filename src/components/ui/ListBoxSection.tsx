"use client";

import clsx from "clsx";
import { ListBoxSection as AriaListBoxSection, SectionProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ListBoxSection = ({ className, ...props }: SectionProps<object>) => {
  return (
    <AriaListBoxSection
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

export default ListBoxSection;