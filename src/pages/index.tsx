import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      
      <Head>
        <title>Web3Pedia</title>
        <meta name="description" content="Hand-picked Tools and Resources for web3 dOers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className='flex w-full h-screen justify-center items-center'>
        <h1 className='text-[100px] font-bold'>
          Web3 Tool Kit
        </h1>
      </main>
    </div>
  )
}

export default Home;
