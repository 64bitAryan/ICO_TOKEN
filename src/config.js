import { mainnet, sepolia } from "wagmi/chains";
import { http, createConfig } from "wagmi";
import {
  walletConnect,
  injected,
  coinbaseWallet,
  metaMask,
} from "wagmi/connectors";

const projectId = "4eb352e58e206ddcfa9ab440659f4b73";

const metadata = {
  name: "ICO_TOKEN",
  description: "ICO TOKEN",
  url: "https://ICOTOKEN.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
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