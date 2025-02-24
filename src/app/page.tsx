"use client";
import { useAppContext } from "@/components/context/AppContext";
import Chat from "@/components/layout/Chat";
import Navigation from "@/components/layout/Navigation";
import { cn } from "@/utils";

export default function Page() {
  const {
    state: { theme },
  } = useAppContext();
  return (
    <main className={cn(theme, "flex h-full")}>
      <Navigation />
      <Chat />
    </main>
  );
}
