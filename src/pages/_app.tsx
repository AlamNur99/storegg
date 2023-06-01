import type { AppProps } from 'next/app'
import '@/styles/utilities.css'
import '@/styles/homepage.css'
import '@/styles/detail.css'
import '@/styles/checkout.css'
import '@/styles/complete-checkout.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
