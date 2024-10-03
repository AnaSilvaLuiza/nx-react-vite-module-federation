import { getProductIcon } from '../utils/utils';
import { ISubscription } from '../types/types';
import { getSubscriptionForCompany } from '../../../services/services';
import ExploreProductsButton from './explore-products-button/explore-products-button';

export function Produts() {
  return (
    <div className="userDrawer__products">
      {getSubscriptionForCompany(1)?.map(
        (subscription: ISubscription, index: number) => {
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
        },
      )}
      <div className="userDrawer__productItem">
        {/* <img src={ExploreProducts} alt="logo" onClick={() => alert(`Explore Products clicked`)} />
        <p>Explore Products</p> */}
        <ExploreProductsButton />
      </div>
    </div>
  );
}
