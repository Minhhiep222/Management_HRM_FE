import Layout from '@/app/layout';
import { AppProps } from 'next/app';
// import '';

const MyAppMySpace = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />

            {/* <div className=""></div> */}
        </Layout>
    );
};

export default MyAppMySpace;   
