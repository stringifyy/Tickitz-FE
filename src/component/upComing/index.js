import React from 'react'
import Image from 'next/image'
import movie1 from "@/assets/images/png/movie1.png"
import Link from 'next/link'

export default function UpComming() {
  return (
    <>
      <div className="container">
        <div className="pt-10 flex justify-between">
          <h1 className="text-2xl font-bold">Upcoming Movies</h1>
          <Link href="" className="font-semibold text-purple-600">View All</Link>
        </div>
        <div className="flex mt-10">
          <div className="carousel rounded-box w-screen">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
              return (
                <>
                  <div className="mr-10 carousel-item mb-10 rounded-none">
                    <div className="border-2 border-solid border-gray-300 rounded-2xl p-5 flex flex-col items-center">
                      <figure>
                        <Image src={movie1} alt="Shoes" className="rounded-xl w-38 cursor-pointer" />
                      </figure>
                      <div className="font-bold text-xl mt-5">
                        <h1>Spider-mega</h1>
                      </div>
                      <div className="text-sm mb-5">
                        <p>Action, Heroes, Romantic</p>
                      </div>
                      <button className="btn btn-outline btn-primary btn-block">Details</button>
                    </div>
                    {/* <label htmlFor="my-modal-4" className="btn">open modal</label> */}
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
