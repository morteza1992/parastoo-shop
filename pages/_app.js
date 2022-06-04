import '../src/styles/globals.scss'
import '../src/font/css/all.css'
import '../src/font/css/vazir.css'
import Layout from '../components/layout'

export default function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}