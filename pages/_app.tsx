import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
