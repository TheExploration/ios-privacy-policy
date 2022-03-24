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
        <Header title="Privacy Policy" />
        <p className="description">
              The app does not use third-party services that may collect
              information used to identify you.
        </p>
      </main>

      <Footer />
    </div>
  )
}
