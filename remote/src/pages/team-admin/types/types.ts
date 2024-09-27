export interface ITeam {
  userIds: number[];
  name: string;
  avatar?: string;
  membersCount: number;
  isEnterprise: boolean;
}

export interface IUser {
  avatar?: string;
  name: string;
  email?: string;
  role: Role;
  team?: ITeam;
}

export enum Role {
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer = 'Viewer',
}

export interface IContact {
  Id?: number;
  First_Name: string;
  Last_Name: string;
  Email: string;
  Photo: string;
  Job_Title: string;
}

export interface ICompanyContact {
  contact: IContact;
}

export interface ICompany {
  companyContact: ICompanyContact[];
}

export interface IContactsSearchResponse {
  contactsSearch: IContact[];
}
