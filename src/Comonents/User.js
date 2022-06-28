import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function User() {
  const [user,setUser] = useState({})
const {id} = useParams()
useEffect(() => {
   
  axios.get(`https://dummyjson.com/users/${id}`).then(e=>setUser(e.data))
}, [id])


return (
<>
<div>Hello</div>
    <div>User id is: {JSON.stringify(user)}</div>
   <Link to={`/user/${parseInt(id)+1}`}>Next User</Link>

</>
  )
}
