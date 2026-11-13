export const EMAIL = "jessiessebuliba@gmail.com";
export const PHONE = { href: "tel:+256754544829", label: "+256 754 544829" };
export const CV_URL = "/jessy-ssebuliba-cv.pdf";

export interface SocialLink {
  label: string;
  href: string;
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jexsie" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jexsie" },
  { label: "X", href: "https://x.com/amjexsie" },
  { label: "Instagram", href: "https://instagram.com/amjexsie" },
  { label: "Cyfrin", href: "https://profiles.cyfrin.io/u/jexsie" },
];

export interface NavSection {
  id: string;
  num: string;
  label: string;
}

export const sections: NavSection[] = [
  { id: "intro", num: "0.0.1", label: "Intro" },
  { id: "about", num: "0.0.2", label: "About" },
  { id: "stack", num: "0.0.3", label: "Stack" },
  { id: "works", num: "0.0.4", label: "Work" },
  { id: "open-source", num: "0.0.5", label: "Open source" },
  { id: "experience", num: "0.0.6", label: "Experience" },
  { id: "recognition", num: "0.0.7", label: "Recognition" },
  { id: "posts", num: "0.0.8", label: "Posts" },
  { id: "contact", num: "0.0.9", label: "Contact" },
];

export const stats = [
  { value: "4", unit: "yrs", label: "building across the web" },
  { value: "2", unit: "yrs", label: "active in the Web3 ecosystem" },
  { value: "2", unit: "times", label: "selected for Google Summer of Code" },
  { value: "2", unit: "wins", label: "at Hedera hackathons, 2024 and 2026" },
];

export const expertise = [
  {
    title: "Hiero and Hedera at platform level",
    body: "I work with fungible and NFT token lifecycles, consensus-service topics, contract calls, key management and mirror-node reads, and I have abstracted that whole surface into a library that other teams now build on.",
  },
  {
    title: "Solidity and the EVM",
    body: "I write, test and deploy contracts, and I read them critically for gas and storage behaviour, access control and the common failure patterns.",
  },
  {
    title: "Wallet integration and security",
    body: "I connect wallets such as HashPack over WalletConnect, keep operator keys and secrets off the client, and leave signing authority with the wallet so that every transaction is shown in full before approval, which is what stops blind signing.",
  },
];

export const toolbox = [
  {
    term: "Core",
    detail:
      "TypeScript, JavaScript, Solidity, React, Next.js, Vue.js, Node.js, React Native, Tailwind CSS",
  },
  {
    term: "Ledger and Web3",
    detail:
      "Hiero and Hedera SDKs, token and NFT services, consensus service, mirror node APIs, EVM, smart contracts, WalletConnect, HashPack",
  },
  {
    term: "Architecture and testing",
    detail:
      "Micro-frontends with single-spa, Express, Fastify, NestJS, monorepos, Cypress, Playwright, Selenium, GitHub Actions",
  },
  {
    term: "Spoken",
    detail: "English and Luganda fluently, Swahili conversationally",
  },
];

export interface Project {
  title: string;
  meta: string;
  description: string;
  tags: string[];
  /** Screenshot under /public. Without one the card shows a patterned panel. */
  image?: string;
  imageAlt?: string;
  award?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Dino",
    meta: "Game / Hedera Africa Hackathon / 2025",
    description:
      "A retro endless runner built to make digital ownership tangible. Players connect a HashPack wallet over WalletConnect, apply NFT skins they own, and mint an NFT through a smart contract when they beat the high score.",
    tags: ["NFT skins", "HashPack", "WalletConnect"],
    link: "https://github.com/Jexsie/DINO",
  },
  {
    title: "Dtrust",
    meta: "DApp / Document verification",
    description:
      "A decentralized document verification platform on Hedera. Organizations anchor cryptographic proofs of their documents onto the Hedera Consensus Service, and anyone can verify them without the file leaving their device.",
    tags: ["Trustless", "Hedera", "DApp"],
    image: "/images/portfolio/dtrust.jpeg",
    imageAlt:
      "The Dtrust public verifier: search a transaction or hash, or drop a file to check it",
    link: "https://github.com/Jexsie/dtrust",
  },
  {
    title: "Noobisoft",
    meta: "Game / Hello Future Hackathon 2.0 / 2024",
    description:
      "A mini-game rewarding players in NFTs to show how digital ownership can be enforced on-chain.",
    tags: [],
    award: "Track winner",
  },
];

