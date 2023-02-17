import Image from 'next/image'
import { Inter } from '@next/font/google'

export default function Home() {
  return (
    <div className=' bg-red-900'>
      <div className='container'>
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost normal-case text-xl">Tickitz</a>
        </div>
      </div>
    </div>
  )
}
