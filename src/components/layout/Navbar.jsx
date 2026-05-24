import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../feature/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className='top-navbar'>
      <div>
        <h4>Dashboard</h4>
      </div>

      <button className='btn btn-danger' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Navbar
