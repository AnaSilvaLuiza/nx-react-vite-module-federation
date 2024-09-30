export interface ISubscriptionForCompany {
  Name: string;
  productSKU: string;
}

export enum ProductEnum {
  Expertunity = 0,
  ProductInformation = 10,
  CRM = 20,
  ExploreProducts = 21,
}

export interface IContact {
  firstName: string;
  lastName: string;
}

export interface ICompanyContact {
  contact: IContact;
}

export interface ICompany {
  id: number;
  name: string;
  companyContact: ICompanyContact;
}

export interface ISubscription {
  product: ISubscriptionForCompany;
}

export interface ISubscriptionForCompanyResponse {
  subscriptionForCompany: ISubscription;
}
