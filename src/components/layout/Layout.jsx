import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Sidebar />

      <div className='main-content'>
        <Navbar />

        <div className='content-wrapper'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout

