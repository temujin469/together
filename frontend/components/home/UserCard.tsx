import React from 'react'
import { User } from '../../typings'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Rate } from 'antd'
import { AiOutlineInstagram } from 'react-icons/ai'

type Props = {
  user: User
}

function UserCard({ user }: Props) {
  return (
    <div className='flex justify-center'
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay='10'>
      <div className='w-full max-w-[250px] xxl:max-w-[280px] rounded-lg overflow-hidden border border-color3/40 cursor-pointer'>
        <div className='h-[170px] md:h-[220px] lg:h-[200px] xl:h-[240px] w-full'>
          <img src={user.profileImage} alt={user.name} className="h-full w-full object-cover" />
        </div>
        <div className='p-4 lg:p-5'>
          <h4 className='sub-heading'>{user.name}</h4>
          <div><Rate disabled defaultValue={user.rate} className="" /></div>
          <div className='flex gap-1 items-center'><HiOutlineLocationMarker className='text-[18px]' /><p>{user.location}</p></div>
          <div className='flex gap-1 items-center'><AiOutlineInstagram className='text-[18px]' /><p>{user.followers}</p></div>
        </div>
      </div>
    </div>
  )
}

export default UserCard