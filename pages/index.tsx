import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/Hero/Hero';
import { Projects } from '../components/Projects/Projects';

const Home: NextPage = () => (
  <div className="dark relative">
    <Head>
      <title>AndreiTopli</title>
      <meta name="description" content="Andrei Topli portfolio" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Hero />
    <Projects />
  </div>
);

export default Home;
