import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/Hero/Hero';
import { ImagePlaceHolder } from '../components/ImagePlaceholder/ImagePlaceholder';
import { Projects } from '../components/Projects/Projects';

const Home: NextPage = () => {
  return (
    <>
      <div className="dark relative bg-background-default max-w-[1500px] w-screen h-screen">
        <Head>
          <title>AndreiTopli</title>
          <meta name="description" content="Andrei Topli portfolio" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <div className="absolute bottom-0 sm:top-[10rem] -left-20 flex justify-start sm:max-w-[24rem] sm:max-h-[24rem] max-w-[15rem] max-h-[15rem] z-0 pointer-events-none">
          <ImagePlaceHolder
            src="/images/planet_faded.svg"
            height="100%"
            width="100%"
            alt="background planet"
          />
        </div>
        <Hero />
        <Projects />
      </div>
    </>
  );
};

export default Home;
