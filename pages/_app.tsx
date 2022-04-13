import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#18181A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,300;0,700;1,100;1,500;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,700;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,300;0,700;1,100;1,500;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
