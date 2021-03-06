import fs from "fs-extra";
import { getConfigFilename } from "./getPath";
import { ConfigVersion, GetConfigProps } from "../../types";
import { BaseConfig } from "../BaseConfig";


export function _getConfig<Config extends BaseConfig>(target: GetConfigProps):Config | null {
  if(!target.address && !target.alias)
    throw Error("_getConfig:: Either address or alias must be specified.")
  const filename = getConfigFilename(target);

  // Here:: can throw error when file not exists
  let configs;
  try {
    configs = JSON.parse(
      fs.readFileSync(filename, { encoding: "utf-8", flag: "r" })
    ) as Config[];
  } catch (error) {
    return null;
  }

  // default version: latest
  const version:ConfigVersion = target.version || 'latest'

  // address specified case
  // alias specified case
  const targetConfigs = target.alias ?
    configs.filter((c) => c.alias === target.alias)
    :
    configs.filter((c) => c.address === target.address);

  if(version === 'latest'){
    return targetConfigs.sort((a, b) => +b.version - +a.version)[0]
  }
  else {
    return targetConfigs.find(c => +c.version === target.version) || null
  }
}
