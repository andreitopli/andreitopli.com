import { Project } from '.prisma/client';
import { useQuery } from '@apollo/client';
import { gql } from 'apollo-server-core';
import React from 'react';
import { ImagePlaceHolder } from '../ImagePlaceholder/ImagePlaceholder';
import { ProjectCard } from '../ProjectCard/ProjectCard';

const GetAllProjects = gql`
	query {
		projects {
			id
			title
			description
			featured
			url
		}
	}
`;

type Props = {};

export const Projects: React.FC<Props> = ({}) => {
	const { data, loading, error } =
		useQuery<{ projects: Project[] }>(GetAllProjects);

	if (loading) {
		return (
			<div className="relative w-full flex flex-col gap-5 text-white-default text-sm font-mono pl-6 sm:pl-16 pr-6 sm:pr-16 sm:max-w-[800px] z-50 mt-20 sm:mt-0">
				<div className="font-medium font-mono">Current projects:</div>
				<div
					style={{
						borderTopColor: 'transparent',
					}}
					className="w-8 h-8 border-4 border-primary-pink border-solid rounded-full animate-spin"
				></div>
			</div>
		);
	}

	if (error) {
		return <div></div>;
	}

	if (!data) {
		return <div></div>;
	}

	const { projects } = data;

	return (
		<div className="relative w-full flex flex-col gap-5 text-white-default text-sm font-mono pl-6 sm:pl-16 pr-6 sm:pr-16 sm:max-w-[800px] z-50 mt-20 sm:mt-0">
			{/*	<div className="absolute z-0 -right-10 top-1/2">
				<ImagePlaceHolder
					src="/images/planet_rings_purple.svg"
					alt="orange planet"
					width="100%"
					height="100%"
				/>
			</div>*/}
			<div className="font-medium font-mono sm:mb-0 mb-4">
				Currently in development:
			</div>
			<div>
				{[...projects]
					.sort((a, b) => a.id - b.id)
					.map((project) => (
						<a
							href={project.url}
							target="_blank"
							rel="noreferrer"
							key={project.id}
						>
							<ProjectCard project={project} />
						</a>
					))}
			</div>
		</div>
	);
};
