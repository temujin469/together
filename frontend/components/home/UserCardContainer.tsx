import Link from 'next/link'
import React from 'react'
import { users } from '../../utils/data'
import UserCard from './UserCard'


function UserCardContainer() {
  return (
    <div className='md:px-10 xl:px-24'>
      <div className='py-5 grid gap-4 sm:gap-5 xl:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
        {
          Array(2).fill(null).map((_) => (
            users.map(user => (
              <UserCard user={user} key={user.slug} />
            ))
          ))
        }
      </div>
      <div className='flex justify-end 2xl:pr-4'
      data-aos="fade-left">
        <button className='btn w-full sm:w-auto'>
          <Link href="#">
            <a>
              Цааш үзэх
            </a>
          </Link>
        </button>
      </div>
    </div>

  )
}

export default UserCardContainer