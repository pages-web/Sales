import NavbarTop from './navbar-top.transparent';
import BottomNav from '../bottom-nav/bottom-nav';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Footer from '../footer/footer';
import CartTrigger from '../cart/cart-trigger';
import CurrentUser from '@/containers/auth/current-user';
import { Suspense } from 'react';
import SearchPopup, { SearchPopupTrigger } from '../search/search-popup';
import { Button } from '../ui/button';
import Link from 'next/link';
import Logo from './logo';

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavbarTop>
        <Button
          variant="link"
          asChild
          className="text-inherit hidden md:inline-flex"
        >
          <Link href={'/category'}>Бүх бүтээгдэхүүн</Link>
        </Button>{' '}
        <Logo />
        <nav className="hidden md:flex md:flex-row md:flex-nowrap gap-4 relative">
          <SearchPopupTrigger />
          <CartTrigger />
          <CurrentUser />
        </nav>
      </NavbarTop>
      <SearchPopup />
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
