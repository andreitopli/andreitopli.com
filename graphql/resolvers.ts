import { Context } from './context';

export const resolvers = {
	Query: {
		projects: (_parent: unknown, _args: unknown, ctx: Context) => {
			return ctx.prisma.project.findMany();
		},
	},
};
