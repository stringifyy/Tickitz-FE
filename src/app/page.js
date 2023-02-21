"use client";
import React from "react";
import herobanner1 from "@/assets/images/png/herobanner1-asset.png"
import Image from "next/image"
import Link from "next/link"
import NowComming from "@/component/nowShowing"
import UpComming from "@/component/upComing"
import movie1 from "@/assets/images/png/movie1.png"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [dataMovies, setDataMovies] = useState([])
  const [filter, setFilter] = useState("")
  // const [keyword, setKeyword] = useState('');
  const [showing, setShowing] = useState(false)
  const [search, setSearch] = useState(false)

  useEffect(() => {
    loadUserData()
  }, [filter, search])


  const url = (search) => {
    if (search != "") {
      return `http://localhost:5000/api/v1/movies?search=${search.toLocaleLowerCase()}`
    }
    else {
      return `http://localhost:5000/api/v1/movies/?movies_release=${filter.toLocaleLowerCase()}`
    }

  }

  const loadUserData = async () => {
    return axios.get(url(search))
      .then(res => setDataMovies(res.data.data))
      .catch((err) => console.log(err))
  }

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* herobanner1 */}
      <div className="container">
        <div className=" max-h-screen mb-10">
          <div className="hero flex flex-col justify-between items-center lg:flex-row-reverse mt-12">
            <div className="">
              <Image src={herobanner1} className="max-w-xs md:max-w-sm lg:mr-20" />
            </div>
            <div className="">
              <p className="text-2xl md:text-2xl">Nearest Cinema, Newest Movie,
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
                Find out now!</h1>
            </div>
          </div>
        </div>
      </div>

      {/* herobanner2 */}
      {/* <NowComming /> */}

      <div className="bg-base-200">
        <div className="container">
          <div className="pt-10 text-purple-600 flex justify-between items-center">
            <h1 className="text-2xl font-bold border-b-2 solid border-purple-600">Now Showing</h1>
            <div className="flex w-[40%] items-center justify-end">
              {showing ?
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text" placeholder="Search Movies" className="input w-full max-w-xs" />
                : null
              }
              <Image src='search.svg' alt='search' className='mx-5 cursor-pointer' width={24} height={24} onClick={() => setShowing(!showing)} />
              <div href="" className="font-semibold cursor-pointer" onClick={() => (setSearch(""), setFilter(""))}>View All</div>
            </div>
          </div>

          <div className="carousel mt-4">
            <div className="carousel-item py-5">
              <button
                onClick={() => setFilter("January")}
                className="btn btn-primary">January</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("February")}
                className="btn btn-primary">February</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("March")}
                className="btn btn-primary">March</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("April")}
                className="btn btn-primary">April</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("May")}
                className="btn btn-primary">May</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("June")}
                className="btn btn-primary">June</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("July")}
                className="btn btn-primary">July</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("August")}
                className="btn btn-primary">August</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("September")}
                className="btn btn-primary">September</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("October")}
                className="btn btn-primary">October</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("November")}
                className="btn btn-primary">November</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button
                onClick={() => setFilter("Desember")}
                className="btn btn-primary">Desember</button>
            </div>
          </div>


          <div className="flex mt-10">
            <div className="carousel rounded-box w-screen pb-38">
              {dataMovies.map((item) => {
                const img = `http://localhost:5000/uploads/images/${item.movies_image}`
                return (
                  <>
                    <Link href={`/movie-details/${item.id}`} className="mr-10 carousel-item mb-10 rounded-none">
                      <div className="border-2 border-solid border-gray-300 rounded-2xl p-5 flex flex-col items-center">
                        <figure>
                          <label htmlFor="my-modal-4">
                            <Image src={img} alt="Movies" width={160} height={160} className="rounded-xl w-38 cursor-pointer" />
                          </label>
                        </figure>
                      </div>
                    </Link>
                    {/* Modal start */}
                    {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal">
                      <label className="modal-box relative" htmlFor="">
                        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
                          <figure>
                            <Image src={img} alt="Movies" width={160} height={160} className="rounded-xl w-48" />
                          </figure>
                          <div>
                            <h1 className="text-2xl font-bold">{item.movies_name}</h1>
                            <p className="my-5">{item.movies_synopsis}</p>
                            <Link href={`/movie-details/${item.id}`} className="btn btn-primary btn-block btn-sm cursor-pointer">Details</Link>
                          </div>
                        </div>
                      </label>
                    </label> */}
                    {/* Modal end */}
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>


      {/* Herobanner3 */}
      <UpComming />

      {/* subscribe card */}
      <div className="container">
        <div className="card w-full bg-white rounded-lg shadow-xl my-40">
          <div className="card-body items-center text-center">
            <h2 className="font-normal text-xl mt-10">Be the vanguard of the<br />
              <p className="text-4xl text-purple-600 font-bold">Moviegoers</p>
            </h2>
            <div className="mt-10 mb-10">
              <form className="flex w-full justify-center">
                <input type="text" placeholder="Type your email" className="input input-bordered w-full max-w-xl" />
                <button className="btn btn-primary ml-3">Button</button>
              </form>
            </div>
            <div className="mb-10 text-slate-500">
              <p>By joining you as a Tickitz member, <br />
                we will always send you the latest updates via email .</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
            <figure>
              <Image src={movie1} alt="Shoes" className="rounded-xl w-48" />
            </figure>
            <div>
              <h1 className="text-2xl font-bold">Spider-mega</h1>
              <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, neque excepturi modi voluptate velit officiis vero labore nostrum eius aut quisquam, doloremque nemo. Laudantium, sunt. Quibusdam voluptate excepturi quae voluptas!</p>
              <button className="btn btn-primary btn-block btn-sm">Details</button>
            </div>
          </div>
        </label>
      </label>
      <Footer />
    </>
  )
}
