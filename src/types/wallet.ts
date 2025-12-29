// Wallet-related type definitions

export interface WalletState {
  currentAccount: string;
  accountBalance: string;
  isConnected: boolean;
}

export interface NetworkConfig {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export type SupportedNetwork = "polygon_amoy" | "polygon" | "localhost";

export interface Creator {
  seller: string;
  total: number;
}
