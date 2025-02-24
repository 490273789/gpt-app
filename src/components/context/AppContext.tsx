"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { reducer, State, initState, Action } from "@/reducers/AppReducers";

// context的类型
export type AppContextProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

// 创建context
export const AppContext = createContext<AppContextProps>(null!);

// 定义一个公共获取context的方法
export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({
  children,
}: Readonly<{
  children: ReactNode | null;
}>) {
  const [state, dispatch] = useReducer(reducer, initState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
