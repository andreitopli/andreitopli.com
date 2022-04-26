import { Project } from '.prisma/client';
import { useQuery } from '@apollo/client';
import { gql } from 'apollo-server-core';
import React, { useEffect } from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';

const GetAllProjects = gql`
	query {
		projects {
			id
			title
			description
			featured
		}
	}
`;

type Props = {};

export const Projects: React.FC<Props> = ({}) => {
	const { data, loading, error } =
		useQuery<{ projects: Project[] }>(GetAllProjects);

	if (loading) {
		console.log('loading query');
	}

	if (error) {
		console.log('error loading query', error);
	}

	if (!data) {
		return <div>No data!</div>;
	}

	const { projects } = data;

	return (
		<div className="w-full h-full flex flex-col gap-3 text-white-default text-sm font-mono font-light pl-6 sm:pl-16 sm:max-w-[800px]">
			<div>Currently working on :</div>
			<div>
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</div>
	);
};
