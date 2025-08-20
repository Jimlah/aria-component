"use client";

import clsx from "clsx";
import { CalendarGridBody as AriaCalendarGridBody, CalendarGridBodyProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const CalendarGridBody = ({ className, ...props }: CalendarGridBodyProps) => {
  return (
    <AriaCalendarGridBody
      className={twMerge(
        clsx(
          "",
          className
        )
      )}
      {...props}
    />
  );
};

export default CalendarGridBody;