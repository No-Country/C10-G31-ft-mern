import Head from 'next/head'
import HomeSpotech from '@/components/HomeSpotechspotech'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Spotech</title>
        <meta name="description" content="Spotech store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='lg:max-w-5xl lg:mx-auto'>
        <HomeSpotech />
      </main>
    </>
  )
}
