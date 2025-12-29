// NFT-related type definitions

export interface NFT {
  tokenId: number;
  seller: string;
  owner: string;
  price: string;
  image: string;
  name: string;
  description: string;
  tokenURI: string;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
}

export interface CreateNFTInput {
  name: string;
  price: string;
  image: string;
  description: string;
}
