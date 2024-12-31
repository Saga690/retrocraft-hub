import '@/styles/globals.css'
import Navbar from '@/components/Navbar/navbar.js'
import Footer from '@/components/Footer/footer.js'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return <>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  </>
}
