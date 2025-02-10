import Link from "next/link";
import { Separator } from "../ui/separator";
import CategoryNavContainer from "@/containers/products/category-nav";
import { getConfig } from "@/sdk/queries/auth";
import Image from "@/components/ui/image";
import { Suspense } from "react";

export async function NavbarTop({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  const { config } = await getConfig();
  const { logo } = config?.uiOptions || {};
  return (
    <header
      className={
        "h-14 lg:h-[111px] z-50 lg:sticky lg:-top-3 lg:pt-2.5 lg:shadow-md bg-white text-black"
      }
      {...rest}
    >
      <div className="flex gap-[clamp(1rem,3vw,3rem)] justify-between items-center w-full lg:h-[60px] lg:sticky top-0 container pt-1 lg:pt-0">
        <Link
          href="/"
          aria-label="SF Homepage"
          className="h-12 md:w-[50px] text-2xl overflow-hidden"
        >
          <Image
            src={logo}
            height={100}
            width={128}
            quality={100}
            skipAnimation
            priority
            alt=""
            className="object-contain md:flex h-12 w-auto hidden object-left"
          />
        </Link>
        {children}
      </div>

      {/* <div className="hidden lg:block bg-white sticky top-[60px]">
        <Separator className="bg-background/10" />
        <div className="container flex justify-center w-[100vw]  items-center">
          <Suspense>
            <CategoryNavContainer />
          </Suspense>
        </div>
      </div> */}
    </header>
  );
}
