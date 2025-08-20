"use client";

import clsx from "clsx";
import { TagGroup as AriaTagGroup, TagGroupProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TagGroup = ({ className, ...props }: TagGroupProps) => {
  return (
    <AriaTagGroup
      className={twMerge(
        clsx(
          "flex flex-wrap gap-2",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default TagGroup;