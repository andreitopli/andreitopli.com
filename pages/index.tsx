import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero/Hero';
import { ImagePlaceHolder } from '../components/ImagePlaceholder/ImagePlaceholder';
import { Projects } from '../components/Projects/Projects';
import { useWindowSize } from '../hooks/useWindowSize';
import { randomRange } from '../utils/utils';

const Home: NextPage = () => {
  const [currentMeteor, setCurrentMeteor] = useState<React.ReactNode>(null);
  const windowSize = useWindowSize();
  const [meteor, setMeteor] = useState<React.ReactNode>(null);

  useEffect(() => {
    const meteorDiv = document.getElementById('meteor');
    console.log('check meteor', meteorDiv);

    if (!meteorDiv) {
      const timeout = setTimeout(() => {
        createMeteor();
      }, randomRange(3000, 10000));
      return () => {
        clearTimeout(timeout);
      };
    } else {
      const timeOut = setTimeout(() => {
        cleanMeteor();
      }, 1500);

      return () => {
        clearTimeout(timeOut);
        cleanMeteor();
      };
    }
  }, [meteor]);

  function cleanMeteor() {
    setMeteor(null);
  }

  function createMeteor() {
    const width = windowSize.width || 1000;
    setMeteor(
      <div
        className={`absolute w-[160px] h-[128px] animate-meteor-1`}
        id="meteor"
        style={{
          right: randomRange(-width / 2, width / 2),
          top: randomRange(-200, -100),
        }}
      >
        <ImagePlaceHolder
          src={
            Math.random() > 0.5 ? '/images/meteor.svg' : '/images/meteor2.svg'
          }
          height="100%"
          width="100%"
          alt="meteor"
        />
      </div>,
    );
  }

  return (
    <>
      <div className="dark relative bg-background-default max-w-[1500px] w-screen h-screen">
        <Head>
          <title>AndreiTopli</title>
          <meta name="description" content="Andrei Topli portfolio" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <div
          className="z-0 top-0 left-0 w-screen h-screen pointer-events-none absolute hidden sm:block"
          id="meteorContainer"
        >
          {meteor}
        </div>
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
