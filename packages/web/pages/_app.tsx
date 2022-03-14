import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'tailwind'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
