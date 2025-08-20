"use client";

import clsx from "clsx";
import { Modal as AriaModal, ModalOverlayProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Modal = ({ className, ...props }: ModalOverlayProps) => {
  return (
    <AriaModal
      className={twMerge(
        clsx(
          "fixed inset-0 z-50 flex items-center justify-center",
          "data-[entering]:animate-in data-[entering]:fade-in data-[entering]:duration-300",
          "data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:duration-200",
          className
        )
      )}
      {...props}
    />
  );
};

export default Modal;