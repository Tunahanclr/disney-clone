import React,{useEffect,useState} from 'react'
import Loading from '../../components/shared/Loading'
import AuthFooter from '../../components/shared/AuthFooter'
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'

export default function () {
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

  <ForgotPassword/>
  <AuthFooter/>
    </div>
  )
}
