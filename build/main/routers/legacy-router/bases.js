"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_BASES = exports.ADDITIONAL_BASES = exports.BASES_TO_CHECK_TRADES_AGAINST = void 0;
const token_provider_1 = require("../../providers/token-provider");
const chains_1 = require("../../util/chains");
const BASES_TO_CHECK_TRADES_AGAINST = (_tokenProvider) => {
    return {
        [chains_1.ChainId.MAINNET]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.MAINNET],
            token_provider_1.DAI_MAINNET,
            token_provider_1.USDC_MAINNET,
            token_provider_1.USDT_MAINNET,
            token_provider_1.WBTC_MAINNET,
        ],
        [chains_1.ChainId.ROPSTEN]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ROPSTEN]],
        [chains_1.ChainId.RINKEBY]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.RINKEBY]],
        [chains_1.ChainId.GÖRLI]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GÖRLI]],
        [chains_1.ChainId.KOVAN]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.KOVAN]],
        [chains_1.ChainId.OPTIMISM]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISM]],
        [chains_1.ChainId.OPTIMISTIC_KOVAN]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISTIC_KOVAN],
        ],
        [chains_1.ChainId.ARBITRUM_ONE]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_ONE]],
        [chains_1.ChainId.ARBITRUM_RINKEBY]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_RINKEBY],
        ],
        [chains_1.ChainId.POLYGON]: [token_provider_1.WMATIC_POLYGON],
        [chains_1.ChainId.POLYGON_MUMBAI]: [token_provider_1.WMATIC_POLYGON_MUMBAI],
        [chains_1.ChainId.CELO]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.CELO]],
        [chains_1.ChainId.CELO_ALFAJORES]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.CELO_ALFAJORES]],
        [chains_1.ChainId.GNOSIS]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GNOSIS]],
        [chains_1.ChainId.MOONBEAM]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.MOONBEAM]],
        [chains_1.ChainId.SMART_CHAIN]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.SMART_CHAIN]],
        [chains_1.ChainId.AVALANCHE]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.AVALANCHE]],
        [chains_1.ChainId.FANTOM]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.FANTOM]],
        [chains_1.ChainId.HARMONY]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.HARMONY]],
        [chains_1.ChainId.HARMONY_TESTNET]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.HARMONY_TESTNET]],
        [chains_1.ChainId.AURORA]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.AURORA]],
        [chains_1.ChainId.KLAYTN]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.KLAYTN]]
    };
};
exports.BASES_TO_CHECK_TRADES_AGAINST = BASES_TO_CHECK_TRADES_AGAINST;
const getBasePairByAddress = async (tokenProvider, _chainId, fromAddress, toAddress) => {
    const accessor = await tokenProvider.getTokens([toAddress]);
    const toToken = accessor.getTokenByAddress(toAddress);
    if (!toToken)
        return {};
    return {
        [fromAddress]: [toToken],
    };
};
const ADDITIONAL_BASES = async (tokenProvider) => {
    return {
        [chains_1.ChainId.MAINNET]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x561a4717537ff4AF5c687328c0f7E90a319705C0', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', '0x956F47F50A910163D8BF957Cf5846D573E7f87CA'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x853d955acef822db058eb8505911ed77f175b99e', '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0', '0x853d955acef822db058eb8505911ed77f175b99e'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d', '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'))),
    };
};
exports.ADDITIONAL_BASES = ADDITIONAL_BASES;
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
const CUSTOM_BASES = async (tokenProvider) => {
    return {
        [chains_1.ChainId.MAINNET]: Object.assign(Object.assign({}, (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', token_provider_1.DAI_MAINNET.address))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', chains_1.WRAPPED_NATIVE_CURRENCY[1].address))),
    };
};
exports.CUSTOM_BASES = CUSTOM_BASES;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVycy9sZWdhY3ktcm91dGVyL2Jhc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1FQVF3QztBQUN4Qyw4Q0FBcUU7QUFNOUQsTUFBTSw2QkFBNkIsR0FBRyxDQUMzQyxjQUE4QixFQUNkLEVBQUU7SUFDbEIsT0FBTztRQUNMLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBRTtZQUN6Qyw0QkFBVztZQUNYLDZCQUFZO1lBQ1osNkJBQVk7WUFDWiw2QkFBWTtTQUNiO1FBQ0QsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUM5RCxDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQzlELENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDMUQsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUMxRCxDQUFDLGdCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ2hFLENBQUMsZ0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzFCLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsZ0JBQWdCLENBQUU7U0FDbkQ7UUFDRCxDQUFDLGdCQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLFlBQVksQ0FBRSxD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