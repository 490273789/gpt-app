"use client";
import { useCallback } from "react";
import { LuPanelLeftOpen } from "react-icons/lu";
import Button from "@/components/common/Button";
import { useAppContext } from "@/components/context/AppContext";
import { ActionType } from "@/reducers/AppReducers";
import { cn } from "@/utils";

export default function OpenNav() {
  const {
    state: { displayNav },
    dispatch,
  } = useAppContext();

  const openPanel = useCallback(
    () => dispatch({ type: ActionType.UPDATE, key: "displayNav", value: true }),
    [dispatch],
  );
  return (
    <Button
      className={cn("fixed left-2 top-2", { hidden: displayNav })}
      icon={LuPanelLeftOpen}
      variant="outline"
      onClick={openPanel}
    />
  );
}
