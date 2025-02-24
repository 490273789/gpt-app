import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import importOrder from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: { import: importOrder },
    rules: {
      "import/order": [
        "warn",
        {
          //按照分组顺序进行排序
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "internal",
            "object",
            "type",
          ],
          //通过路径自定义分组
          pathGroups: [
            {
              pattern: "react*", //对含react的包进行匹配
              group: "builtin", //将其定义为builtin模块
              position: "before", //定义在builtin模块中的优先级
            },
            { pattern: "next*", group: "builtin", position: "before" },
            {
              pattern: "@/components/common/**",
              group: "parent",
              position: "before",
            },
            { pattern: "@/components/**", group: "parent", position: "before" },
            { pattern: "@/reducers/**", group: "parent", position: "after" },
            { pattern: "@/utils/**", group: "parent", position: "after" },
          ],
          //将react包不进行排序，并放在前排，可以保证react包放在第一行
          pathGroupsExcludedImportTypes: ["react"],
          // "newlines-between": "always", //每个分组之间换行
          //根据字母顺序对每个组内的顺序进行排序
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];

export default eslintConfig;
