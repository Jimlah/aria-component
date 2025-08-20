"use client";

import { Keyboard as AriaKeyboard } from "react-aria-components";
import { HTMLAttributes } from "react";

const Keyboard = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <AriaKeyboard
      className="inline-block px-1.5 py-0.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded"
      {...props}
    />
  );
};

export default Keyboard;