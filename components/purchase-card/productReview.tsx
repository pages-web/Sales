"use client";

import { useMutation, useQuery } from '@apollo/client';
import { mutations, queries } from '@/sdk/graphql/products';
import { useState, useEffect } from 'react';
import { useCurrentUser } from '@/sdk/queries/auth.client';
import Rate from '../Rate';

const ProductReview = ({ productId }: { productId: string }) => {
  const { currentUser } = useCurrentUser();
  const [rating, setRating] = useState(0);
  const [userRated, setUserRated] = useState(false);
  const { data } = useQuery(queries.getProductAverageReview, {
    variables: {
      productId: productId,
    },
  });

  const [add] = useMutation(mutations.ReviewAdd);

  useEffect(() => {
    setRating(data?.productreview?.average || 0);
  }, [data]);

  const handleRate = (rate: number) => {
    if (currentUser) {
      setRating(rate);
      add({
        variables: {
          productId: productId,
          customerId: currentUser?.erxesCustomerId,
          review: rate,
        },
        refetchQueries: [
          {
            query: queries.getProductReviews,
          },
          'getPoductReviews',
        ],
      });
      setUserRated(true);
    } else {
      window.location.href = '/login';
      
    }
  };

  return (
    <div className="flex gap-3 items-center mb-3">
      <Rate value={rating} onChange={handleRate} />
      <span className="text-sm text-gray-400">
        {userRated ? 'Таны өгсөн үнэлгээ' : 'Нийт үнэлгээ'} : {rating && rating.toFixed(1)}
      </span>
    </div>
  );
};

export default ProductReview;
