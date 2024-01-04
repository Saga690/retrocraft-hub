import '@/styles/globals.css'
import Navbar from '@/components/Navbar/navbar.js'
import Footer from '@/components/Footer/footer.js'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
