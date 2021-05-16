import { ContractKitProvider } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";
import { AppWrapper } from '../components/AppContext';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContractKitProvider
      dappName="My awesome dApp"
      dappDescription="My awesome description"
      dappUrl="https://example.com"
    >
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
    </ContractKitProvider>
  );
}

export default MyApp;
