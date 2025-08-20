"use client";

import clsx from "clsx";
import { Section as AriaSection, SectionProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Section = ({ className, ...props }: SectionProps<object>) => {
  return (
    <AriaSection
      className={twMerge(
        clsx(
          "outline-none",
          className
        )
      )}
      {...props}
    />
  );
};

export default Section;