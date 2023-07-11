import { HTMLProps } from "react";

export interface ICounterProps extends HTMLProps<HTMLSpanElement> {
  count?: number;
}
