"use client";

import clsx from "clsx";
import { ComboBox as AriaComboBox, ComboBoxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ComboBox = ({ className, ...props }: ComboBoxProps<object>) => {
  return (
    <AriaComboBox
      className={twMerge(
        clsx(
          "group relative isolate outline-none",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default ComboBox;