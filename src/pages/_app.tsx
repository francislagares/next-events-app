import { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import '@/styles/global.css';
import { NotificationContextProvider } from '@/store/NotificationContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NotificationContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </NotificationContextProvider>
);

export default MyApp;
