export default {
    // Fundamentals
    FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: "0xc201b8c8dd22c779025e16f1825c90e1e6dd6a08",
    FUSE_SAFE_LIQUIDATOR_CONTRACT_ADDRESS: "0x7bc6dA9CB9139F4BF04c1562DE7Cb5fFe18aF007",
    FUSE_FEE_DISTRIBUTOR_CONTRACT_ADDRESS: "0x4AFB2B3DC111D091ca6C46C024d1d2f17BF477e1",
    FUSE_POOL_LENS_CONTRACT_ADDRESS: "0xD6e194aF3d9674b62D1b30Ec676030C23961275e",
    FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS: "0x32ca4E5D75ECb06f33846055652C831f6E7a6924",
    // CEther and CERC20
    COMPTROLLER_IMPLEMENTATION_CONTRACT_ADDRESS: "0x53cc546053a09431c9d1a2b288471680d15000a4",
    CETHER_DELEGATE_CONTRACT_ADDRESS: "0x440253a301b4fc749a24e653fdb11b742e621892",
    CERC20_DELEGATE_CONTRACT_ADDRESS: "0x89971b89e346fc372641a1ae427add6a738df50d",
    // Oracles
    MASTER_PRICE_ORACLE_IMPLEMENTATION_CONTRACT_ADDRESS: "0x59FA438cD0731EBF5F4cDCaf72D4960EFd13FCe6",
    INITIALIZABLE_CLONES_CONTRACT_ADDRESS: "0x94BFbeC0Be156E85D4a7B398Ab70a27bA02D828a",
    PUBLIC_PRICE_ORACLE_CONTRACT_ADDRESSES: {
        MasterPriceOracle: "0x137a6Bf7D4C866fFd430cDd0107dE6C4828Ce54d",
        ChainlinkPriceOracleV2: "0xd1a758149896530a114c7f5e4c4daf093fc184a6",
        FixedETHPriceOracle: "0xf826E4fE62c206Ec51B5744b29C71A2245DD540e",
        GOhmPriceOracleArbitrum: "0xE18eC050838175eFdc4e878B087D986638a1FFa7",
        UniswapTwapPriceOracleV2_SushiSwap_ETH: "0x41fa6c04b8a2d1a30200f39b4714c78c81e0e227",
        UniswapTwapPriceOracleV2_SushiSwap_GOHM: "0x71bc92b8b848c287f82a56efe1f30a439b1976b2",
    },
    PRICE_ORACLE_RUNTIME_BYTECODE_HASHES: {
        MasterPriceOracle: "0x841c8cee670b29a8e8d2d56b6b1706b0a17beffc57ceeaa730d33821a7193eb8",
        ChainlinkPriceOracleV2: "0xe6c58b50e22444dda782858120184cbc86207e51be06e0f747561a8c9eb4c968",
        FixedETHPriceOracle: "0x009b75414e3135a12bb0d9ee0a420f96a41b198df7ee9c4a5667a05187860a1d",
        GOhmPriceOracleArbitrum: "0xce075a561806260b1d4472b68c07b3784c1f5b2065500f2f217085fcf78e4470",
        UniswapTwapPriceOracleV2_SushiSwap: "0x9fd6d9f10e83d15240e17ade5fbacf6ad30dbffa3b3596ebc985cce96f4aaef2",
    },
    ORACLES: ["MasterPriceOracle", "ChainlinkPriceOracleV2"],
    oracles: {
        MasterPriceOracle: {
            address: "0x137a6Bf7D4C866fFd430cDd0107dE6C4828Ce54d",
            bytecodeHash: "0x841c8cee670b29a8e8d2d56b6b1706b0a17beffc57ceeaa730d33821a7193eb8",
            deployable: false,
            oldVersions: {},
        },
        ChainlinkPriceOracleV2: {
            address: "0xd1A758149896530a114C7F5e4c4daf093FC184A6",
            bytecodeHash: "0xe6c58b50e22444dda782858120184cbc86207e51be06e0f747561a8c9eb4c968",
            deployable: false,
            oldVersions: {},
        },
        FixedETHPriceOracle: {
            address: "0xf826E4fE62c206Ec51B5744b29C71A2245DD540e",
            bytecodeHash: "0x009b75414e3135a12bb0d9ee0a420f96a41b198df7ee9c4a5667a05187860a1d",
            deployable: false,
            oldVersions: {},
        },
    },
    DEPLOYABLE_ORACLES: [],
    // // UNI-V2 Oracles (Sushiswap for arbitrum)
    UNISWAP_V2_FACTORY_ADDRESS: "0xc35dadb65012ec5796536bd9864ed8773abc74c4",
    UNISWAP_V2_PAIR_INIT_CODE_HASH: "",
    UNISWAP_TWAP_PRICE_ORACLE_ROOT_CONTRACT_ADDRESS: "",
    UNISWAP_TWAP_PRICE_ORACLE_V2_ROOT_CONTRACT_ADDRESS: "0xb085A25B8Cb99e467cE51C2C0e54f2Cfc4f713a1",
    UNISWAP_TWAP_PRICE_ORACLE_V2_FACTORY_CONTRACT_ADDRESS: "0x49317dEBd1fd9c11A81be18840fea26185DB98Cf",
    // // UNI-V3 Oracles
    UNISWAP_V3_FACTORY_ADDRESS: "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    UNISWAP_V3_TWAP_PRICE_ORACLE_V2_FACTORY_CONTRACT_ADDRESS: "0xdaD6400f0b79F54d833c829B9CE15E88c403F1cd",
    // IRM
    PUBLIC_INTEREST_RATE_MODEL_CONTRACT_ADDRESSES: {
        JumpRateModel_Cream_Stables_Majors: "0xef562dd508f3dbba4b4ad62a869627d379692557",
        JumpRateModel_Fei_TRIBE: "0xFaf37621559Eb801b2276865B381e994c6745b5F",
        JumpRateModel_Fei_DAI: "0x1ce7281ce601d06cf5f47a3023b80ebd73e3b35d",
    },
    // Tokens / ETC
    WETH_ADDRESS: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    REWARDS_DISTRIBUTOR_DELEGATE_CONTRACT_ADDRESS: "0x33c63126155f8710ae82b02a0535c4096583ae66",
    // Legacy
    COINBASE_PRO_REPORTER_ADDRESS: "0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC",
    DAI_POT: "",
    DAI_JUG: "",
    OPEN_ORACLE_PRICE_DATA_CONTRACT_ADDRESS: "",
};
