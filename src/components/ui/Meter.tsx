"use client";

import clsx from "clsx";
import { Meter as AriaMeter, MeterProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Meter = ({ className, ...props }: MeterProps) => {
  return (
    <AriaMeter
      className={twMerge(
        clsx(
          "flex flex-col gap-1",
          className
        )
      )}
      {...props}
    />
  );
};

export default Meter;