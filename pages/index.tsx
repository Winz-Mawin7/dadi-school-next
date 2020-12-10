import Head from 'next/head';
import Layout from './component/Layout';
import Testing from './component/Testing';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DADI School</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Testing />
    </Layout>
  );
}
