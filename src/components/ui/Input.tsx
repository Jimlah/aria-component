"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Input as AriaInput, InputProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }: InputProps) => {
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
    <AriaInput
      data-slot="control"
      className={twMerge(
        clsx(
          "outline-none border pl-[var(--previous-element-width)] pr-[var(--next-element-width)] py-2 rounded-md text-sm border-gray-500 bg-transparent focus:border-purple-500 valid:border-green-500 invalid:border-red-500",
          "disabled:bg-gray-500 disabled:text-gray-300 disabled:border-gray-500 cursor-not-allowed",
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

export default Input;
