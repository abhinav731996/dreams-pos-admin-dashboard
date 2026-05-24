import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../../feature/authSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('dreamsUsers')) || []

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    )

    if (!matchedUser) {
      alert('Invalid Credentials')
      return
    }

    dispatch(login(matchedUser))
    navigate('/dashboard')
  }

  return (
    <div className='auth-wrapper'>
      <div className='auth-card'>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className='btn btn-primary w-100'>Login</button>
        </form>

        <p className='mt-3'>
          Don't have account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
