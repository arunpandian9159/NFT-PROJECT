// Marketplace-related type definitions

export interface MarketItem {
  tokenId: bigint;
  seller: string;
  owner: string;
  price: bigint;
  sold: boolean;
}

export interface MarketplaceContextValue {
  uploadToPinata: (file: File) => Promise<string | undefined>;
  checkIfWalletConnected: () => Promise<string | undefined>;
  connectWallet: () => Promise<void>;
  createNFT: (
    name: string,
    price: string,
    image: string,
    description: string,
    router: any
  ) => Promise<void>;
  fetchNFTs: () => Promise<any[] | undefined>;
  fetchMyNFTsOrListedNFTs: (type: string) => Promise<any[] | undefined>;
  buyNFT: (nft: any) => Promise<void>;
  createSale: (
    url: string,
    formInputPrice: string,
    isReselling?: boolean,
    id?: number
  ) => Promise<void>;
  currentAccount: string;
  titleData: string;
  setOpenError: (value: boolean) => void;
  openError: boolean;
  error: string;
  accountBalance: string;
}
