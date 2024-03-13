import React, { useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import { getUserByUsername } from '../services/user_service';

export default function UserSearchForm(props) {
  const { setUserSearch, setError } = props
  const inputRef = useRef()
  
  async function handleUserSearch(e) {
    e.preventDefault()
    const userToSearch = inputRef.current.value
    setError(null)
    try{
      const userInfo = await getUserByUsername(userToSearch)
      setUserSearch(userInfo)
    }catch(error){
      setError(error) 
    }
  }

  return (
    <form onSubmit={handleUserSearch} className='p-2 mb-4 rounded-md flex items-center justify-between gap-x-2 dark:bg-dark-background-card'>
      <CiSearch className='w-6 h-6 text-blue' />
      <input ref={inputRef} type="search" placeholder='Search GitHub username...' className='bg-dark-background-card grow outline-none' />
      <button type='submit' className='bg-background-button rounded-md p-2 cursor-pointer font-semibold tracking-wider'>Search</button>
    </form>
  )
}
