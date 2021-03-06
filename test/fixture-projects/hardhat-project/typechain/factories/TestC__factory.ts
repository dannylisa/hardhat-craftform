/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestC, TestCInterface } from "../TestC";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "u1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "a1",
        type: "address",
      },
      {
        internalType: "string",
        name: "s1",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610447380380610447833981810160405281019061003291906101ce565b8260008190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060029080519060200190610090929190610099565b505050506103fa565b8280546100a5906102fa565b90600052602060002090601f0160209004810192826100c7576000855561010e565b82601f106100e057805160ff191683800117855561010e565b8280016001018555821561010e579182015b8281111561010d5782518255916020019190600101906100f2565b5b50905061011b919061011f565b5090565b5b80821115610138576000816000905550600101610120565b5090565b600061014f61014a8461025a565b610235565b90508281526020810184848401111561016757600080fd5b6101728482856102c7565b509392505050565b600081519050610189816103cc565b92915050565b600082601f8301126101a057600080fd5b81516101b084826020860161013c565b91505092915050565b6000815190506101c8816103e3565b92915050565b6000806000606084860312156101e357600080fd5b60006101f1868287016101b9565b93505060206102028682870161017a565b925050604084015167ffffffffffffffff81111561021f57600080fd5b61022b8682870161018f565b9150509250925092565b600061023f610250565b905061024b828261032c565b919050565b6000604051905090565b600067ffffffffffffffff8211156102755761027461038c565b5b61027e826103bb565b9050602081019050919050565b60006102968261029d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156102e55780820151818401526020810190506102ca565b838111156102f4576000848401525b50505050565b6000600282049050600182168061031257607f821691505b602082108114156103265761032561035d565b5b50919050565b610335826103bb565b810181811067ffffffffffffffff821117156103545761035361038c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6103d58161028b565b81146103e057600080fd5b50565b6103ec816102bd565b81146103f757600080fd5b50565b603f806104086000396000f3fe6080604052600080fdfea264697066735822122036e0e2451c128f7fbc324ff4db2decef8669ced11ce74ad3ab9b5dc52d6e803264736f6c63430008040033";

export class TestC__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    u1: BigNumberish,
    a1: string,
    s1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestC> {
    return super.deploy(u1, a1, s1, overrides || {}) as Promise<TestC>;
  }
  getDeployTransaction(
    u1: BigNumberish,
    a1: string,
    s1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(u1, a1, s1, overrides || {});
  }
  attach(address: string): TestC {
    return super.attach(address) as TestC;
  }
  connect(signer: Signer): TestC__factory {
    return super.connect(signer) as TestC__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCInterface {
    return new utils.Interface(_abi) as TestCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TestC {
    return new Contract(address, _abi, signerOrProvider) as TestC;
  }
}
