import { Project } from '.prisma/client';
import React from 'react';
import { ImagePlaceHolder } from '../ImagePlaceholder/ImagePlaceholder';

type Props = {
	project: Project;
};

const colors = ['#D46999', '#EE58EC', '#70ED9D'];

export const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<>
			<div className="text-white-default bg-colored-border rounded-lg p-[1px] mb-10 hover:scale-105 hover:cursor-pointer">
				<div className="relative rounded-lg bg-background-card flex flex-col p-5">
					<div className="font-mono text-xs text-white-default mb-10">
						<span dangerouslySetInnerHTML={{ __html: project.description }} />
					</div>
					<div className="font-mono text-lg font-semibold">
						{`${project.title.slice(0, 1).toUpperCase()}${project.title.slice(
							1,
						)}`}
					</div>
					<div
						className="absolute -bottom-3 left-5 rounded-full text-text-dark text-xs font-mono font-medium pt-1 pb-1 pl-3 pr-3"
						style={{
							backgroundColor: colors[project.id],
						}}
					>
						{project.featured}
					</div>
				</div>
			</div>
			<div className="absolute top-16 right-2 sm:right-10 w-[54px] h-[34.88px] animate-code-foreground-float">
				<ImagePlaceHolder
					src="/images/code_block_small_purple.svg"
					width="100%"
					height="100%"
				/>
			</div>
			<div className="absolute top-8 right-0 sm:right-10 w-[20px] h-[16px] animate-code-background-float">
				<ImagePlaceHolder
					src="/images/code_block_green.svg"
					width="100%"
					height="100%"
				/>
			</div>
		</>
	);
};
