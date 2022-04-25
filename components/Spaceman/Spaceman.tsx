import React from 'react';
import { ImagePlaceHolder } from '../ImagePlaceholder/ImagePlaceholder';
import { useSpring, animated } from 'react-spring';

type Props = {};

export const Spaceman: React.FC<Props> = ({}) => {
	const [{ x }] = useSpring(() => ({
		loop: { reverse: true },
		config: { duration: 2500, friction: 5 },
		reset: true,
		from: { x: 0 },
		to: { x: 100 },
	}));

	return (
		<div className="relative sm:w-[324px] sm:h-[215px] w-[218px] h-[145px]">
			<div className="absolute sm:w-[204px] sm:h-[190.94px] w-[136px] h-[127.90px] top-0 left-0">
				<ImagePlaceHolder
					src="/images/astro_final.png"
					alt="Spaceman flating"
					width="100%"
					height="100%"
				/>
			</div>
			{/*<div className="absolute sm:w-[30.95px] sm:h-[28.03px] bottom-1 right-0">
				<ImagePlaceHolder
					src="/images/circles.svg"
					alt="circles"
					width="100%"
					height="100%"
				/>
			</div>*/}
			<div className="absolute sm:w-[180px] sm:h-[89px] w-[123px] h-[60.99px] sm:top-[7.8rem] top-[5.21rem] right-0">
				<svg width="100%" height="100%" viewBox="0 0 1247 620" fill="none">
					<animated.path
						d={x.to({
							range: [0, 100],
							output: [
								'M3.49993 8C-2 61 -14.0844 184.916 108 307C220 419 364.5 465 529.5 473.5C636.425 479.008 652.013 443.88 787.5 418C876.5 401 1024.4 415.315 1084 457.5C1173 520.5 1219 556 1246.5 620C1232.5 557.167 1210.5 500.942 1155.5 457.5C1086.5 403 1049.5 376 896 376C742.5 376 699.806 427.267 632 432.5C483 444 324.94 405.627 226.5 340C111 263 36.5001 167 40.5 0.5L3.49993 8Z',
								'M0.499817 8C7 64.5 158.5 200.556 308.5 220C465.578 240.362 484.077 240.791 597 261.5C741.5 288 760 289 873.5 335.5C958.373 370.272 1061.9 424.314 1121.5 466.5C1210.5 529.5 1216 556 1243.5 620C1229.5 557.167 1198.5 490.442 1143.5 447C1074.5 392.5 1028.5 372.5 886 303C790.997 256.665 707.5 237.5 604.5 220C418.036 188.319 395.5 190.5 316 180C188.692 163.186 127.5 95.5 37.4999 0.5L0.499817 8Z',
							],
						})}
						fill="url(#paint0_linear_311_37)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_311_37"
							x1="1005"
							y1="403.5"
							x2="1247"
							y2="640"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#29B3FE" />
							<stop offset="0.459671" stopColor="#29B3FE" stopOpacity="0.22" />
							<stop offset="1" stopColor="#29B3FE" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	);
};
