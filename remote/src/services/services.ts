import { useQuery } from '@tanstack/react-query';
import { IContactsSearchResponse } from '../components/team-admin/types/types';
import { ISubscription } from '../components/content/types/types';

const fetchData = async (query: string, searchText?: string) => {
  try {
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: { searchText },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(`GraphQL error: ${JSON.stringify(errors)}`);
    }

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

function useData(
  queryKey: (string | number)[],
  query: string,
  searchText?: string,
) {
  const res = useQuery({
    queryKey: [queryKey, query, searchText],
    queryFn: () => fetchData(query, searchText),
    // enabled: searchText?.length > 0,
  });
  return res;
}

export function getContactsSearch(searchText: string) {
  const query = `query {
    contactsSearch(SearchText: "${searchText}") {
      Id
      First_Name
      Last_Name
      Email
      Photo
      Job_Title
    }
  }`;

  const queryKey = ['contactsSearch', searchText, query];

  const { data } = useData(queryKey, query, searchText) ?? {};

  const { contactsSearch } = (data as IContactsSearchResponse) ?? [];

  return contactsSearch;
}

export function getSubscriptionForCompany(companyId: number) {
  const query = `
  query {
    subscriptionForCompany(id: "${companyId}") {
      product {
        Name
        ProductSKU
      }
    }
  }
`;
  const queryKey = ['subscriptionForCompany'];
  const { data } = useData(queryKey, query) ?? {};
  const subscriptions: ISubscription[] = data?.subscriptionForCompany ?? [];

  if (!subscriptions?.length) return null;
  return subscriptions;
}
