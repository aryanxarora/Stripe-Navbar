import { MouseEventHandler } from "react";

export interface Button {
    title: string;
    styles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}