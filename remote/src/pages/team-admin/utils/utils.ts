import { ITeam } from '../types/types';
import Avatar1 from '../../../assets/user-avatar(1).svg';
import Avatar2 from '../../../assets/user-avatar(2).svg';

export const getTeams = (): ITeam[] => {
  const list = [
    {
      userIds: [1],
      name: 'Plataform',
      avatar: Avatar1,
      membersCount: 153,
      isEnterprise: false,
    },
    {
      userIds: [1, 2],
      name: 'Frontend',
      avatar: Avatar2,
      membersCount: 153,
      isEnterprise: true,
    },
  ];

  return list;
};
