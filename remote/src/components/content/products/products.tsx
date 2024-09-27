import { getProductIcon } from '../../utils/utils';
import { ISubscription } from '../../types/types';
import { useData } from '../../../services/services';
import ExploreProductsButton from './explore-products-button/explore-products-button';

export function Produts() {
  const query = `
    query {
      subscriptionForCompany(id: 1) {
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
  return (
    <div className="userDrawer__products">
      {subscriptions?.map((subscription: ISubscription, index: number) => {
        const { product } = subscription;
        const { Name } = product;

        return (
          <div key={index} className="userDrawer__productItem">
            <img
              src={getProductIcon(Name)}
              alt="logo"
              onClick={() => alert(`${Name} clicked`)}
            />
            <p>{Name}</p>
          </div>
        );
      })}
      <div className="userDrawer__productItem">
        {/* <img src={ExploreProducts} alt="logo" onClick={() => alert(`Explore Products clicked`)} />
        <p>Explore Products</p> */}
        <ExploreProductsButton />
      </div>
    </div>
  );
}
