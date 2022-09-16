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
  PopulatedTransaction,
  Signer,
} from "ethers";
import type { TypedEvent, TypedEventFilter, TypedListener } from "./common";

interface QuoterV2Interface extends ethers.utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "factory()": FunctionFragment;
    "quoteExactInput(bytes,uint256)": FunctionFragment;
    "quoteExactInputSingle((address,address,uint256,uint24,uint160))": FunctionFragment;
    "quoteExactOutput(bytes,uint256)": FunctionFragment;
    "quoteExactOutputSingle((address,address,uint256,uint24,uint160))": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteExactInput",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutput",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export class QuoterV2 extends BaseContract {
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

  interface: QuoterV2Interface;

  functions: {
    WETH9(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  quoteExactInput(
    path: BytesLike,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quoteExactInputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      amountIn: BigNumberish;
      fee: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quoteExactOutput(
    path: BytesLike,
    amountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quoteExactOutputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      fee: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], number[], BigNumber] & {
        amountOut: BigNumber;
        sqrtPriceX96AfterList: BigNumber[];
        initializedTicksCrossedList: number[];
        gasEstimate: BigNumber;
      }
    >;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        amountOut: BigNumber;
        sqrtPriceX96After: BigNumber;
        initializedTicksCrossed: number;
        gasEstimate: BigNumber;
      }
    >;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], number[], BigNumber] & {
        amountIn: BigNumber;
        sqrtPriceX96AfterList: BigNumber[];
        initializedTicksCrossedList: number[];
        gasEstimate: BigNumber;
      }
    >;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        amountIn: BigNumber;
        sqrtPriceX96After: BigNumber;
        initializedTicksCrossed: number;
        gasEstimate: BigNumber;
      }
    >;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
