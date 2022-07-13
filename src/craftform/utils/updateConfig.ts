import fs from "fs-extra";
import { getConfigList } from "./getConfigList";
import { getConfigFilename } from "./getPath";
import { UpdateConfigTarget, Versioning } from "../../types";
import { BaseConfig } from "../BaseConfig";


export function _updateConfig<Config extends BaseConfig>(
  { chain, contract, ...target }: UpdateConfigTarget,
  data: Partial<Config>,
  versioning: Versioning
) {
  const filename = getConfigFilename({ chain, contract });
  const configs = getConfigList<Config>({ chain, contract });

  const searchFunc = (c:Config):boolean =>{
    return Object
      .entries(target)
      .every(([key, value]) => {
        if(value === undefined)
          return true;
        return c[key as keyof typeof target] === value
      })
  }

  const targets = configs.filter(searchFunc)

  if(targets.length > 1){
    throw Error("_updateConfig:: More than one update target.");
  }
  else if(targets.length === 0){
    throw Error("_updateConfig::Config not found.");
  }

  const targetIndex = configs.findIndex(searchFunc);
  // assert targetIndex > -1

  // Manange Versioning
  if(versioning === 'maintain'){
    Object.assign(configs[targetIndex], data);
  } else {
    const clone = {}
    Object.assign(
      clone, 
      configs[targetIndex], 
      data, 
      {version: +configs[targetIndex] + 1}
    )
    configs.push(clone)
  }
  

  fs.writeFileSync(filename, JSON.stringify(configs, null, 2), {
    encoding: "utf-8",
    flag: "w",
  });

  return configs[targetIndex];
}
