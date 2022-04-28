import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../compnents/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{ margin: 0, padding: 0 }
      }>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
