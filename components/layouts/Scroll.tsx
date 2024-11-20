'use client';

import useIsScrolled from '@/hooks/useIsScrolled';
import { searchPopupAtom } from '@/store';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';

const Scroll = ({ children }: React.PropsWithChildren) => {
  const isScrolled = useIsScrolled();
  const openSearchPopup = useAtomValue(searchPopupAtom);
  const pathname = usePathname();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full flex right-0 z-50 items-center h-[120px] text-white"
        animate={{
          height: isScrolled ? 60 : 120,
          color:
            isScrolled || openSearchPopup || pathname !== '/'
              ? 'hsl(var(--foreground))'
              : '#fff',
        }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full bg-white opacity-0"
          animate={{
            opacity: isScrolled || openSearchPopup ? 1 : 0,
          }}
        />
        {children}
      </motion.div>
      <div className="mb-32" />
    </>
  );
};

export default Scroll;
