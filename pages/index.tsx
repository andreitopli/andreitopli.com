/* eslint-disable react/jsx-no-target-blank */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import chessroulette from './assets/chessroulette.png';

const Home: NextPage = () => (
  <>
    <Head>
      <title>AndreiTopli</title>
      <meta name="description" content="Andrei Topli portfolio" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <main className="w-full h-screen overflow-hidden bg-background-default relative">
      <div className="p-16">
        <p className="text-base-default text-lg font-mono">
          Hey, I’m <span className="text-white-default">Andrei Topli</span>
        </p>
        <p className="text-base-default text-sm font-mono font-light">
          I’m a software enginner and co-founder of Chessroulette
        </p>
      </div>
      <div className="space-y-2 px-16">
        <span className="text-white-default text-base font-mono font-extralight border-solid border-primary-default border-2 px-2 py-2 hover:text-primary-default">
          <a href="mailto:andrei.topli@gmail.com" target="_blank">
            Get In Touch
          </a>
        </span>
      </div>
      <div className="mt-16 px-16">
        <span className="text-base-default font-mono font-extralight text-sm">
          Projects highlights:
        </span>
      </div>
      <div className="mt-5 px-16 relative w-max">
        <Image
          src={chessroulette}
          width={466}
          height={367}
          alt="chessroulette"
          className="rounded-xl"
        />
        <div className="bg-primary-default p-2 max-w-max flex flex-col absolute top-1/4 -right-1/2 shadow-xl ">
          <span className="text-white-default text-sm font-mono font-light">
            Chessroulette - A chess platform focused on streaming.
          </span>
          <span className="text-black-default font-mono text-sm font-light mt-3">
            Stack: React, Redux, MongoDB, Redis, SocketIO, WebRTC
          </span>
        </div>
      </div>
    </main>
  </>
);

export default Home;
