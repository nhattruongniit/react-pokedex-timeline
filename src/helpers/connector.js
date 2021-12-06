import { InjectedConnector } from "@web3-react/injected-connector";

// 1: eth mainnet
// 4: eth testnet
export const injected = new InjectedConnector({
  supportedChainIds: [
    1,  // eth mainnet
    4,  // rinkeby test net
    42  // kovan
  ]
})