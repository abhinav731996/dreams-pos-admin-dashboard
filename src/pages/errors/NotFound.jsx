import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <h1>404</h1>
      <p>Page Not Found</p>

      <Link to='/dashboard' className='btn btn-primary'>
        Back To Dashboard
      </Link>
    </div>
  )
}

export default NotFound
