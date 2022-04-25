import { useQuery } from '@apollo/client';
import { gql } from 'apollo-server-core';
import React, { useEffect } from 'react';

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

export const Projects: React.FC<Props> = (props) => {
	const { data } = useQuery(GetAllProjects);

	useEffect(() => {
		if (data) {
			console.log('data', data);
		}
	}, [data]);
	return <div className="w-full h-full flex justify-center">works</div>;
};
