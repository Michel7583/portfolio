import { getService } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { ServiceDetail } from "@/components/pages/ServiceDetail";

const service = getService("blockchain-web3");

export const metadata = createMetadata({
  title: `Blockchain / Web3 Development | ${site.name}`,
  description:
    "Production Web3 engineering: smart contracts, DeFi, wallets, tokenization, blockchain identity, and EVM systems.",
  path: "/services/blockchain-web3",
  keywords: ["smart contracts", "Web3", "DeFi", "tokenization"],
});

export default function BlockchainPage() {
  if (!service) return null;
  return <ServiceDetail service={service} />;
}
