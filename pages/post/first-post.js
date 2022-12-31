import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (

<Layout>

<Head>
<title>Manel Web Dev</title>
</Head>

      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '256px', height: '256px' }}>
  <Image src="/images/perfilwebdev_mini.png" height={256} width={256} alt="Your Name"/>
        </div>

<h1>Manel Web Dev</h1>

<div>

<p> Hello, my name is Manel, I am sound and IT tecnician </p>

<p> This 2023 I started my journey in Next.js and Web3 development </p>

<p> I have some experience in Linux, C & html and started to explore Solana and Tezos programming models thought basic tutorials </p>

</div>

      <footer>
      <h2>
        <Link href="/">Volver al Inicio</Link>
      </h2>
      </footer>

</Layout>

  );
}




