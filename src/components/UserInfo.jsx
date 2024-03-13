import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
import { formatDateUTC } from "../utils/format_date"
import { FaSpinner } from "react-icons/fa";
import clsx from 'clsx';

export default function UserInfo(props) {
    const user = props.userSearch
    if(!user){
        return <FaSpinner/>
    }
    if(props.error){
        return <h2 className='text-red-600 text-xl'>{props.error.message}</h2>
    }
    return (
        <div className='grid grid-cols-mobile grid-rows-mobile sm:grid-rows-tablet md:grid-cols-desktop gap-x-4 gap-y-6 md:gap-y-4 py-10 px-8 rounded-md dark:bg-dark-background-card'>
            <img src={user.avatar_url} alt="avatar" className='rounded-full h-20 w-20 sm:h-32 sm:w-32 md:row-span-2' />
            <div className='flex flex-col justify-center'>
                <h2 className='font-bold text-lg'>{user.name}</h2>
                <small className='text-blue block mb-1'>@{user.login}</small>
                <small>Joined {formatDateUTC(user.created_at)}</small>
            </div>
            <div className='col-span-2 md:col-start-2'>
                <small>{user.bio ? user.bio : 'No bio'}</small>
            </div>

            <div className='col-span-2 md:col-start-2 flex justify-evenly gap-x-4 gap-y-4 flex-wrap bg-dark-background-body px-6 py-4 rounded-md'>
                <div className='text-center'>
                    <small>Repos</small><br />
                    <span className='font-semibold'>{user.public_repos}</span>
                </div>
                <div className='text-center'>
                    <small>Followers</small><br />
                    <span className='font-semibold'>{user.followers}</span>
                </div>
                <div className='text-center'>
                    <small>Following</small><br />
                    <span className='font-semibold'>{user.following}</span>
                </div>
            </div>

            <div className='col-span-2 md:col-start-2 flex flex-col flex-wrap gap-y-4'>
                <span className={clsx('flex gap-x-4 items-center', {
                    'text-gray-400': !user.location
                })}>
                    <FaLocationDot />
                    <small>{user.location || 'Not Available'}</small>
                </span>
                <span className={clsx('flex gap-x-4 items-center', {
                    'text-gray-400': !user.blog
                })}>
                    <FaLink />
                    <small>{user.blog || 'Not Available'}</small>
                </span>
                <span className={clsx('flex gap-x-4 items-center', {
                    'text-gray-400': !user.twitter_username
                })}>
                    <FaTwitter />
                    <small>{user.twitter_username || 'Not Available'}</small>
                </span>
                <span className={clsx('flex gap-x-4 items-center', {
                    'text-gray-400': !user.company
                })}>
                    <BsBuildings />
                    <small>{user.company || 'Not Available'}</small>
                </span>
            </div>
        </div>
    )
}
