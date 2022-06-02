import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./RadioGroup.css";

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "vertical" | "horizontal";
}

/**
 * @see https://vkcom.github.io/VKUI/#/RadioGroup
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  mode = "vertical",
  children,
  ...restProps
}) => (
  <div
    vkuiClass={classNames("RadioGroup", `RadioGroup--${mode}`)}
    {...restProps}
  >
    {children}
  </div>
);
