"use client";

import clsx from "clsx";
import { CalendarCell as AriaCalendarCell, CalendarCellProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const CalendarCell = ({ className, ...props }: CalendarCellProps) => {
  return (
    <AriaCalendarCell
      className={twMerge(
        clsx(
          "w-9 h-9 text-sm outline-none cursor-pointer rounded-md flex items-center justify-center",
          "hover:bg-gray-100 dark:hover:bg-gray-700",
          "data-[selected=true]:bg-blue-600 data-[selected=true]:text-white",
          "data-[focused=true]:ring-2 data-[focused=true]:ring-blue-500",
          "data-[outside-month=true]:text-gray-400 dark:data-[outside-month=true]:text-gray-500",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default CalendarCell;