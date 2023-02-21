'use client'
import React, { useState } from 'react'
import Banner from '@/component/AuthBanner'
import FormAuth from '@/component/AuthForm'
import axios from 'axios'
import { redirect, useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

function Login() {
    // Private route
    const userId = Cookies.get('userId')
    if (userId) {
        redirect('/home')
    }

    const router = useRouter()
    const [formLogin, setFormLogin] = useState({ email: "", password: "" })
    // console.log("formlogin", formLogin);
    const handleLogin = (event) => {
        event.preventDefault()
        axios(
            { url: "http://localhost:5000/api/v1/auth/login", method: "POST", data: formLogin }
        )
            .then((res) => {
                // console.log("dta login", res.data.data);
                Cookies.set('userId', res.data.data.user.id)
                Cookies.set('userRole', res.data.data.user.role)
                // localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
                toast.success('Login success!', {
                    position: "bottom-right",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setTimeout(() => {
                    router.push('/');
                }, 1500);
            })
            .catch((err) => {
                toast.error('Wrong email/password!', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            });
    }

    return (
        <div className='w-full flex'>
            <ToastContainer />
            <Banner />
            <FormAuth
                handleSubmit={handleLogin}
                title="Login"
                formClass="md:w-[40%] w-full pb-24 pt-12 md:py-40"
                desc={"Sign in with your data that you entered during your registration"
                }
                email={<div className="form-control w-full" > <label className="label">
                    Email
                </label>
                    <input
                        onChange={(e) => setFormLogin({
                            ...formLogin,
                            email: e.target.value
                        })}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full" />
                </div>}
                password={<div className="form-control w-full mt-5" > <label className="label">
                    Password
                </label>
                    <input
                        onChange={(e) => setFormLogin({
                            ...formLogin,
                            password: e.target.value
                        })}
                        type="password"
                        placeholder="Type here"
                        className="input input-bordered w-full" />
                </div>}
                forgotPass={<p className=' mt-5' > Forgot your password
                    ? <span className='text-[#5F2EEA]'>Reset now</span>
                </p>}
                btnSubmit={<button className="btn btn-primary w-full md:mt-16 mt-10" type='submit' > Login</button>}
                optionAuth={<p onClick={() => { router.push('/signup') }} className='border-b-[3px] text-lg font-bold pb-1 w-28 border-[#5F2EEA] text-[#5F2EEA] cursor-pointer'>Sign Up Here</p>} />
        </div>
    )
}

export default Login