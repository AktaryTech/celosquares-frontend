import Head from "next/head";
import Image from "next/image";
import { useContractKit } from "@celo-tools/use-contractkit";
import AppNavigation from '../components/AppNavigation'
import TheBox from '../components/TheBox'
import cx from 'classnames'
import Link from 'next/link';


export default function Home() {

    return (
        <div className = "container">
        <Head>
        <title>CeloSquares - Play to Win!</title> 
        <meta name = "description" content = "CeloSquares" />
        <link rel = "icon" href = "/favicon.ico" />
        </Head>

        <div className = "flex flex-col w-full"> 
        <AppNavigation />
        <main className = "main">

        <div className = "title">
        Use Celo to bet on your favorite teams and win big!!!</div>

        <TheBox color = "grey" className = "w-1/3 -mb-8 z-10 p-4" > Join your friends in an online opportunity to win big while watching your favorite teams.</TheBox>
        <TheBox color = "orange" className = "w-4/5 p-12">
        <ul>
        <li> Uses Celo blockchain to buy squares to enter play </li>  -
        <li> Free to organizers to run </li> -
        <li> Well suited during social distancing </li> -
        <li> Quarterly winners takes 20 % of pool and final winner takes 40 % </li> 
        </ul> 
        </TheBox>
        <img src = "../public/images/football.jpg" alt = "Play to Win!"/> 
        <TheBox color = "clear" className = "h-64 p-12" /> </TheBox>

        <footer className = { cx(`bg-orange footer`) } >
        </footer>

        </main> 
        </div>  
        </div>
    );
}