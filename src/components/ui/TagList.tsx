"use client";

import clsx from "clsx";
import { TagList as AriaTagList, TagListProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TagList = ({ className, ...props }: TagListProps<object>) => {
  return (
    <AriaTagList
      className={twMerge(
        clsx(
          "flex flex-wrap gap-2 outline-none",
          className
        )
      )}
      {...props}
    />
  );
};

export default TagList;