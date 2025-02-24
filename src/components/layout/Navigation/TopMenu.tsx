"use client";
import { useCallback } from "react";
import { LuPanelLeftClose, LuPlus, LuSearch } from "react-icons/lu";
import Button from "@/components/common/Button";
import { useAppContext } from "@/components/context/AppContext";
import { ActionType } from "@/reducers/AppReducers";

export default function TopMenu() {
  const { dispatch } = useAppContext();

  // 折叠导航
  const closePanel = useCallback(
    () =>
      dispatch({ type: ActionType.UPDATE, key: "displayNav", value: false }),
    [dispatch],
  );

  return (
    <div className="flex space-x-2">
      <Button icon={LuPlus} className="flex-1">
        新对话
      </Button>
      <Button icon={LuSearch} variant="outline" />
      <Button icon={LuPanelLeftClose} variant="outline" onClick={closePanel} />
    </div>
  );
}
