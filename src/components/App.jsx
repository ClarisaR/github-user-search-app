import React, { useEffect, useState } from 'react'
import Header from './Header'
import UserSearchForm from './UserSearchForm'
import UserInfo from './UserInfo'
import { getUserByUsername } from '../services/user_service'


export default function App() {
  const [userSearch, setUserSearch] = useState(null)
  const [error, setError] = useState(null)
  useEffect(()=>{
    async function fetchUser(){
      try{
        const user = await getUserByUsername('clarisar')
        setUserSearch(user)
      }catch(error){
        setError(error)
      }
    }
    fetchUser()
  },[])

  return (
    <div className='mx-auto my-8 w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-2/5 '>
        <Header/>
        <UserSearchForm setUserSearch={setUserSearch} setError={setError}/>
        <UserInfo userSearch={userSearch} error={error}/>
    </div>
  )
}
