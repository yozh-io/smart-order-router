import axios from 'axios';
import { BigNumber } from 'ethers';
import { log } from '../util/log';

export type GasPrice = {
  gasPriceWei: BigNumber;
  blockNumber: number;
};

export abstract class IGasPriceProvider {
  public abstract getGasPrice(): Promise<GasPrice>;
}

// Gas prices from ethgasstation are in x10 Gwei. Must divide by 10 to use.
export type ETHGasStationResponse = {
  fast: number;
  fastest: number;
  safeLow: number;
  average: number;
  block_time: number;
  blockNum: number;
  speed: number;
  safeLowWait: number;
  avgWait: number;
  fastWait: number;
  fastestWait: number;
};

export class ETHGasStationInfoProvider extends IGasPriceProvider {
  private url: string;
  constructor(url: string) {
    super();
    this.url = url;
  }

  public async getGasPrice(): Promise<GasPrice> {
    log.info(`About to get gas prices from gas station ${this.url}`);
    const response = await axios.get<ETHGasStationResponse>(this.url);
    const { data: gasPriceResponse, status } = response;

    if (status != 200) {
      log.error({ response }, `Unabled to get gas price from ${this.url}.`);

      throw new Error(`Unable to get gas price from ${this.url}`);
    }

    // Gas prices from ethgasstation are in GweiX10.
    const gasPriceWei = BigNumber.from(gasPriceResponse.fast)
      .div(BigNumber.from(10))
      .mul(BigNumber.from(10).pow(9));

    log.info(
      `Gas price in wei: ${gasPriceWei} as of block ${gasPriceResponse.blockNum}`
    );

    return { gasPriceWei: gasPriceWei, blockNumber: gasPriceResponse.blockNum };
  }
}
