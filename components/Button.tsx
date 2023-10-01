"use client";
import React from "react";
import { ButtonProps } from "@/types";
import Link from "next/link";
const Button = ({
  title,
  isDisabled,
  handleClick,
  containerStyles,
  textStyles,
  btnType,
  href,
}: ButtonProps) => {
  const content = (
    <button
      type={btnType || "button"}
      disabled={isDisabled}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}> {title}</span>
    </button>
  );

  return href ? (
    <Link target="_blank" href={href}>
      <>{content}</>
    </Link>
  ) : (
    <>{content}</>
  );
};

export default Button;
