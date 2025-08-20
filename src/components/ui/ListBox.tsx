"use client";

import clsx from "clsx";
import { ListBox as AriaListBox, ListBoxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ListBox = ({ className, ...props }: ListBoxProps<object>) => {
  return (
    <AriaListBox
      className={twMerge(
        clsx(
          "outline-none flex flex-col gap-1 p-1",
          "border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800",
          "max-h-[300px] overflow-auto",
          className
        )
      )}
      {...props}
    />
  );
};

export default ListBox;