import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

/**
 * cn is a utility function that merges class names together.
 * @param inputs - ClassValue[]
 * @returns A string of class names.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
