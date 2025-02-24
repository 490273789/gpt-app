"use client";
import { useAppContext } from "@/components/context/AppContext";
import TopMenu from "./TopMenu";
import { cn } from "@/utils";

export default function Navigation() {
  const {
    state: { displayNav },
  } = useAppContext();
  return (
    <nav
      className={cn(
        "dark flex w-[260px] flex-col bg-gray-950 p-2 text-gray-400 transition-all",
        { hidden: !displayNav },
      )}>
      <TopMenu />
    </nav>
  );
}
