import Head from 'next/head';
import React from 'react'
import Navbar from '../components/header'
import Footer from '../components/footer/Footer'

type Props = {
  children: JSX.Element;
  title: string;
}

const MainLayout = ({ children, title }: Props) => {
  return (
    <div className='relative max-h-screen overflow-hidden overflow-y-scroll'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;