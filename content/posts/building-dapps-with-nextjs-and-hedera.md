---
title: "Building dApps with Next.js and Hedera"
description: "Learn how to build decentralized applications using Next.js as the frontend framework and Hedera Hashgraph as the distributed ledger."
date: "2026-04-28"
tags: ["hedera", "nextjs", "dapps", "web3"]
---

## Why Hedera?

Hedera Hashgraph offers unique advantages over traditional blockchain platforms:

- **Speed** – Thousands of transactions per second with 3-5 second finality
- **Low cost** – Predictable, low fees (fractions of a cent)
- **Energy efficient** – Carbon-negative network
- **Enterprise-grade** – Governed by global organizations

## Project Setup

Start by creating a new Next.js project and installing the Hedera SDK:

```bash
npx create-next-app@latest my-hedera-dapp
cd my-hedera-dapp
npm install @hashgraph/sdk
```

## Connecting to Hedera

```typescript
import { Client, AccountId, PrivateKey } from "@hashgraph/sdk";

const client = Client.forTestnet();
client.setOperator(
  AccountId.fromString(process.env.HEDERA_ACCOUNT_ID!),
  PrivateKey.fromStringECDSA(process.env.HEDERA_PRIVATE_KEY!),
);
```

## Creating a Token

One of Hedera's most powerful features is the native Hedera Token Service (HTS):

```typescript
import { TokenCreateTransaction, TokenType } from "@hashgraph/sdk";

const transaction = new TokenCreateTransaction()
  .setTokenName("My Token")
  .setTokenSymbol("MTK")
  .setTokenType(TokenType.FungibleCommon)
  .setDecimals(2)
  .setInitialSupply(10000);

const response = await transaction.execute(client);
const receipt = await response.getReceipt(client);
console.log("Token ID:", receipt.tokenId?.toString());
```

## Frontend Integration

With Next.js, you can create server actions that securely interact with Hedera while keeping private keys safe on the server side.

## Conclusion

The combination of Next.js and Hedera provides a powerful stack for building production-ready decentralized applications with excellent user experience and performance.
