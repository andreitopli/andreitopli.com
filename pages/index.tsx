import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/Hero/Hero';

const Home: NextPage = () => (
  <div className="dark relative">
    <Head>
      <title>AndreiTopli</title>
      <meta name="description" content="Andrei Topli portfolio" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Hero />
  </div>
);

export default Home;
