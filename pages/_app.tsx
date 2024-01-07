import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
import CalendarModal from 'components/CalendarModal';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import { CalendarModalContextProvider, useCalendarModalContext } from 'contexts/calendar-modal.context';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Projects', href: '/projects' },
  { title: 'Book Meeting', href: '', outlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      <Providers>
        <Modals />
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <CalendarModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </CalendarModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useCalendarModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <CalendarModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
