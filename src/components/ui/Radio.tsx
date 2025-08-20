"use client";

import clsx from "clsx";
import { Radio as AriaRadio, RadioProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Radio = ({ className, ...props }: RadioProps) => {
  return (
    <AriaRadio
      className={twMerge(
        clsx(
          "group flex items-center gap-2 text-sm cursor-pointer",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default Radio;