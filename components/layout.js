import Navbar from './nav-bar/navBar'
// import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}