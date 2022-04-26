import { Project } from '.prisma/client';
import { DangerouslySetInnerHTML } from '@/../utils/utils';
import React from 'react';

type Props = {
	project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<div className="text-white-default bg-colored-border rounded-lg p-[1px]">
			<div className="rounded-lg bg-background-card">
				<div className="font-mono text-xs font-medium text-white-default ">
					<span dangerouslySetInnerHTML={{ __html: project.description }} />;
				</div>
			</div>
		</div>
	);
};
