import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.19",
  networks: {
    kaia: {
      url: process.env.KAIA_RPC_URL || "https://public-en-kairos.node.kaia.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    kairos: {
      url: "https://public-en-kairos.node.kaia.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    mainnet: {
      url: "https://public-en.node.kaia.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: {
      kaia: process.env.KAIASCAN_API_KEY || "",
      kairos: process.env.KAIASCAN_API_KEY || "",
      mainnet: process.env.KAIASCAN_API_KEY || ""
    },
    customChains: [
      {
        network: "kaia",
        chainId: 1001,
        urls: {
          apiURL: "https://api.kaia.kaiascan.io/api",
          browserURL: "https://kairos.kaiascan.io"
        }
      },
      {
        network: "kairos",
        chainId: 1001,
        urls: {
          apiURL: "https://api.kaia.kaiascan.io/api",
          browserURL: "https://kairos.kaiascan.io"
        }
      },
      {
        network: "mainnet",
        chainId: 8217,
        urls: {
          apiURL: "https://api.kaia.kaiascan.io/api",
          browserURL: "https://kaiascan.io"
        }
      }
    ]
  }
};

export default config;