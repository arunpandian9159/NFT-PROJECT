import "@/styles/globals.css";

// Internal Import
import { NavBar, Footer } from "@/components";
import { NFTMarketplaceProvider } from "@/context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;
