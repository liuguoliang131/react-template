import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
  console.log('login')
  const navigate = useNavigate()
  const handLogin = () => {
    console.log('this', props)
    navigate('/layout/home', { state: { token: 'xxxxx' }, replace: false })
  }
  return (
    <>
      <h3>login</h3>
      <button onClick={() => handLogin()}>登录</button>
    </>
  )
}

export default Login
