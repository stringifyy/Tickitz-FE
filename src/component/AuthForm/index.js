import React from 'react'
import Image from 'next/image'

function FormAuth({email, password, name, phone, desc, forgotPass,btnSubmit, optionAuth, formClass, title}) {
  return (
    <>
        <div className={formClass}>
            <div className='container'>
                <div className=''>
                    <p className='md:hidden text-[26px] font-semibold text-[#5F2EEA]'>Tickitz</p>
                    <p className='md:text-5xl text-[26px] font-semibold my-10 md:m-0 md:mb-5'>{title}</p>
                    <p className='hidden md:flex text-lg text-[#AAAAAA]'>{desc}</p>
                </div>
                <form>
                    {name}
                    {email}
                    {phone}
                    {password}
                    {forgotPass}
                    {btnSubmit}
                    <div className='flex flex-col items-center mt-10 w-full'>
                        {optionAuth}
                        <p className='text-lg font-bold text-[#AAAAAA] mt-5'>or</p>
                    </div>
                    <div className='flex justify-between mt-10 w-full'>
                        <button className="btn bg-white border-none text-black shadow-md w-2/5 font-semibold hover:text-white ">
                            <Image src={require("@/assets/icons_google.png")} className="w-5 mr-4" alt='gogle'/>
                            google</button>
                        <button className="btn bg-white border-none text-black shadow-md w-2/5 font-semibold hover:text-white">
                            <Image src={require("@/assets/Facebook.png")} alt="facebook" className="w-5 mr-4"/>
                            Facebook</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormAuth