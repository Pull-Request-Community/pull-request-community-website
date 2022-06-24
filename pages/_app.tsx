import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.scss';
import {wrapper} from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
