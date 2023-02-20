

"use client"
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import profile from '@/assets/images/png/profile.png'
import cardPoint from '@/assets/images/svg/loyalty-points.svg'
import Image from 'next/image'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import axios from 'axios'


export default function AccountInfo() {


  const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.id;
  const [dataUser, setDataUser] = useState([]);
  // console.log("data usersdsd", dataUser);


  useEffect(() => {
        axios
        .get(`http://localhost:5000/api/v1/auth/users/${userId}`)
        .then(res => {
            console.log(res);
            setDataUser(res.data.data)
        })
        .catch(err => console.log(err))
    }, [])


    // const [formUser, setFormUser] = useState({
    //   name:"",
    //   email:"",
    //   phone:"",
    // })

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    



  const handleUpdate = (e) =>{

      const body = new FormData();
      body.append('name', name);
      body.append('email', email);
      body.append('phone', phone);
      // body.append('img_profile', image);

      e.preventDefault()
      console.log("hai ini update");
      // axios({
      //   url: `http://localhost:5000/api/v1/auth/users/${userId}`,
      //   method: "PATCH",
      //   data: formUser,
      //   headers: {
      //     'content-type': 'multipart/form-data',
      //   }
      // })
        axios.patch(`http://localhost:5000/api/v1/auth/users/${userId}`, body, {
          method: 'PATCH',
          headers: {
            'Content-type': 'multipart/form-data',
          }
        })
        .then((res) => {
        console.log(res.data.message);
        })
        .catch((err) => {
            console.log(err)
        });



        // axios.put(`http://localhost:5000/api/v1/auth/users/${userId}`,
        //     {
        //       ...formUser
        //     }, {
        //       headers: {
        //       'Access-Control-Allow-Headers':'*',
        //       'content-type': 'multipart/form-data',
        //       }
        //     })
        //   .then(function (response) {
        //   console.log(response);
        //   })
        //   .catch(function (error) {
        //       console.log(error);
        //   })
}


  return (
    <>
    <Navbar/>
      <div className="container mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <div className="card w-full lg:w-80 bg-base-100 rounded-lg shadow-md">
              <div className="card-body">
                <div className="flex justify-between font-semibold">
                  <h2 className="">Info</h2>
                  <Link href="">Edit</Link>
                </div>
                <div className='flex flex-col lg:flex-col justify-center items-center'>
                  <label htmlFor="my-modal-4">
                    <Image src={profile} alt="profile" htmlFor="" />
                  </label>
                  <h2 className='font-bold'>{dataUser?.name}</h2>
                  <p className='text-gray-500'>{dataUser?.phone}</p>
                </div>
              </div>
            </div>

            {/* card loyalty point */}
            <div className="card w-full lg:w-80 bg-base-100 rounded-lg mt-1 shadow-md">
              <div className="card-body ">
                <div className='font-semibold'>
                  <h2>Loyalty Points</h2>
                </div>
                <div className='flex flex-row lg:flex-col justify-center'>
                  <Image src={cardPoint} alt="Card Point" />
                </div>
              </div>
            </div>
          </div>
          {/* end */}

          {/* form card */}
          <div className="card w-full mt-5 lg:mt-0 bg-base-100 rounded-lg ml-0 lg:ml-4 shadow-md">
            <div className="card-body">

              {/* button switch action */}
              <div className="flex border-b-2 border-solid border-gray-300">
                <Link href="/account-information">
                  <button className='btn lg:-ml-4 btn-link text-black no-underline'>Account Settings</button>
                </Link>
                <Link href='/order-history'>
                  <button className='btn btn-link text-black no-underline'>Order History</button>
                </Link>
              </div>

              {/* form section*/}
              <form action="" className='mt-10'  onSubmit={handleUpdate}>
                <h2 className="card-title border-b-2 border-solid border-gray-200 py-5">Detail Information</h2>

                {/* firstname input */}
                <div className="flex justify-between mt-10">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input 
                    onChange={(e)=>setName(e.target.value)}
                    type="text" placeholder="Write your first name" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="Write your last name" className="input input-bordered w-full max-w-sm" />
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">E-mail</span>
                    </label>
                    <input
                    onChange={(e)=>setEmail(e.target.value)}
                     type="text" placeholder="Write your E-mail" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input 
                    onChange={(e)=>setPhone(e.target.value)}
                    type="text" placeholder="Write your phone number" className="input input-bordered w-full max-w-sm" />
                  </div>
                </div>
                {/* end */}

                {/* account and privacy section */}
                <h2 className="card-title border-b-2 border-solid border-gray-200 py-5">Detail Information</h2>

                {/* new password input */}
                <div className="flex justify-between mt-10">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">New Password</span>
                    </label>
                    <input
                    // onChange={(e)=>setFormUser({
                    //   ...formUser,
                    //   password:e.target.value
                    // })} 
                    type="password" placeholder="Write your password" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm your passwrod" className="input input-bordered w-full max-w-sm" />
                  </div>
                </div>

                {/* button section */}
                <div className='py-10'>
                  <button type='submit' className='btn btn-primary btn-block'>Update Changes</button>
                </div>

                {/* end */}
              </form>


            </div>
          </div>
          {/* end */}
        </div>
      </div>

      {/* modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="relative" htmlFor="">
          <div className='flex flex-col justify-center items-center'>
            <div className="avatar">
              <div className="w-56 rounded-full">
                <Image src={profile} alt="profile" />
              </div>
            </div>
          </div>
        </label>
      </label>
      <Footer/>
    </>
  )
}
