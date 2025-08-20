"use client";

import clsx from "clsx";
import { Breadcrumbs as AriaBreadcrumbs, BreadcrumbsProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Breadcrumbs = ({ className, ...props }: BreadcrumbsProps<object>) => {
  return (
    <AriaBreadcrumbs
      className={twMerge(
        clsx(
          "flex items-center gap-1 text-sm",
          className
        )
      )}
      {...props}
    />
  );
};

export default Breadcrumbs;