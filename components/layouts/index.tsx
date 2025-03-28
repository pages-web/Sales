import { ChevronDownIcon } from "@radix-ui/react-icons";
import { NavbarTop } from "./navbar-top";
import { Button } from "../ui/button";
import Logo from "./logo";
import BottomNav from "../bottom-nav/bottom-nav";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import Footer from "../footer/footer";
import SearchPopup, { SearchPopupTrigger } from "../search/search-popup";
import CartTrigger from "../cart/cart-trigger";
import CurrentUser from "@/containers/auth/current-user";
import { Suspense } from "react";
import Search from "../search/search";
const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavbarTop>
        <Button
          variant="ghost"
          className="hover:bg-background/10 hidden lg:inline-flex"
          asChild
        >
          {/* <Link href={"/category"}>
            Дэлгүүр
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Link> */}
        </Button>
        <Suspense fallback={<div className="hidden lg:block flex-1" />}>
          <div className="flex  justify-center md:justify-center w-full">
            
          <Search className="hidden md:block flex-1 max-w-2xl" />
          </div>
        </Suspense>
        {/* <div className="flex lg:hidden  justify-end items-endflex-1">
          <div className="md:hidden flex">
            <MobileMenu />
          </div>
        </div> */}
        <nav className="hidden md:flex md:flex-row md:flex-nowrap gap-4 relative">
          {/* <SocialLinks /> */}
          <SearchPopupTrigger />
          <CartTrigger />
          <CurrentUser />
        </nav>
      </NavbarTop>

      <SearchPopup />
      {/* <Banner /> */}
      {children}
      <ScrollToTop />
      <Suspense>
        <BottomNav />
      </Suspense>
      <Footer />
    </>
  );
};

export default DefaultLayout;
