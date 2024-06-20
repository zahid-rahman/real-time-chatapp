"use client";
import { Button, ButtonSizes, FlowbiteColors } from "flowbite-react";
import React, { ReactNode } from "react";

interface IAppButton {
  onClick?: () => void;
  colorType: keyof FlowbiteColors;
  children: ReactNode | string;
  size?: keyof ButtonSizes;
}
export default function AppButton({
  onClick,
  colorType,
  children,
  size = "md",
}: IAppButton) {
  return (
    <Button onClick={onClick} color={colorType} size={size}>
      {children}
    </Button>
  );
}
