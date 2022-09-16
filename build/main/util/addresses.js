"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WETH9 = exports.constructSameAddressMap = exports.MULTICALL2_ADDRESS = exports.V3_MIGRATOR_ADDRESS = exports.SWAP_ROUTER_ADDRESS = exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS = exports.TICK_LENS_ADDRESS = exports.ARB_GASINFO_ADDRESS = exports.OVM_GASPRICE_ADDRESS = exports.UNISWAP_MULTICALL_ADDRESSES = exports.QUOTER_V2_ADDRESSES = exports.V3_CORE_FACTORY_ADDRESSES = void 0;
const sdk_core_1 = require("@uniswap/sdk-core");
const v3_sdk_1 = require("@uniswap/v3-sdk");
const chains_1 = require("./chains");
const CELO_V3_CORE_FACTORY_ADDRESSES = '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc';
const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8';
const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204';
exports.V3_CORE_FACTORY_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap(v3_sdk_1.FACTORY_ADDRESS)), { [chains_1.ChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES, [chains_1.ChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES });
exports.QUOTER_V2_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e')), { [chains_1.ChainId.CELO]: CELO_QUOTER_ADDRESSES, [chains_1.ChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES });
exports.UNISWAP_MULTICALL_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984')), { [chains_1.ChainId.CELO]: CELO_MULTICALL_ADDRESS, [chains_1.ChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS });
exports.OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
exports.ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
exports.TICK_LENS_ADDRESS = '0xbfd8137f7d1516D3ea5cA83523914859ec47F573';
exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
exports.SWAP_ROUTER_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
exports.V3_MIGRATOR_ADDRESS = '0xA5644E29708357803b5A882D272c41cC0dF92B34';
exports.MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
function constructSameAddressMap(address, additionalNetworks = []) {
    return chains_1.NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
exports.constructSameAddressMap = constructSameAddressMap;
exports.WETH9 = {
    [chains_1.ChainId.MAINNET]: new sdk_core_1.Token(chains_1.ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.ROPSTEN]: new sdk_core_1.Token(chains_1.ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.RINKEBY]: new sdk_core_1.Token(chains_1.ChainId.RINKEBY, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.GÖRLI]: new sdk_core_1.Token(chains_1.ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.KOVAN]: new sdk_core_1.Token(chains_1.ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.OPTIMISM]: new sdk_core_1.Token(chains_1.ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.OPTIMISTIC_KOVAN]: new sdk_core_1.Token(chains_1.ChainId.OPTIMISTIC_KOVAN, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.ARBITRUM_ONE]: new sdk_core_1.Token(chains_1.ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.ARBITRUM_RINKEBY]: new sdk_core_1.Token(chains_1.ChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUEwQztBQUMxQyw0Q0FBa0Q7QUFFbEQscUNBQXlFO0FBRXpFLE1BQU0sOEJBQThCLEdBQ2xDLDRDQUE0QyxDQUFDO0FBQy9DLE1BQU0scUJBQXFCLEdBQUcsNENBQTRDLENBQUM7QUFDM0UsTUFBTSxzQkFBc0IsR0FBRyw0Q0FBNEMsQ0FBQztBQUUvRCxRQUFBLHlCQUF5QixtQ0FDakMsdUJBQXVCLENBQUMsd0JBQWUsQ0FBQyxLQUMzQyxDQUFDLGdCQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsOEJBQThCLEVBQzlDLENBQUMsZ0JBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSw4QkFBOEIsSUFHeEQ7QUFFVyxRQUFBLG1CQUFtQixtQ0FDM0IsdUJBQXVCLENBQUMsNENBQTRDLENBQUMsS0FDeEUsQ0FBQyxnQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLHFCQUFxQixFQUNyQyxDQUFDLGdCQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUscUJBQXFCLElBRy9DO0FBRVcsUUFBQSwyQkFBMkIsbUNBQ25DLHVCQUF1QixDQUFDLDRDQUE0QyxDQUFDLEtBQ3hFLENBQUMsZ0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxzQkFBc0IsRUFDdEMsQ0FBQyxnQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLHNCQUFzQixJQUdoRDtBQUVXLFFBQUEsb0JBQW9CLEdBQy9CLDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsbUJBQW1CLEdBQUcsNENBQTRDLENBQUM7QUFFbkUsUUFBQSxpQkFBaUIsR0FBRyw0Q0FBNEMsQ0FBQztBQUNqRSxRQUFBLG9DQUFvQyxHQUMvQyw0Q0FBNEMsQ0FBQztBQUNsQyxRQUFBLG1CQUFtQixHQUFHLDRDQUE0QyxDQUFDO0FBQ25FLFFBQUEsbUJBQW1CLEdBQUcsNENBQTRDLENBQUM7QUFDbkUsUUFBQSxrQkFBa0IsR0FBRyw0Q0FBNEMsQ0FBQztBQUkvRSxTQUFnQix1QkFBdUIsQ0FDckMsT0FBVSxFQUNWLHFCQUFnQyxFQUFFO0lBRWxDLE9BQU8sNkNBQW9DLENBQUMsTUFBTSxDQUNoRCxrQkFBa0IsQ0FDbkIsQ0FBQyxNQUFNLENBRUwsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFaRCwwREFZQztBQUVZLFFBQUEsS0FBSyxHQVVkO0lBQ0YsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDMUIsZ0JBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQzFCLGdCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUMxQixnQkFBTyxDQUFDLE9BQU8sRUFDZiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDeEIsZ0JBQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQ3hCLGdCQUFPLENBQUMsS0FBSyxFQUNiLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUMzQixnQkFBTyxDQUFDLFFBQVEsRUFDaEIsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDbkMsZ0JBQU8sQ0FBQyxnQkFBZ0IsRUFDeEIsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQy9CLGdCQUFPLENBQUMsWUFBWSxFQUNwQiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUNuQyxnQkFBTyxDQUFDLGdCQUFnQixFQUN4Qiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0NBQ0YsQ0FBQyJ9