# QuantumX - Multi-Chain DeFi RollApp

**QuantumX** is a next-generation multi-chain DeFi RollApp designed to deliver seamless **cross-chain lending**, **liquidity aggregation**, and **yield optimization**. Built on **Wormhole’s interoperability infrastructure**, QuantumX empowers users to transact and earn yield across major chains including **Ethereum**, **Solana**, **BNB Chain**, **Polygon**, **Avalanche**, and more.

---

## 🚀 Key Features

- 🔄 **Cross-Chain Lending & Borrowing**  
  Lend assets on one chain and borrow on another without friction.

- 💧 **Liquidity Aggregation**  
  Optimize yields by dynamically routing funds across top DeFi protocols.

- ⚙️ **xCall Integration**  
  Execute smart contract functions across chains with no token wrapping.

- 🔒 **Non-Custodial & Permissionless**  
  Your keys, your assets. Fully trustless.

- 🧱 **Modular & Scalable Architecture**  
  Built for composability and future growth.

---

## ⚙️ How It Works

QuantumX utilizes **Wormhole’s xCall API** and **Token Bridge** to achieve true cross-chain functionality:

1. **Asset Transfers**  
   Users deposit tokens on Chain A, then interact with protocols on Chain B.

2. **Liquidity Pools**  
   Aggregated across chains, with intelligent allocation to the highest yield opportunities.

3. **Smart Contract Execution**  
   Transactions are processed across chains via Wormhole's message-passing layer.

---

## 🌐 Supported Chains

- Ethereum (EVM)
- Solana
- BNB Chain
- Polygon
- Avalanche
- Arbitrum & Optimism (Coming Soon)

---

## 🧰 Tech Stack

| Layer         | Tech                        |
|---------------|-----------------------------|
| Frontend      | React, Next.js, TailwindCSS |
| Backend       | Node.js, Express            |
| Smart Contracts | Solidity (EVM), Rust (Solana) |
| Interoperability | Wormhole SDK, xCall API, Token Bridge |
| Storage       | IPFS / Filecoin             |

---

## 🛠️ Installation

### Prerequisites

- Node.js & npm
- Wallet (MetaMask, Phantom, etc.)

### Steps

```bash
# Clone the repo
git clone https://github.com/your-repo/quantumx.git
cd quantumx

# Install dependencies
npm install

# Run the app
npm run dev
