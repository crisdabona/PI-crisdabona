import { useEffect, useState } from 'react'
import validation from '../../validation.js'
import './form.css'

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) =>{
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if(userData.email !== '' || userData.password !== ''){
      const userValidated = validation(userData)
      setErrors(userValidated)
    }
  }, [userData])

  const onSubmit = (event) => {
    event.preventDefault()
    login(userData)

}

/*   const handleValidation = () => {
    const emailErrors = validateEmail(userData.email);
    const passwordErrors = validatePassword(userData.password);
    setErrors({ ...emailErrors, ...passwordErrors });
} */

  return (
    <div>
    <h1 style={{textAlign: 'center', color: 'white', fontSize: '6vh', borderBottom: '2px solid #13f607'}}>Rick and Morty Characters</h1>
    <div className='body'>
      <div className='container'>
        <span className='borderLine'></span>
        <form onSubmit={onSubmit}>
            <h2>Sign in</h2>
          <div className='inputBox'>
            {errors.email && (
              <p
                style={{
                fontSize: '12px',
                color: 'red',
                textAlign: 'end',
                }}
              >
            {errors.email}
            </p>
            )}
            <input 
              type="email" 
              name='email'
              required='required'
              value={userData.email}
              onChange={handleChange}
            />
            <span>Email:</span>
            <i></i>
          </div>

          <div className='inputBox'>
            {errors.password && (
              <p style={{fontSize: '12px', color: 'red', textAlign: 'end' }}>
              {errors.password}
              </p>
            )}
            <input 
              type="password" 
              name='password'
              required='required'
              value={userData.password}
              onChange={handleChange}
            />
            <span>Password: </span>
            <i></i>
          </div>

            <button 
              type='submit'
              disabled={!userData.email || !userData.password || errors.email || errors.password}
            >Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Form