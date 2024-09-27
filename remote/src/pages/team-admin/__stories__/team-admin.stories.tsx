import type { Meta } from '@storybook/react';
import { TeamAdmin } from '../team-admin';
import { withQueryClientDecorator, withRouterDecorator } from '@olmero/core';

const meta: Meta<typeof TeamAdmin> = {
  component: TeamAdmin,
  title: 'Base/Pages/TeamAdmin',
  decorators: [withQueryClientDecorator, withRouterDecorator('/team-admin')],
};
export default meta;

export const Overview = {
  args: {},
};
