"use client";

import clsx from "clsx";
import { Group as AriaGroup, GroupProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Group = ({ className, ...props }: GroupProps) => {
  return (
    <AriaGroup
      className={twMerge(
        clsx(
          "grid grid-cols-[auto_1fr_auto] items-center gap-2 isolate",
          "[&>[data-slot=icon]:first-child]:col-start-1 [&>[data-slot=icon]:last-child]:col-start-3",
          "[&>[data-slot=icon]]:row-start-1 [&>[data-slot=icon]]:place-self-center",
          "[&>[data-slot=icon]]:z-10 [&>[data-slot=icon]]:text-gray-300",
          "[&>[data-slot=control]]:col-span-full [&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1",
          // "[&>[data-slot=icon]+[data-slot=control]]:pl-10",
          // "[&:has([data-slot=control]+[data-slot=icon])>[data-slot=control]]:pr-10",
          className
        )
      )}
      {...props}
    />
  );
};

export default Group;
