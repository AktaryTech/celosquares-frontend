import { ContractKitProvider } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContractKitProvider
      dappName="My awesome dApp"
      dappDescription="My awesome description"
      dappUrl="https://example.com"
    >
      <Component {...pageProps} />
    </ContractKitProvider>
  );
}

export default MyApp;
