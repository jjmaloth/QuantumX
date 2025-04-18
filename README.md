# QuantumX DApp

> A multi-chain DeFi prototype built with **Reown AppKit** and **Wormhole Connect**, enabling asset bridging and wallet interactions across Ethereum and Solana.

## 🔥 Live Demo

🚀 [QuantumX DApp – Coming Soon via Vercel](https://quantumx.vercel.app) *(pending deployment)*

## 🧠 Project Overview

QuantumX is a decentralized application that aims to enable seamless cross-chain DeFi interactions between EVM and non-EVM chains using Wormhole's powerful interoperability tooling. This proof-of-concept uses:

- 🧩 **Reown AppKit** – For frontend DApp scaffolding.
- 🔗 **Wormhole Connect** – For bridging assets cross-chain.
- 🦊 **wagmi + ethers.js** – For wallet management and ETH balance fetch.

## ⚙️ Features

- 🌉 Cross-chain asset bridge (Ethereum → Solana)
- 👛 Wallet connect/disconnect with MetaMask
- 🪙 Real-time ETH balance display
- 💡 Ready for integration with more DeFi modules

## 🧪 Tech Stack

| Layer         | Technology                              |
|---------------|------------------------------------------|
| Frontend      | React + Tailwind CSS                    |
| Wallet        | wagmi, InjectedConnector (MetaMask)     |
| Web3 Utility  | ethers.js                               |
| Cross-chain   | @wormhole-foundation/wormhole-connect   |
| DApp Toolkit  | Reown AppKit                            |
| Deployment    | Vercel                                   |

## 🧱 Architecture

- `App.jsx`: Main DApp structure
  - `WormholeConnect`: Handles bridging UI
  - `wagmi`: Manages wallet connection
  - `ethers`: Gets user ETH balance
- Fully responsive UI with minimal styling via Tailwind.

## 💡 Unique Value Proposition

While several bridge UIs exist, QuantumX combines:

- 🔁 **Live wallet data + bridge in one interface**
- 🧠 **Minimal, composable app kit for rapid development**
- 🌐 **Multi-chain ready** for additional DeFi logic

## 🧑‍💻 Team

**Team Name:** QuantumX  
**Developer:** [@jjmaloth](https://github.com/jjmaloth)  
**Status:** Solo founder & full-stack DApp developer

## ✅ TODOs

- [ ] Deploy live on Vercel
- [ ] Add NFT minting logic
- [ ] Expand bridge support to more chains
- [ ] Add transaction history panel

## 🤝 Built For

> 🛸 **Sigma Wormhole Builder Program** – Pushing boundaries in cross-chain DApps using Wormhole infrastructure.

---

Built with ❤️ by QuantumX — future of composable DeFi.
