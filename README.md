# NFT Marketplace

A full-stack decentralized NFT Marketplace application where users can discover, create, buy, and sell NFTs. Built with Next.js, Solidity, Hardhat, and Ethers.js.

## 🌟 Features

- **Create & List NFTs**: Mint unique NFTs with metadata stored on IPFS (via Pinata) and list them for sale on the marketplace.
- **Buy & Sell**: Seamlessly purchase listed NFTs or resell your own collected items.
- **Wallet Connection**: Integrated with Web3Modal for connecting MetaMask and other crypto wallets.
- **Dashboard**: View your created NFTs, listed items, and digital assets you own.
- **Resell Capability**: Option to re-list purchased NFTs for sale at a new price.
- **Responsive Design**: Modern UI/UX built with React and Next.js.

## 🛠️ Technology Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: CSS / Styled Components / Framer Motion
- **Web3 Integration**:
  - [Ethers.js (v6)](https://docs.ethers.org/v6/) for blockchain interaction
  - [Web3Modal](https://web3modal.com/) for wallet connections
- **State Management**: React Context API

### Smart Contract

- **Language**: [Solidity](https://soliditylang.org/) (v0.8.24)
- **Development Environment**: [Hardhat](https://hardhat.org/)
- **Standard**: ERC-721 (using OpenZeppelin)
- **Storage**: IPFS via [Pinata](https://www.pinata.cloud/)

## 📂 Project Structure

```bash
NFT-PROJECT/
├── contracts/              # Solidity smart contracts
│   └── NFTMarketplace.sol  # Main marketplace contract
├── scripts/                # Deployment scripts
│   └── deploy.js           # Deploy script for Hardhat
├── src/
│   ├── components/         # Reusable React components
│   ├── context/            # Global state (Wallet, Contract connectivity)
│   ├── pages/              # Next.js pages (Routes)
│   └── styles/             # CSS files
├── test/                   # Smart contract tests
├── hardhat.config.js       # Hardhat configuration
└── package.json            # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MetaMask](https://metamask.io/) browser extension
- [Pinata](https://www.pinata.cloud/) Account (for IPFS keys)
- Initialized local blockchain (e.g., Hardhat node) or Testnet RPC URL

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd NFT-PROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### ⛓️ Smart Contract Setup

1. **Start the local Hardhat node**

   ```bash
   npx hardhat node
   ```

2. **Deploy the Smart Contract**
   Open a new terminal and run:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

   _Note: Taking note of the deployed contract address is crucial. It usually updates automatically in `src/context/constants.js` or you may need to update it manually._

### 💻 Frontend Setup

1. **Environment Variables**
   Create a `.env.local` file in the root directory and add your Pinata credentials and other API keys if necessary (check `.env.example` if available, or code references):

   ```env
   NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
   NEXT_PUBLIC_PINATA_SECRET_KEY=your_pinata_secret_key
   ```

2. **Run the Application**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Visit `http://localhost:3000` to interact with the application.

## 📝 Usage

1. **Connect Wallet**: Click the connect button to link your MetaMask wallet.
2. **Create NFT**: Navigate to the "Upload NFT" section, upload an image, set a name, description, and price.
3. **Browse**: Go to the homepage or search page to see all listed NFTs.
4. **Buy**: Click on an NFT to view details and purchase it.
5. **Dashboard**: Check your profile to see NFTs you own or have listed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
