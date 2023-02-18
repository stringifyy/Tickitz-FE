import React from 'react'
import Link from 'next/link'
import profile from '@/assets/images/png/profile.png'
import Image from 'next/image'

export default function ProfilePage() {
  return (
    <div>
      <div className="container">
        <div className='flex flex-col'>

          {/* card profile */}

          <div className="card rounded-none w-72 bg-white">
            <div className="card-body flex">

              {/* action */}
              <div className="flex justify-between">
                <h1>Info</h1>
                <Link href="/profile">
                  <p>edit</p>
                </Link>
              </div>

              {/* profile photo */}
              <div className='flex flex-col items-center justify-center my-10'>
                <div>
                  <Image src={profile} />
                </div>
                <div className='text-center'>
                  <h1 className='text-xl font-semibold'>Firman Subagja</h1>
                  <p className='text-gray-600'>Moviegoers</p>
                </div>
              </div>
            </div>
          </div>

          {/* loyalty point */}
          <div className="card rounded-none mt-1 w-72 bg-white">
            <div className="card-body flex">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h1>Loyalty Points</h1>
                </div>
                <div className='bg-loyalty-points'>
                  <h1>test123</h1>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white">
          <div className="card-body">
            {/* action */}
            <button className='btn btn-link'>Account setting</button>
            <form>
            </form>
          </div>
        </div>
      </div>

      {/* form */}
    </div>

  )
}
