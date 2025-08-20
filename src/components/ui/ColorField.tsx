"use client";

import clsx from "clsx";
import { ColorField as AriaColorField, ColorFieldProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ColorField = ({ className, ...props }: ColorFieldProps) => {
  return (
    <AriaColorField
      className={twMerge(
        clsx(
          "group flex flex-col gap-1",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default ColorField;