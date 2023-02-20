'use client'
import React, {useState, useEffect} from 'react'
import Banner from '@/component/AuthBanner'
import FormAuth from '@/component/AuthForm'
import axios from 'axios'
import Login from '../login/page'
import { useRouter } from "next/navigation";


function SignUp() {

    const [isData, setIsData] = useState(
        {email: "", username: "", phone_number: "",password:""}
    )
    console.log("isdata", isData);
    const router = useRouter()



    const handleSigup = (event) => {
        event.preventDefault()
        console.log("haii");
        axios({
            url: "http://localhost:5001/api/auth/regis-user",
            method: "POST",
            data: isData,
        })
            .then((res) => {
            alert(res.data.message);
            router.push("/login");
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div className='w-full flex'>
            <Banner/>
            <FormAuth
                handleSubmit={handleSigup}
                title="SignUp"
                formClass="md:w-[40%] w-full pt-12 pb-24 md:py-24"
                desc={"Sign in with your data that you entered during your registration"
}
                name={<div className = "form-control w-full mt-5" > <label className="label">
                    Name
                </label>
                <input
                    onChange={(e) => setIsData({

                        ...isData,
                        username: e.target.value
                    })
}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"/>
            </div>}
                email={<div className = "form-control w-full mt-5" > <label className="label">
                    Email
                </label>
                <input
                    onChange={(e) => setIsData({
                        ...isData,
                        email: e.target.value
                    })}
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full"/>
            </div>}
                phone={<div className = "form-control w-full mt-5" > <label className="label">
                    Phone
                </label>
                <input
                    onChange={(e) => setIsData({
                        ...isData,
                        phone_number: e.target.value
                    })}
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered w-full"/>
            </div>}
                password={<div className = "form-control w-full mt-5" > <label className="label">
                    Password
                </label>
                <input
                    onChange={(e) => setIsData({
                        ...isData,
                        password: e.target.value
                    })}
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full"/>
            </div>}
                forgotPass={<div className = "form-control mt-8" > <label className="label cursor-pointer flex justify-start">
                    <input
                        type="checkbox"
                        checked="checked"
                        className="checkbox checkbox-primary mr-5"/>
                    <span className="label-text text-lg">I agree to terms & conditions</span>
                </label>
            </div>}
                btnSubmit={<button className = "btn btn-primary w-full mt-10" type = 'submit' > SignUp</button>
}
                optionAuth={<p className = '' > Do you already have an account
                    ? <span className='text-[#5F2EEA]'>
                        Log in
                    </span>
                </p>
                }
            />
        </div>
    )
}

export default SignUp