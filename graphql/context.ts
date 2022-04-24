import { PrismaClient } from '.prisma/client';
import prisma from '../lib/prisma';

export type Context = {
	prisma: PrismaClient;
};

export async function createContext({
	req,
	res,
}: {
	req: unknown;
	res: unknown;
}): Promise<Context> {
	return {
		prisma: prisma as PrismaClient,
	};
}
