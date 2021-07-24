import GlobalStyle from "../styles/globals";
import { AppProps } from "next/app";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/instagramMiniIcon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
