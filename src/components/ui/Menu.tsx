"use client";

import clsx from "clsx";
import { Menu as AriaMenu, MenuProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Menu = ({ className, ...props }: MenuProps<object>) => {
  return (
    <AriaMenu
      className={twMerge(
        clsx(
          "outline-none min-w-[150px] p-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg",
          "max-h-[300px] overflow-auto",
          className
        )
      )}
      {...props}
    />
  );
};

export default Menu;