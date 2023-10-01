export interface Tab {
  id: string;
  label: string;
  href: string;
}

export interface TabLinkProps {
  tab: Tab;
  isActive: boolean;
  onClick: (tabId: string) => void;
}

import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  containerStyles: string;
  btnType?: "button" | "submit";
  href?: string;
}
