import { CategoryCard } from "@/components/category-card/category-card";
import Display from "@/components/display/display-new";
import GridBanner from "@/components/grid-banner/grid-banner";
import { Heading } from "@/components/heading/heading";
import MainBanner from "@/components/main-banner/main-banner";
import RecommendedProducts from "@/components/recommended-products/recommended-products";
import SpecialRecommendedProducts from "@/components/special-products/recommended-products";
import { Button } from "@/components/ui/button";
import { getConfig } from "@/sdk/queries/auth";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next/types";
import { Suspense } from "react";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + " - Нүүр хуудас",
    openGraph: {
      title: config.name + " - Нүүр хуудас",
    },
  };
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainBanner />
      <CategoryCard />
      <div className="container mb-6 md:mb-16">
        <Suspense>
          <SpecialRecommendedProducts />
        </Suspense>
      </div>
      <Display />
      <div className="container flex items-center justify-between">
        <Heading title="Сүүлд нэмэгдсэн" className=" text-left md:mb-5" />
        <Button asChild variant="link" className="mb-3 md:mb-5">
          <Link href="/category">
            Цааш үзэх
            <ChevronRight className="h-5 w-5 ml-1 -mr-2" strokeWidth={1.5} />
          </Link>
        </Button>
      </div>
      <div className="container mb-6 md:mb-16">
        <Suspense>
          <RecommendedProducts />
        </Suspense>
      </div>
    </div>
  );
}
