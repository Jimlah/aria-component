"use client";

import clsx from "clsx";
import { ModalOverlay as AriaModalOverlay, ModalOverlayProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const ModalOverlay = ({ className, ...props }: ModalOverlayProps) => {
  return (
    <AriaModalOverlay
      className={twMerge(
        clsx(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm",
          "data-[entering]:animate-in data-[entering]:fade-in data-[entering]:duration-300",
          "data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:duration-200",
          className
        )
      )}
      {...props}
    />
  );
};

export default ModalOverlay;