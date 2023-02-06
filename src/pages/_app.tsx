import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'auth/auth';
import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider>
      {/* injecting into <head> ::: optimized Inter font w/o classname */}
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AuthProvider>
  );
}