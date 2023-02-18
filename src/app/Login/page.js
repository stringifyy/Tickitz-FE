
import React from 'react'
import Banner from '@/component/AuthBanner'
import FormAuth from '@/component/AuthForm'

function Login() {
    return (
        <div className='w-full flex'>
            <Banner/>
            <FormAuth
            title="Login"
            formClass="md:w-[40%] w-full pb-24 pt-12 md:py-40"
            desc={
                "Sign in with your data that you entered during your registration"
            }
            email={
                <div className="form-control w-full">
                    <label className="label">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"/>
                </div>
            }
            password={
                <div className="form-control w-full mt-5">
                    <label className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Type here"
                        className="input input-bordered w-full"/>
                </div>
            }
            forgotPass={
                <p className=' mt-5'>Forgot your password? <span className='text-[#5F2EEA]'>Reset now</span></p>
            }
            btnSubmit={
                <button className="btn btn-primary w-full md:mt-16 mt-10" type='submit'>Login</button>
            }
            optionAuth={
                <p className='border-b-[3px] text-lg font-bold pb-1 w-28 border-[#5F2EEA] text-[#5F2EEA]'>Sign Up Here</p>
            }
            />
        </div>
    )
}

export default Login