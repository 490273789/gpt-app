import { ComponentPropsWithRef } from "react";
import { IconType } from "react-icons";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";

type ButtonProps = {
  icon?: IconType;
  variant?: "default" | "primary" | "outline" | "text";
} & ComponentPropsWithRef<"button">;

const button = cva(
  ["inline-flex items-center min-w-[38px] min-h-[38px] rounded px-3 py-1.5"],
  {
    variants: {
      intent: {
        default:
          "text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900",
        outline:
          "border border-gray-300 dark:border-gray-600 text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 hover:text-white shadow-sm",
        text: "text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700",
      },
    },
  },
);

export default function Button({
  children,
  icon: Icon,
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(button({ intent: variant }), className)} {...props}>
      {Icon && <Icon className={cn("text-lg", { "mr-1": children })} />}
      {children}
    </button>
  );
}
