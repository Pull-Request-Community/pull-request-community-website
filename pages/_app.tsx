import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.scss';
import { store } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
