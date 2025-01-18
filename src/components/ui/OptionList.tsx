"use client";

import {
  ListBox as AriaOptionList,
  ListBoxProps,
  Popover,
} from "react-aria-components";

const OptionList = (props: ListBoxProps<object | string[]>) => {
  return (
    <Popover className="w-auto outline-none">
      <AriaOptionList
        className="outline-none min-w-[var(--trigger-width)] max-h-[600px] bg-white overflow-hidden rounded-md shadow-md border border-gray-300/50"
        {...props}
      />
    </Popover>
  );
};

export default OptionList;