export const openSource = [
  {
    name: "Hiero",
    org: "LF Decentralized Trust",
    role: "Committer",
    detail: "Jan 2025 to present",
    body: "I hold review and merge rights on the Hiero website repository, and I am an active contributor to the Hiero JavaScript SDK and to the other tools that enable the ecosystem.",
  },
  {
    name: "Hiero Enterprise JS",
    org: "hiero-hackers",
    role: "Creator, maintainer",
    detail: "Apache-2.0",
    body: "A TypeScript monorepo that gives Node.js services typed access to the network, shipped with CI, coverage reporting and an OpenSSF Scorecard.",
  },
  {
    name: "Eclipse Adoptium",
    org: "Adoptium website",
    role: "Contributor",
    detail: "Jan 2025 to present",
    body: "I contribute to the Adoptium website, the front door through which developers find and download the Temurin JDK.",
  },
  {
    name: "Open Data Ensemble",
    org: "Formulus",
    role: "Contributor",
    detail: "Native mobile",
    body: "I contribute native mobile work to the offline-first form engine that field teams use to collect data on Android and iOS where connectivity is unreliable.",
  },
  {
    name: "Support and Care Africa",
    org: "Community",
    role: "Member",
    body: "A group that provides support for the open source community.",
  },
];

export interface Job {
  period: string;
  current?: boolean;
  company: string;
  role: string;
  points: string[];
}

export const experience: Job[] = [
  {
    period: "Sept 2024 to present",
    current: true,
    company: "Open Elements GmbH",
    role: "Software engineer, remote",
    points: [
      "Hiero (LF Decentralized Trust): I contribute to the Hiero JavaScript SDK, the most widely used of the Hiero SDKs, and I am a committer with review and merge rights in the Hiero project. All of it is reviewed in public under Apache-2.0 open governance.",
      "EUDIPLO (LF Decentralized Trust): I contribute to the open-source middleware that bridges backend systems to European Digital Identity Wallets, wrapping OID4VCI, OID4VP and SD-JWT VC behind a unified API, built in TypeScript and NestJS and distributed as Docker images.",
      "I build and maintain the Hiero platform site in Next.js and TypeScript, covering component architecture, theming and content tooling for the project's developer-facing surface.",
      "I develop and document reusable UI components in Storybook across the organisation's products.",
      "I work asynchronously in a team distributed across European and East African time zones.",
    ],
  },
  {
    period: "Apr 2024 to Sept 2025",
    company: "Timato GmbH",
    role: "Frontend developer, part-time, remote",
    points: [
      "I built a client-facing case management application for a law practice in Vue.js and Buefy, and I owned the interface work from the first component to release.",
    ],
  },
  {
    period: "May to Sept 2024",
    company: "OpenMRS",
    role: "Google Summer of Code intern, remote",
    points: [
      "I designed and shipped a frontend module that brought real-time SMS messaging between clinicians and patients into OpenMRS 3, for health facilities working with unreliable connectivity.",
    ],
  },
  {
    period: "May to Sept 2023",
    company: "OpenMRS",
    role: "Google Summer of Code intern, remote",
    points: [
      "I rebuilt the responsive and tablet layouts across the OpenMRS 3 micro-frontend application, so that the clinical interface worked on the devices clinicians actually use at the point of care.",
    ],
  },
];

export const recognition = [
  {
    when: "2026",
    title: "Hiero bounty winner",
    body: "Hedera Hello Future: Apex hackathon. The winning entry was Hiero Enterprise JS, which ships ready-to-use functions and removes the boilerplate needed to set up a client and perform transactions.",
  },
  {
    when: "2024",
    title: "Track winner",
    body: "Hedera Hello Future Hackathon 2.0. The winning entry was Noobisoft, a mini-game rewarding players in NFTs to show how digital ownership can be enforced on-chain.",
  },
  {
    when: "2023, 2024",
    title: "Google Summer of Code",
    body: "Selected twice, both times with OpenMRS.",
  },
];
