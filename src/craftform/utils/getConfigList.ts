import fs from "fs-extra";

import { BaseCraft } from "../class/BaseCraft";

import { getConfigFilename } from "./getPath";
import { ConfigTarget } from "./types";

export function getConfigList<Config extends BaseCraft>(target: ConfigTarget) {
  const filename = getConfigFilename(target);
  try {
    return JSON.parse(
      fs.readFileSync(filename, { encoding: "utf-8", flag: "r" })
    ) as Config[];
  } catch (error) {
    return [];
  }
}
