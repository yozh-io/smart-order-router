/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { FunctionFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  CallOverrides,
  ContractTransaction,
  ethers,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
} from "ethers";
import type { TypedEvent, TypedEventFilter, TypedListener } from "./common";

interface V3SwapRouterInterface extends ethers.utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)": FunctionFragment;
    "exactInput((bytes,address,uint256,uint256))": FunctionFragment;
    "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
    "exactOutput((bytes,address,uint256,uint256))": FunctionFragment;
    "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
    "factory()": FunctionFragment;
    "pull(address,uint256)": FunctionFragment;
    "refundETH()": FunctionFragment;
    "sweepToken(address,uint256,address)": FunctionFragment;
    "sweepTokenWithFee(address,uint256,uint256,address)": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    "unwrapWETH9(uint256,address)": FunctionFragment;
    "unwrapWETH9WithFee(uint256,address,uint256,address)": FunctionFragment;
    "wrapETH(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkOracleSlippage",
    values: [BytesLike[], BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInput",
    values: [
      {
        path: BytesLike;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [
      {
        path: BytesLike;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pull",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sweepToken",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepTokenWithFee",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWETH9",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWETH9WithFee",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapETH",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkOracleSlippage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sweepTokenWithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwrapWETH9",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwrapWETH9WithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapETH", data: BytesLike): Result;

  events: {};
}

export class V3SwapRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: V3SwapRouterInterface;

  functions: {
    WETH9(overrides?: CallOverrides): Promise<[string]>;

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    refundETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrapETH(
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
    paths: BytesLike[],
    amounts: BigNumberish[],
    maximumTickDivergence: BigNumberish,
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkOracleSlippage(bytes,uint24,uint32)"(
    path: BytesLike,
    maximumTickDivergence: BigNumberish,
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  exactInput(
    params: {
      path: BytesLike;
      recipient: string;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactInputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      fee: BigNumberish;
      recipient: string;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactOutput(
    params: {
      path: BytesLike;
      recipient: string;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactOutputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      fee: BigNumberish;
      recipient: string;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  pull(
    token: string,
    value: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  refundETH(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sweepToken(address,uint256,address)"(
    token: string,
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sweepToken(address,uint256)"(
    token: string,
    amountMinimum: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sweepTokenWithFee(address,uint256,uint256,address)"(
    token: string,
    amountMinimum: BigNumberish,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sweepTokenWithFee(address,uint256,address,uint256,address)"(
    token: string,
    amountMinimum: BigNumberish,
    recipient: string,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unwrapWETH9(uint256,address)"(
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unwrapWETH9(uint256)"(
    amountMinimum: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unwrapWETH9WithFee(uint256,address,uint256,address)"(
    amountMinimum: BigNumberish,
    recipient: string,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unwrapWETH9WithFee(uint256,uint256,address)"(
    amountMinimum: BigNumberish,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrapETH(
    value: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    refundETH(overrides?: CallOverrides): Promise<void>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wrapETH(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    refundETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrapETH(
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    refundETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrapETH(
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
