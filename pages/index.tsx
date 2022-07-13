import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3Pedia</title>
        <meta name="description" content="Hand-picked Tools and Resources for web3 dOers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello Web3 World!
        </h1>
      </main>
    </div>
  )
}

export default Home
