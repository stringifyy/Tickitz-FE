"use client";
import React from 'react';
import Image from 'next/image';
import movie1 from "@/assets/images/png/movie1.png";
import Link from 'next/link';
import axios from 'axios';

export default function NowComming() {
  const urlApi = process.env.NEXT_PUBLIC_API_URL
  // declaration
  const [dataMovies, setDataMovies] = useState([])
  // const [keyword, setKeyword] = useState('');

  const loadUserData = async () => {
    return axios
      .get(`${urlApi}/api/v1/movies`)
      .then(res => console.log(res.data.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <>
      <div className="bg-base-200">
        <div className="container">
          <div className="pt-10 text-purple-600 flex justify-between">
            <h1 className="text-2xl font-bold border-b-2 solid border-purple-600">Now Showing</h1>
            <Link href="" className="font-semibold">View All</Link>
          </div>

          <div className="carousel mt-4">
            <div className="carousel-item py-5">
              <button className="btn btn-primary">January</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">Febuary</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">March</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">April</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">May</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">June</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">July</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">August</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">September</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">October</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">November</button>
            </div>
            <div className="carousel-item py-5 ml-3">
              <button className="btn btn-primary">Desember</button>
            </div>
          </div>


          <div className="flex mt-10">
            <div className="carousel rounded-box w-screen pb-38">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                return (
                  <>
                    <div className="mr-10 carousel-item mb-10 rounded-none">
                      <div className="border-2 border-solid border-gray-300 rounded-2xl p-5 flex flex-col items-center">
                        <figure>
                          <label htmlFor="my-modal-4">
                            <Image src={movie1} alt="Shoes" className="rounded-xl w-38" />
                          </label>
                        </figure>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
