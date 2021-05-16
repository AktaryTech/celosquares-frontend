import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContractKit } from "@celo-tools/use-contractkit";
import  AppNavigation  from '../components/AppNavigation' 
import  TheBox  from '../components/TheBox' 
import cx from 'classnames'
import Link from 'next/link'
;


export default function Home() {
  
  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full">
      <AppNavigation />
      <main className={styles.main}>
      
      <div className={styles.title}>
        Some stuff
      </div>
      <TheBox>FooBar</TheBox>
      <div className={styles.card}>
      foobar
      </div>
      <footer className={cx(`border ${styles.footer}`)}>
    
      footer stuff
      </footer>
    
      </main>
      </div>
    </div>
  );
}
