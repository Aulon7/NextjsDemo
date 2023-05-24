import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '@components/MainLayout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
