import { getProducts } from "@/sdk/queries/products";
import ProductCard from "../product-card/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { IProduct } from "@/types/product.types";
import SpecialProducts from "./special-products";
import { Heading } from "../heading/heading";

const RecommendedProducts = async ({
  categoryId,
  productId,
}: {
  categoryId?: string;
  productId?: string;
}) => {
  const { products } = await getProducts({
    variables: { categoryId, perPage: 12, isKiosk: true },
  });
  const exceptCurrent = products.filter((product) => {
    return product?.tagIds?.[0] === "L_l3O4zY-04V4N7NwQZXE";
  });

  if (!exceptCurrent.length) return null;

  return (
    <>
      <Heading title="Онцлох бараанууд" className="md:mt-16 md:mb-8" />
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent>
          {exceptCurrent.map((product: IProduct) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              key={product._id}
            >
              <SpecialProducts {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="2xl:-left-12 left-6 hidden md:inline-flex" />
        <CarouselNext className="2xl:-right-12 right-6 hidden md:inline-flex" />
      </Carousel>
    </>
  );
};

export default RecommendedProducts;
