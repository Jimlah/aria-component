"use client";

import clsx from "clsx";
import { FieldError as AriaFieldError, FieldErrorProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const FieldError = ({ className, ...props }: FieldErrorProps) => {
  return (
    <AriaFieldError
      className={twMerge(
        clsx(
          "text-sm text-red-600 dark:text-red-400",
          className
        )
      )}
      {...props}
    />
  );
};

export default FieldError;