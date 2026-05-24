import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('dreamsUsers')) || []

    users.push(formData)

    localStorage.setItem('dreamsUsers', JSON.stringify(users))

    navigate('/')
  }

  return (
    <div className='auth-wrapper'>
      <div className='auth-card'>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              name='name'
              placeholder='Name'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <input
              type='email'
              className='form-control'
              name='email'
              placeholder='Email'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <input
              type='password'
              className='form-control'
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </div>

          <button className='btn btn-primary w-100'>Register</button>
        </form>

        <p className='mt-3'>
          Already have account? <Link to='/'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
