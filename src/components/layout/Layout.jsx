import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Sidebar />

      <div className='main-content'>
        <Navbar />

        <div className='content-wrapper'>
          {children}
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout

