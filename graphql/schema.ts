import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
	type Project {
		id: Int
		title: String
		description: String
		featured: String
		url: String
	}

	type Query {
		projects: [Project]!
	}
`;
