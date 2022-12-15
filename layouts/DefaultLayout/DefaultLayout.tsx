import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

interface LayoutProps {
  title?: string;
  children?: ReactNode;
}

export const DefaultLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Menu />
      <div id='content'>{children}</div>
      <Footer />
    </>
  );
};
