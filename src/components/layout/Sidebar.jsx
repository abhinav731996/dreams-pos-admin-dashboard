import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='logo'>DreamsPOS</div>

      <ul>
        <li>
          <NavLink to='/dashboard'>
            <i className='bi bi-grid'></i>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to='/products'>
            <i className='bi bi-box'></i>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to='/orders'>
            <i className='bi bi-cart'></i>
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to='/customers'>
            <i className='bi bi-people'></i>
            Customers
          </NavLink>
        </li>

        <li>
          <NavLink to='/settings'>
            <i className='bi bi-gear'></i>
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
