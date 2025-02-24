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
        "dark fixed bottom-0 left-0 top-0 flex w-[260px] flex-col bg-gray-950 p-2 text-gray-400 transition-all",
        { "left-[-260px]": !displayNav },
      )}>
      <TopMenu />
    </nav>
  );
}
