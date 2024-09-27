import { useQuery } from '@tanstack/react-query';

export const fetchData = async (query: string, searchText?: string) => {
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

export function useData(
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
