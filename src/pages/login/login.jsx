import React,{useEffect,useState} from 'react'
import Loading from '../../components/shared/Loading'
import Navbar from '../../components/login/Navbar'
import Login from '../../components/login/Login'
import AuthFooter from "../../components/shared/AuthFooter"
export default function login() {
  const [loading,setLoading]=useState(false)
useEffect(() => {
  setLoading(true)
setTimeout(()=>{
  setLoading(false)
},1000)
}, [])

return (
    <div className='bg-[#1A1D29]'>
    {
      loading&&<Loading/>
    }
  <Navbar/>
  <Login/>
    <AuthFooter/>
    </div>
  )
}
