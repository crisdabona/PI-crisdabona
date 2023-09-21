import React from 'react'
import { useState } from 'react'
import {validateEmail, validatePassword} from '../validation.js'
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

  const onSubmit = (event) => {
    event.preventDefault()
    login(userData)

}

const handleValidation = () => {
  const emailErrors = validateEmail(userData.email);
  const passwordErrors = validatePassword(userData.password);
  setErrors({ ...emailErrors, ...passwordErrors });
}

  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:&ensp;&ensp;&ensp;&ensp;</label>
        <input 
          type="email" 
          name='email'
          value={userData.email}
          onChange={handleChange}
          onBlur={handleValidation}
          />
        <div style={{ marginBottom: '20px' }}>
          <p style={{ height: errors.email ? '20px' : '0', overflow: 'hidden', color: 'red', transition: 'height 0.3s ease' }}>
          {errors.email}
          </p>
        </div>


        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          name='password'
          value={userData.password}
          onChange={handleChange}
          onBlur={handleValidation}
          />
        <div style={{ marginBottom: '20px' }}>
          <p style={{ height: errors.password ? '20px' : '0', overflow: 'hidden', color: 'red', transition: 'height 0.3s ease' }}>
          {errors.password}
          </p>
      </div>


        <button 
          type='submit'
          disabled={!userData.email || !userData.password || errors.email || errors.password}
        >Submit</button>
    </form>
  )
}

export default Form