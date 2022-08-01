import { ethers } from "hardhat";
import { DeploymentsExtension } from "hardhat-deploy/dist/types";
import { BaseConfig } from "./BaseConfig";
import { CraftFactory } from "./CraftFactory";
import { CraftformGlobal, ICraftformHelper } from "../../CraftformHelper";
import { Network } from "hardhat/types";
import { DeployArgsBase } from "../types";
import { BaseCraft } from "./BaseCraft";

export class CraftHelper implements ICraftformHelper {
    public network: Network
    // from @nomiclabs/hardhat-ethers
    public ethers: typeof ethers
    // from hardhat-deploy
    public deployments: DeploymentsExtension;

    /**
     * @deprecated
     */
    public _global:CraftformGlobal = {
        relations: {},
        configs: []
    };

    constructor(
        _ethers: typeof ethers,
        _deployments: DeploymentsExtension,
        _network: Network
    ) { 
        this.ethers = _ethers;
        this.deployments = _deployments;
        this.network = _network;
    }
    
    public contract<
        Config extends BaseConfig,
        Craft extends BaseCraft<Config>,
        DeployArgs extends DeployArgsBase
    >(contract: string): CraftFactory<Config, Craft, DeployArgs> {
        const config = this._global.configs.find(c => c.contract === contract)
        if(!config)
            throw Error(`CraftformHelper:: config ${contract} not found.`)
        const relations = this._global.relations[contract]
        return new CraftFactory(this, config, relations || [])
    }
}