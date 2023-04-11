import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css"
import Head from 'next/head';
import MainLayout from '@app/layouts/main';

const App = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  // const RTL: boolean = isRTL(router.locale as string);
  return (
    // <div dir={RTL ? 'rtl' : 'ltr'} className='mainApp'>
    <div className='mainApp'>
      <Head>
        <title>Ai powerplay</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
export default App
