"use client";

import clsx from "clsx";
import { useState } from "react";
import {
  TextField as AriaTextField,
  ButtonContext,
  ButtonProps,
  DEFAULT_SLOT,
  Provider,
  TextFieldContext,
  TextFieldProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TextField = ({
  type: initialType,
  className,
  ...props
}: TextFieldProps) => {
  const [type, setType] = useState(initialType);

  const changeType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <Provider
      values={[
        [TextFieldContext, { type: type }],
        [
          ButtonContext,
          {
            type: "button",
            slots: {
              [DEFAULT_SLOT]: {},
              password: {
                onPress: changeType,
                "data-type": type,
              },
            },
          } as ButtonProps,
        ],
      ]}
    >
      <AriaTextField
        className={twMerge(
          clsx("w-full flex flex-col isolate relative", className)
        )}
        {...props}
      />
    </Provider>
  );
};

export default TextField;
