import Navbar from './nav-bar/navBar'
import MobileNavBar from './mobile-nav-bar/mobileNavBar'
import SideFilter from './side-filter/side-filter'

export default function Layout({children}) {
    return (
        <div className='pageContainer'>
            <Navbar />
            <MobileNavBar />
            <div className='allContent'>
                <SideFilter className='sideFilter' />
                <main className='contentContainer'>{children}</main>
            </div>
        </div>
    )
}