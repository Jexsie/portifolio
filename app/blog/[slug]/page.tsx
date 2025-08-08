import type { Metadata } from "next"
import { BlogPostClient } from "./BlogPostClient"

// This stays as a server component for generateStaticParams
export async function generateStaticParams() {
  return [
    { slug: "getting-started-with-hedera" },
    { slug: "contributing-to-eclipse-foundation" },
    { slug: "building-web3-dapps-with-hedera" },
  ]
}

// Server component for metadata generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found - Jessy Ssebuliba",
    }
  }

  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://jessyssebuliba.github.io/portfolio-site'
    : 'http://localhost:3000'

  return {
    title: `${post.title} - Jessy Ssebuliba`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

// Move blog posts data here so both server and client can access it
const blogPosts = {
  "getting-started-with-hedera": {
    title: "Getting Started with Hedera Hashgraph",
    description:
      "A comprehensive guide to building decentralized applications on the Hedera network using JavaScript SDK.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Hedera", "Web3", "Blockchain", "JavaScript"],
    content: `
# Getting Started with Hedera Hashgraph

Hedera Hashgraph is a distributed ledger technology that offers fast, fair, and secure transactions. As a certified Hedera developer, I'll guide you through building your first dApp.

## What Makes Hedera Special?

Hedera uses hashgraph consensus algorithm which provides:
- **High Throughput**: 10,000+ transactions per second
- **Low Fees**: Predictable, low-cost transactions
- **Carbon Negative**: Environmentally sustainable
- **Enterprise Grade**: Built for enterprise adoption

## Setting Up Your Development Environment

First, install the Hedera JavaScript SDK:

\`\`\`bash
npm install @hashgraph/sdk
\`\`\`

## Creating Your First Transaction

Here's how to create a simple HBAR transfer:

\`\`\`javascript
import { Client, AccountId, PrivateKey, TransferTransaction, Hbar } from "@hashgraph/sdk";

const client = Client.forTestnet();
client.setOperator(accountId, privateKey);

const transaction = new TransferTransaction()
    .addHbarTransfer(senderAccountId, new Hbar(-10))
    .addHbarTransfer(receiverAccountId, new Hbar(10));

const response = await transaction.execute(client);
\`\`\`

## Conclusion

Hedera provides a robust platform for building the next generation of decentralized applications. With its unique consensus mechanism and developer-friendly tools, it's an excellent choice for Web3 development.
    `,
  },
  "contributing-to-eclipse-foundation": {
    title: "My Journey Contributing to Eclipse Foundation",
    description:
      "Sharing my experience as an active contributor to Eclipse Foundation projects and the impact of open-source collaboration.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Open Source", "Eclipse Foundation", "Community", "Development"],
    content: `
# My Journey Contributing to Eclipse Foundation

Contributing to open-source projects has been one of the most rewarding aspects of my development career. Here's my experience with the Eclipse Foundation.

## Why Eclipse Foundation?

The Eclipse Foundation hosts some of the most impactful open-source projects in the enterprise space:
- **Eclipse IDE**: The foundation of many developers' workflows
- **Jakarta EE**: Enterprise Java specifications
- **Eclipse Hono**: IoT connectivity platform
- **And many more...**

## My Contributions

Over the past few years, I've contributed to several Eclipse projects:

### Code Contributions
- Bug fixes and feature implementations
- Documentation improvements
- Test coverage enhancements

### Community Involvement
- Participating in community discussions
- Helping new contributors get started
- Code reviews and mentoring

## The Impact of Open Source

Contributing to open-source projects has:
- **Enhanced my skills**: Working with diverse codebases and technologies
- **Built my network**: Connecting with developers worldwide
- **Created impact**: Contributing to tools used by millions

## Getting Started

If you're interested in contributing to Eclipse Foundation projects:

1. **Choose a project** that aligns with your interests
2. **Start small** with documentation or bug fixes
3. **Engage with the community** through forums and mailing lists
4. **Be consistent** in your contributions

## Conclusion

Open-source contribution is not just about code—it's about building a better future for technology together.
    `,
  },
  "building-web3-dapps-with-hedera": {
    title: "Building Web3 DApps with Hedera and React",
    description:
      "Learn how to integrate Hedera Hashgraph with React applications to build powerful decentralized applications.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["React", "Hedera", "Web3", "DApp", "Frontend"],
    content: `
# Building Web3 DApps with Hedera and React

Combining React's powerful frontend capabilities with Hedera's robust blockchain infrastructure creates amazing possibilities for Web3 applications.

## Project Setup

Let's start by setting up a React application with Hedera integration:

\`\`\`bash
npx create-react-app hedera-dapp
cd hedera-dapp
npm install @hashgraph/sdk
\`\`\`

## Wallet Integration

For user interaction, we'll integrate with HashPack wallet:

\`\`\`javascript
import { HashConnect } from 'hashconnect';

const hashconnect = new HashConnect();

const connectWallet = async () => {
  const appMetadata = {
    name: "My Hedera DApp",
    description: "A sample DApp built with React and Hedera",
    icon: "https://example.com/icon.png"
  };
  
  await hashconnect.init(appMetadata);
  const state = await hashconnect.connect();
  return state;
};
\`\`\`

## Smart Contract Interaction

Here's how to interact with Hedera smart contracts:

\`\`\`javascript
import { ContractExecuteTransaction, ContractId } from "@hashgraph/sdk";

const executeContract = async (client, contractId, functionName, params) => {
  const transaction = new ContractExecuteTransaction()
    .setContractId(ContractId.fromString(contractId))
    .setGas(100000)
    .setFunction(functionName, params);
    
  const response = await transaction.execute(client);
  return response;
};
\`\`\`

## State Management

Use React hooks to manage blockchain state:

\`\`\`javascript
const useHederaAccount = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  
  useEffect(() => {
    // Fetch account info and balance
  }, [account]);
  
  return { account, balance };
};
\`\`\`

## Best Practices

1. **Error Handling**: Always handle blockchain errors gracefully
2. **Loading States**: Show loading indicators for blockchain operations
3. **Gas Estimation**: Estimate gas costs before transactions
4. **Security**: Never expose private keys in frontend code

## Conclusion

Building DApps with React and Hedera provides a great developer experience while leveraging enterprise-grade blockchain infrastructure.
    `,
  },
}

// Server component that passes data to client component
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <BlogPostClient slug={slug} blogPosts={blogPosts} />
}
