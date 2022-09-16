/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  UniswapV2Migrator,
  UniswapV2MigratorInterface,
} from "../UniswapV2Migrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryV1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610b3f380380610b3f8339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c610ab8610087600039806103ee5280610484528061051652508060905250610ab86000f3fe6080604052600436106100225760003560e01c8063b7df1d251461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b5061008a600480360360a081101561005157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135909116906080013561008c565b005b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306f2bf62876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561012b57600080fd5b505afa15801561013f573d6000803e3d6000fd5b505050506040513d602081101561015557600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152336004820152905191925060009173ffffffffffffffffffffffffffffffffffffffff8416916370a08231916024808301926020929190829003018186803b1580156101c957600080fd5b505afa1580156101dd573d6000803e3d6000fd5b505050506040513d60208110156101f357600080fd5b5051604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052905191925073ffffffffffffffffffffffffffffffffffffffff8416916323b872dd916064808201926020929091908290030181600087803b15801561027457600080fd5b505af1158015610288573d6000803e3d6000fd5b505050506040513d602081101561029e57600080fd5b505161030b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015290519081900360640190fd5b604080517ff88bf15a0000000000000000000000000000000000000000000000000000000081526004810183905260016024820181905260448201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648201528151600092839273ffffffffffffffffffffffffffffffffffffffff87169263f88bf15a9260848084019391929182900301818787803b1580156103b057600080fd5b505af11580156103c4573d6000803e3d6000fd5b505050506040513d60408110156103da57600080fd5b5080516020909101519092509050610413897f00000000000000000000000000000000000000000000000000000000000000008361056f565b604080517ff305d71900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b8116600483015260248201849052604482018b9052606482018a9052888116608483015260a48201889052915160009283927f00000000000000000000000000000000000000000000000000000000000000009091169163f305d71991879160c480830192606092919082900301818588803b1580156104cf57600080fd5b505af11580156104e3573d6000803e3d6000fd5b50505050506040513d60608110156104fa57600080fd5b50805160209091015190925090508183111561054e5761053c8b7f0000000000000000000000000000000000000000000000000000000000000000600061056f565b6105498b3384860361074c565b610562565b808411156105625761056233828603610922565b5050505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b6020831061064557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610608565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146106a7576040519150601f19603f3d011682016040523d82523d6000602084013e6106ac565b606091505b50915091508180156106da5750805115806106da57508080602001905160208110156106d757600080fd5b50515b61074557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5472616e7366657248656c7065723a20415050524f56455f4641494c45440000604482015290519081900360640190fd5b5050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b6020831061082257805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016107e5565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610884576040519150601f19603f3d011682016040523d82523d6000602084013e610889565b606091505b50915091508180156108b75750805115806108b757508080602001905160208110156108b457600080fd5b50515b61074557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b6020831061099957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161095c565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146109fb576040519150601f19603f3d011682016040523d82523d6000602084013e610a00565b606091505b5050905080610a5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610a606023913960400191505060405180910390fd5b50505056fe5472616e7366657248656c7065723a204554485f5452414e534645525f4641494c4544a26469706673582212202768d5253768a1aad1a799af33f41e01a2eadb3b0e507551a0be190be21184ca64736f6c63430006060033";

export class UniswapV2Migrator__factory extends ContractFactory {
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
    _factoryV1: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2Migrator> {
    return super.deploy(
      _factoryV1,
      _router,
      overrides || {}
    ) as Promise<UniswapV2Migrator>;
  }
  getDeployTransaction(
    _factoryV1: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factoryV1, _router, overrides || {});
  }
  attach(address: string): UniswapV2Migrator {
    return super.attach(address) as UniswapV2Migrator;
  }
  connect(signer: Signer): UniswapV2Migrator__factory {
    return super.connect(signer) as UniswapV2Migrator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2MigratorInterface {
    return new utils.Interface(_abi) as UniswapV2MigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Migrator {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Migrator;
  }
}
