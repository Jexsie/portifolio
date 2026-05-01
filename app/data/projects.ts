import { WorkProject } from "../components/FolioItem";

export const projects: WorkProject[] = [
  {
    id: "01",
    title: "DTRUST",
    category: "DApp",
    image: "images/portfolio/dtrust.jpeg",
    image2x: "images/portfolio/dtrust.jpeg",
    projectUrl: "#",
    modal: {
      galleryImage: "images/portfolio/dtrust.jpeg",
      description:
        "A decentralized document verification platform built on the Hedera Hashgraph network. Dtrust enables organizations to anchor cryptographic proofs of their documents onto the Hedera Consensus Service (HCS), creating an immutable, tamper-proof record that can be verified by anyone, anywhere, without compromising privacy.",
      tags: ["Trustless", "Hedera", "DApp"],
      linkUrl: "https://github.com/Jexsie/dtrust",
    },
  },
];
