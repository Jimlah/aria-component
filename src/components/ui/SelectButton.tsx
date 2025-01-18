"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Button as AriaButton, ButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const SelectButton = ({ className, ...props }: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
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
    <AriaButton
      data-slot="control"
      className={twMerge(
        clsx(
          "grid grid-cols-[auto_1fr_auto] items-center gap-2 outline-none w-full",
          "[&>[data-slot=icon]:first-child]:col-start-1 [&>[data-slot=icon]:last-child]:col-start-3",
          "[&>[data-slot=icon]]:row-start-1 [&>[data-slot=icon]]:place-self-center",
          "[&>[data-slot=icon]]:z-10 [&>[data-slot=icon]]:text-gray-300",
          "[&>[data-slot=control]]:col-span-full [&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1",
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

export default SelectButton;
