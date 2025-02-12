import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "../ui/image";
import { IProduct } from "../../types/product.types";
import ProductCardAdd from "../product-card/product-card-add.client";
import Price from "../price/price";

const ProductCard = ({
  className,
  ...product
}: IProduct & { className?: string }) => {
  const { name, attachment, unitPrice, _id, remainder } = product;

  const availableStock = remainder ?? 0;

  return (
    <div
      className={cn(
        "border-neutral-200 rounded-md flex-auto flex-shrink-0",
        className
      )}
    >
      <div className="relative">
        <Link
          href={`/product/${_id}`}
          className="relative block w-full overflow-hidden pb-[100%]"
        >
          <Image
            src={attachment?.url || ""}
            alt={name} // It's good to set alt text for accessibility
            className="rounded-md aspect-square w-full h-full absolute inset-0"
            width={500}
            height={500}
            quality={100}
            key={_id}
          />
          {availableStock === 0 && (
            <small className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
              Дууссан
            </small>
          )}
        </Link>
      </div>
      <div className="p-2 border-neutral-200 text-sm">
        <Link
          href={`/product/${_id}`}
          className="hover:text-primary line-clamp-1"
        >
          {name}
        </Link>
        <span
          className="block py-2 font-bold"
          data-testid="product-card-vertical-price"
        >
          <Price amount={unitPrice} />
        </span>
        <ProductCardAdd {...product} />
      </div>
    </div>
  );
};

export default ProductCard;
