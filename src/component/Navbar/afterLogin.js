


"use client"
import React from 'react';
import { useRouter } from 'next/navigation';


function AfterLogin() {

      const router = useRouter()
      const onLogout  = () =>{
        // event.prevenDefault()
        console.log("onlougt");
        localStorage.removeItem('@userLogin')
        router.push("/")
        window.location.reload()
    }
  return (
    <div>
      <li>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='https://loremflickr.com/320/240' alt=''/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40 absolute -bottom-[170px] items-center'
          >
            <li>
              <button
              key="1"
              onClick={()=>router.push("account-information")}
                className='btn btn-ghost'>Profile</button> 
            </li>
            <li>
              <button
                className='btn btn-ghost'>Setting</button> 
            </li>
            <li>
             <button
             key="1"
             onClick={onLogout}
              className='btn btn-ghost'>Logout</button> 
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
}

export default AfterLogin;
