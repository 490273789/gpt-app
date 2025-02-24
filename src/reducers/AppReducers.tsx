export type State = {
  displayNav: boolean;
  theme: "light" | "dark";
};

// dispatch的操作类型的枚举
export enum ActionType {
  UPDATE = "UPDATE",
}

// 更新操作
export type UpdateAction = {
  type: ActionType.UPDATE;
  key: string;
  value: unknown;
};

// 定义所有的dispatch操作类型
export type Action = UpdateAction;

// 初始化数据
export const initState: State = {
  displayNav: true,
  theme: "light",
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.UPDATE:
      return { ...state, [action.key]: action.value };
    default:
      throw new Error("未匹配的操作类型");
  }
}
