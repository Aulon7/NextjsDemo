import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface RootLayout {
  children: React.ReactNode;
}
const MainLayout = ({ children }: RootLayout) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <main className='main-body'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default MainLayout;
