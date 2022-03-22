import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>House Pusher Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Info" />
        <p className="description">
          House Pusher does not collect any data.
        </p>
      </main>

      <Footer />
    </div>
  )
}
