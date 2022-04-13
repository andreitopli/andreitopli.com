import React from 'react';
import { Button } from '../Button/Button';
import { ImagePlaceHolder } from '../ImagePlaceholder/ImagePlaceholder';

type Props = Record<string, unknown>;

export const Hero: React.FC<Props> = ({}) => {
	return (
		<main className="flex flex-col w-full h-screen overflow-hidden bg-background-default relative">
			<div className="flex flex-row w-full">
				<div className="max-w-[60vw] sm:max-w-fit flex flex-col z-50">
					<div className="p-0 pl-6 pt-6 sm:p-16">
						<p className="pb-3 sm:pb-0 text-base-default text-xl sm:text-3xl font-second">
							<span className="text-white-default font-semibold">
								Andrei Topli
							</span>
						</p>
						<p className="text-text-subtitleGreen text-sm sm:text-lg font-mono font-light">
							I’m a software enginner and co-founder of Chessroulette
						</p>
					</div>
					<div className="sm:block hidden space-y-2 px-16">
						<a
							href="mailto:andrei.topli@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<Button label="Say Hi" type="primary" onClick={() => {}} />
						</a>
					</div>
					<div className="flex justify-start sm:hidden w-full pl-6">
						<div className="bg-primary-green rounded-full text-center align-baseline px-8 py-1 mt-10">
							<a
								href="mailto:andrei.topli@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<span className="text-text-dark font-semibold font-second text-lg">
									Say Hi
								</span>
							</a>
						</div>
					</div>
					<div className="flex justify-start max-w-[24rem] max-h-[24rem]">
						<ImagePlaceHolder
							src="/images/planet_faded.svg"
							height="100%"
							width="100%"
							alt="background planet"
						/>
					</div>
				</div>
				<div className="absolute right-0 sm:relative sm:flex-1 sm:pt-10 pt-8 mr-2">
					<div className="right-0 top-10 sm:w-[472px] sm:h-[385px] w-[241px] h-[305px]">
						<div className="relative w-full h-full">
							<div className="absolute top-0 sm:left-40 right-6 sm:w-[172px] sm:h-[110px] w-[128px] h-[82px]">
								<ImagePlaceHolder
									src="/images/code_blocks.svg"
									alt="code blocks"
									width="100%"
									height="100%"
								/>
							</div>
							<div className="absolute sm:top-20 top-28 left-3 sm:w-[378px] sm:h-[323px] w-[254px] h-[217px]">
								<ImagePlaceHolder
									src="/images/astro.png"
									alt="Spaceman flating"
									width="100%"
									height="100%"
								/>
							</div>
							<div className="absolute right-0 sm:top-20 top-20 sm:w-[26px] sm:h-[26px] w-[16px] h-[16px]">
								<ImagePlaceHolder
									src="/images/planet_small_1.svg"
									alt="small planet"
									width="100%"
									height="100%"
								/>
							</div>
							<div className="absolute sm:bottom-24 sm:right-3 right-2 bottom-20 sm:w-[142px] sm:h-[142px] w-[69px] h-[69px]">
								<ImagePlaceHolder
									src="/images/planet_big_green.svg"
									width="100%"
									height="100%"
									alt="green planet"
								/>
							</div>
							<div className="absolute sm:bottom-0 bottom-5 right-10 sm:right-28 sm:w-[19px] sm:h-[19px] w-[15px] h-[15px]">
								<ImagePlaceHolder
									src="/images/planet_small_orange.svg"
									alt="orange planet"
									width="100%"
									height="100%"
								/>
							</div>
							<div className="absolute sm:bottom-10 sm:left-52 bottom-0 right-20 sm:w-[106px] sm:h-[68px] w-[85px] h-[54px]">
								<ImagePlaceHolder
									src="/images/planet_rings.svg"
									alt="planet with rings"
									width="100%"
									height="100%"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-5 px-16 w-max"></div>
		</main>
	);
};
