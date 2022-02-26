import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
