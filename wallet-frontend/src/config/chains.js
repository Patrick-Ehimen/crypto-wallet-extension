const Ethereum = {
  hex: "0x1",
  name: "Ethereum",
  rpcUrl:
    "https://eth-mainnet.g.alchemy.com/v2/bnkkOugqshHEukLIq8bNz2nj8GEOjl0R",
  ticker: "ETH",
};

const Polygon = {
  hex: "0x89",
  name: "Polygon",
  rpcUrl:
    "https://polygon-mainnet.g.alchemy.com/v2/bnkkOugqshHEukLIq8bNz2nj8GEOjl0R",
  ticker: "Matic",
};

const Arbitrum = {
  hex: "0xa4b1",
  name: "Arbitrum",
  rpcUrl:
    "https://arb-mainnet.g.alchemy.com/v2/bnkkOugqshHEukLIq8bNz2nj8GEOjl0R",
  ticker: "ETH",
};

const SepoliaTestnet = {
  hex: "0xaa36a7",
  name: "Sepolia Testnet",
  rpcUrl:
    "https://eth-sepolia.g.alchemy.com/v2/bnkkOugqshHEukLIq8bNz2nj8GEOjl0R",
  ticker: "SepoliaETH",
};

export const CHAINS_CONFIG = {
  "0x1": Ethereum,
  "0x89": Polygon,
  "0xa4b1": Arbitrum,
  "0xaa36a7": SepoliaTestnet,
};
