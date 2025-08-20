"use client";

import clsx from "clsx";
import { Breadcrumb as AriaBreadcrumb, BreadcrumbProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Breadcrumb = ({ className, ...props }: BreadcrumbProps) => {
  return (
    <AriaBreadcrumb
      className={twMerge(
        clsx(
          "flex items-center gap-1",
          "data-[current=true]:text-gray-900 dark:data-[current=true]:text-white",
          "data-[current=false]:text-blue-600 dark:data-[current=false]:text-blue-400",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default Breadcrumb;