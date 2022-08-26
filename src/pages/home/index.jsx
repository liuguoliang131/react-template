import { useEffect } from 'react'
import { getTest } from '../../axios/api'
import { useLocation, useNavigate } from 'react-router-dom'
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
      home
    </div>
  );
}

export default Home;