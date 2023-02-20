


"use client"
import React from 'react';
import { useRouter } from 'next/navigation';


function AfterLogin() {

      const onLogout  = () =>{
        // event.prevenDefault()
        console.log("onlougt");
        localStorage.removeItem('@userLogin')
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
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
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
