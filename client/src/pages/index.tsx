import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotech</title>
        <meta name="description" content="Spotech store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p className='font-bold'>Spotech</p>
        </div>
      </main>
    </>
  )
}
