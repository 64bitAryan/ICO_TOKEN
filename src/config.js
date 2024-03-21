import { mainnet, sepolia, bsc, bscTestnet } from "wagmi/chains";
import { http, createConfig } from "wagmi";
import { createClient } from 'viem'
import {
  walletConnect,
  injected,
  coinbaseWallet,
  metaMask,
} from "wagmi/connectors";

const projectId = "4eb352e58e206ddcfa9ab440659f4b73";

const metadata = {
  name: "SAiB_TOKEN",
  description: "SAiB TOKEN",
  url: "https://salesaiboost.io",
  icons: ["https://salesaiboost.io/favicon.jpg"],
};

const config = createConfig({
  chains: [ bsc, mainnet ],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    metaMask({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
});

export { config };
