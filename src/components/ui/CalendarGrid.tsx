"use client";

import clsx from "clsx";
import { CalendarGrid as AriaCalendarGrid, CalendarGridProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const CalendarGrid = ({ className, ...props }: CalendarGridProps) => {
  return (
    <AriaCalendarGrid
      className={twMerge(
        clsx(
          "border-separate border-spacing-1",
          className
        )
      )}
      {...props}
    />
  );
};

export default CalendarGrid;