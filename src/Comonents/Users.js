import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Outlet, Route, Router , Routes, useLocation, useMatch} from 'react-router-dom'




function Users() {
  
    const [user,setUser] = useState()
  useEffect(() => {
 
 
    axios.get('https://dummyjson.com/users').then(e=>setUser(e.data.users))


  }, [])
  const path = useLocation()

 
  return (   <>
    
    {/* <div> {JSON.stringify(user)}</div> */}
 <ul>

{user&&user.map((e)=> {

    return(
        <li key={e.id}>
<Link to={`/user/${e.id}`}>{`${e.firstName} ${e.lastName}`}</Link>
        </li>
    )
})}

 </ul>


 <Outlet/>




    </>
  )
} 

export default Users