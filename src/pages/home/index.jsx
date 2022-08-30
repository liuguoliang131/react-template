import React, { useEffect } from 'react'
import { getTest } from '../../axios/api'
import { useLocation } from 'react-router-dom'
import LuckyDemo from './components/luckyDemo/index.jsx'
const Home = (props) => {
  const location = useLocation()
  const getData = () => {
    console.log('home', props, location.state)
    getTest().then(res => {
      console.log('getData', res)
    }).catch(error => {
      console.log(error)
    })
  }
  useEffect(() => {
    getData()
  })
  return (
    <div>
      <LuckyDemo></LuckyDemo>
    </div>
  )
}

export default Home
