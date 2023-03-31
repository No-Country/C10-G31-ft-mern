import Head from 'next/head'
import ArticuloDetallado from '@/components/ArticuloDetalladospotech'

export default function DetalleArticulo() {
  
  return (
    <>
      <Head>
        <title>Spotech</title>
        <meta name="description" content="Spotech store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ArticuloDetallado />
      </main>
    </>
  )
}