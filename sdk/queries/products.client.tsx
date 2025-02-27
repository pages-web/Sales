import { useLazyQuery, useQuery } from '@apollo/client';
import { queries } from '../graphql/products';
import { onError } from '@/lib/utils';

export const useProducts = () => {
  const [getProducts, { data, loading }] = useLazyQuery(queries.products);

  const { poscProducts: products } = data || {};

  return { getProducts, loading, products };
};

export const useMSDRemainder = (codes: string[], lazy?: boolean) => {
  const { data, loading } = useQuery(queries.msdProductsRemainder, {
    variables: {
      productCodes: codes,
      posToken: process.env.NEXT_PUBLIC_POS_TOKEN,
    },
    skip: lazy,
    onError,
  });

  const [getRemainder, result] = useLazyQuery(queries.msdProductsRemainder, {
    variables: {
      productCodes: codes,
      posToken: process.env.NEXT_PUBLIC_POS_TOKEN,
    },
    onError,
  });

  const { msdProductsRemainder: remainder } = data || result.data || {};

  const byCode: { [key: string]: number } = {};

  remainder?.forEach((el: { No: string; Inventory: number }) => {
    byCode[el.No as keyof typeof byCode] = el.Inventory;
  });

  return {
    loading: loading || result.loading,
    remainder,
    byCode,
    getRemainder,
  };
};
