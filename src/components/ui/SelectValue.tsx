"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import {
  SelectValue as AriaSelectValue,
  SelectValueProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

const SelectValue = ({ className, ...props }: SelectValueProps<object>) => {
  const ref = useRef<HTMLInputElement>(null);
  const [prevWidth, setPrevWidth] = useState(8);
  const [nextWidth, setNextWidth] = useState(8);

  useEffect(() => {
    if (
      ref.current?.previousElementSibling?.getAttribute("data-slot") ===
        "icon" ||
      ref.current?.nextElementSibling?.getAttribute("data-slot") === "icon"
    ) {
      if (ref.current && ref.current.previousElementSibling?.clientWidth) {
        setPrevWidth(ref.current.previousElementSibling?.clientWidth);
      }
      if (ref.current && ref.current.nextElementSibling?.clientWidth) {
        setNextWidth(ref.current.nextElementSibling?.clientWidth);
      }
    }
  }, []);
  return (
    <AriaSelectValue
      data-slot="control"
      className={twMerge(
        clsx(
          "outline-none border text-left pl-[var(--previous-element-width)] pr-[var(--next-element-width)] py-2 rounded-md text-sm border-gray-500 bg-transparent group-data-[focused=true]:border-purple-500 group-data-[valid=true]:border-green-500 group-data-[invalid=true]:border-red-500",
          "group-data-[disabled=true]:bg-gray-200 dark:group-data-[disabled=true]:bg-gray-500 group-data-[disabled=true]:text-gray-200 group-data-[disabled=true]:border-gray-200 disabled:cursor-not-allowed",
          "data-[placeholder=true]:text-gray-500",
          className
        )
      )}
      {...props}
      ref={ref}
      style={
        {
          "--previous-element-width": `${prevWidth}px`,
          "--next-element-width": `${nextWidth}px`,
        } as React.CSSProperties
      }
    />
  );
};

export default SelectValue;
