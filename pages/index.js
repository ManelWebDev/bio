import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '/components/layout';
import body from '/styles/globals.css';

export default function FirstPost() {
  return (

<Layout>

<Head>
<title>Manel Web Dev</title>
</Head>

      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '128px', height: '128px' }}>
  <Image src="/images/perfilwebdev_mini_cut.png" height={128} width={128} alt="Your Name"/>
        </div>

<h2>Manel Web Dev</h2>

<div>

<p> Hello, my name is Manel, I am sound and IT technician </p>

<p> This 2023 I started my journey in Next.js and Web3 development </p>

<p> I have some experience in Linux, C & html and started to explore Solana and Tezos programming models thought basic tutorials </p>

</div>
      <footer>
      
        <p><a href="https://github.com/ManelWebDev" target="_blank" >Visit Github</a></p>
        <p><a href="https://linktr.ee/manelwebdev" target="_blank" >Return to Linktree</a></p>
      
      </footer>
</Layout>
  );
}
