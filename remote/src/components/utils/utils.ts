import Expertunity from '../../assets/expertunity-logo.svg';
import CRM from '../../assets/CRM-logo.svg';
import ProductInformation from '../../assets/product-information-logo.svg';

export const getProducts = () => {
  const list = [
    {
      name: 'Expertunity',
      icon: Expertunity,
    },
    {
      name: 'Project Information',
      icon: ProductInformation,
    },
    {
      name: 'CRM',
      icon: CRM,
    },
  ];

  return list;
};

export const getProductIcon = (productName: string): string | undefined =>
  getProducts()?.find((product) => product?.name === productName)?.icon;
