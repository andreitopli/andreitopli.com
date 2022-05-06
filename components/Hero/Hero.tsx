/* eslint-disable react/jsx-indent, no-tabs, react/jsx-indent-props, react/self-closing-comp, @typescript-eslint/no-empty-function, max-len */
import React from 'react';
import { Button } from '../Button/Button';
import { ImagePlaceHolder } from '../ImagePlaceholder/ImagePlaceholder';
import { Spaceman } from '../Spaceman/Spaceman';

export const Hero = () => {
	return (
		<main className="flex flex-col w-full overflow-visible relative">
			<div className="flex flex-row w-full">
				<div className="max-w-[60vw] sm:max-w-fit flex flex-col z-50 sm:mb-24">
					<div className="p-0 pl-6 pt-6 sm:p-16">
						<p className="pb-3 sm:pb-0 text-base-default text-xl sm:text-3xl font-second">
							<span className="text-white-default font-semibold">
								Andrei Topli
							</span>
						</p>
						<p className="text-text-subtitleGreen text-sm sm:text-lg font-mono font-light">
							I’m a software engineer, space cowboy and co-founder of
							Chessroulette
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
				</div>
				<div className="absolute right-0 sm:flex-1 sm:pt-10 pt-8 mr-2">
					<div className="right-0 top-10 sm:w-[472px] sm:h-[385px] w-[241px] h-[305px]">
						<div className="relative w-full h-full">
							{/*<ParallaxLayer
								speed={-1.9}
								style={{ zIndex: 30 }}
								className="sm:block hidden"
							>*/}
							<div className="absolute top-0 sm:left-40 right-6 sm:w-[172px] sm:h-[110px] w-[128px] h-[82px]">
								<div className="relative w-full h-full">
									<div className="absolute sm:left-3 sm:top-0 sm:w-[45.52px] sm:h-[29.4px] w-[33.94px] h-[21.92px] left-1 top-0 z-50 animate-code-foreground-float">
										<ImagePlaceHolder
											src="/images/code_block_small_purple.svg"
											alt="code block"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="absolute sm:left-12 sm:top-6 sm:w-[97.99px] sm:h-[64.92px] w-[73px] h-[48.4px] left-8 top-4 z-30 animate-code-foreground-float2">
										<ImagePlaceHolder
											src="/images/code_block_big.svg"
											alt="code block"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="absolute sm:right-0 sm:top-11 sm:w-[30.62px] sm:h-[24.5px] w-[22.83px] h-[18.27px] right-1 top-8 z-50 animate-code-foreground-float">
										<ImagePlaceHolder
											src="/images/code_block_green.svg"
											alt="code block"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="absolute sm:right-1 sm:bottom-3 sm:w-[41.65px] sm:h-[15.27px] w-[31.05px] h-[11.39px] right-1 bottom-3 z-40 animate-code-foreground-float2">
										<ImagePlaceHolder
											src="/images/code_block_lines.svg"
											alt="code block"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="absolute sm:left-0 sm:top-12 sm:w-[26.95px] sm:h-[9.88px] w-[20.09px] h-[7.37px] left-0 top-10 z-10 animate-code-background-float">
										<ImagePlaceHolder
											src="/images/code_blur_1.svg"
											alt="code block"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="absolute sm:right-1 sm:top-5 sm:w-[17.15px] sm:h-[11.28px] w-[12.79px] h-[8.41px] right-1 top-2 z-10 animate-code-background-float">
										<ImagePlaceHolder
											src="/images/code_blur_2.svg"
											alt="code block"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="absolute sm:right-20 sm:bottom-0 sm:w-[22.34px] sm:h-[14.7px] w-[16.66] h-[10.96px] bottom-1 right-16 z-10 animate-code-background-float">
										<ImagePlaceHolder
											src="/images/code_blur_3.svg"
											alt="code block"
											width="100%"
											height="100%"
										/>
									</div>
								</div>
							</div>
							{/*</ParallaxLayer>*/}
							{/*	<div className="absolute sm:top-20 top-28 left-3 sm:w-[378px] sm:h-[323px] w-[254px] h-[217px] animate-spaceman-float">
							<ImagePlaceHolder
								src="/images/astro.png"
								alt="Spaceman flating"
								width="100%"
								height="100%"
							/>
						</div>*/}
							{/*<ParallaxLayer
								offset={0}
								speed={-2}
								style={{ zIndex: 40 }}
								className="sm:block hidden"
							>*/}
							<div className="absolute sm:top-20 top-28 left-3 animate-spaceman-float">
								<Spaceman />
							</div>
							{/*</ParallaxLayer>*/}
							<div className="absolute right-0 sm:top-20 top-20 sm:w-[26px] sm:h-[26px] w-[16px] h-[16px] z-10">
								<ImagePlaceHolder
									src="/images/planet_small_1.svg"
									alt="small planet"
									width="100%"
									height="100%"
								/>
							</div>
							<div className="absolute sm:bottom-24 sm:right-3 right-2 bottom-24 sm:w-[142px] sm:h-[142px] w-[69px] h-[69px] z-10">
								{/*	<ParallaxLayer
									offset={0.01}
									speed={0.1}
									className="sm:block hidden"
								>*/}
								<ImagePlaceHolder
									src="/images/planet_big_green.svg"
									width="100%"
									height="100%"
									alt="green planet"
								/>
								{/*</ParallaxLayer>*/}
							</div>
							<div className="absolute sm:bottom-0 bottom-5 right-10 sm:right-28 sm:w-[19px] sm:h-[19px] w-[15px] h-[15px] z-10">
								<ImagePlaceHolder
									src="/images/planet_small_orange.svg"
									alt="orange planet"
									width="100%"
									height="100%"
								/>
							</div>
							<div className="absolute sm:bottom-1 sm:left-52 bottom-0 right-20 sm:w-[106px] sm:h-[68px] w-[85px] h-[54px] z-10">
								{/*<ParallaxLayer
									offset={0.01}
									speed={-0.2}
									className="sm:block hidden"
								>*/}
								<ImagePlaceHolder
									src="/images/planet_rings.svg"
									alt="planet with rings"
									width="100%"
									height="100%"
								/>
								{/*</ParallaxLayer>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
