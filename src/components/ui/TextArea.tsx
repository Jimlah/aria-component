"use client";

import clsx from "clsx";
import { TextArea as AriaTextArea, TextAreaProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <AriaTextArea
      className={twMerge(
        clsx(
          "outline-none border px-3 py-2 rounded-md text-sm border-gray-500 bg-transparent resize-none",
          "focus:border-purple-500 valid:border-green-500 invalid:border-red-500",
          "disabled:bg-gray-200 dark:disabled:bg-gray-500 disabled:text-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed",
          className
        )
      )}
      {...props}
    />
  );
};

export default TextArea;