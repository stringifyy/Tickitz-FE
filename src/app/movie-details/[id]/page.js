"use client";
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import CardMovieDetails from '@/component/CardMovieDetails';
import movie1 from "@/assets/images/png/movie1.png"
// import { useEffect, useState } from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";



const inter = Inter({ subsets: ['latin'] });

const MovieDetails = () => {
  const path = usePathname();
  const id = path.split("/")[2];

  const [moviesData, setMoviesData] = useState([]);
  const [cinemaData, setCinemaData] = useState([]);
  const [imageCinema, setImageCinema] = useState([])

  useEffect(() => {
    loadMoviesData();
  }, []);

  const loadMoviesData = async () => {
    return axios
      .get(`http://localhost:5000/api/v1/movies/${id}`)
      .then((res) => {
        setMoviesData(res.data.data)
        setCinemaData(res.data.data.cinema)
        setImageCinema(res.data.data.cinema.cinema_image)
      })
      .catch((err) => console.log(err));
  };

  console.log(moviesData);
  const img = `http://localhost:5000/uploads/images/${moviesData.movies_image}`
  const imgCinema = `http://localhost:5000/uploads/images/${imageCinema}`
  console.log(imgCinema)
  console.log(cinemaData.cinema_image)

  return (
    <div>
      <Navbar />
      {/* start first content */}
      <div className='container overflow-x-hidden'>
        <div className='flex flex-col'>
          <div className='flex flex-row border'>
            <div className='border rounded-md p-4 m-8'>
              <Image
                src={img}
                alt='spiderman-poster'
                className=''
                width={300}
                height={350}
              />
            </div>
            <div className='flex flex-col p-4'>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold'>{moviesData.movies_name}</p>
                <p className='text-xl font-medium'>{moviesData.movies_genre}</p>
              </div>

              <div className='flex flex-row mt-4 justify-beetwen'>
                <div className='flex flex-col'>
                  <p>Release date</p>
                  <p className='text-xl font-medium'>{moviesData.movies_release}</p>
                </div>
                <div className='flex flex-col ml-16'>
                  <p>Directed by</p>
                  <p className='text-xl font-medium'>{moviesData.movies_directed}</p>
                </div>
              </div>

              <div className='flex flex-row mt-4 justify-beetwen'>
                <div className='flex flex-col'>
                  <p>Duration</p>
                  <p className='text-xl font-medium'>{moviesData.duration}</p>
                </div>
                <div className='flex flex-col ml-4'>
                  <p>Casts</p>
                  <p className='text-xl font-medium'>
                    {moviesData.movies_cast}
                  </p>
                </div>
              </div>

              <div className='border-b-2  w-full'></div>
              <div className='flex flex-col mt-2'>
                <p className='text-2xl font-bold'>Synopsis</p>
                <p>
                  {moviesData.movies_synopsis}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end first content */}

      {/* start second content */}
      <div className=' bg-gray-100'>
        <div className='container'>
          <div className='flex flex-col'>
            <p className='text-center text-2xl font-bold'>
              Showtimes and Tickets
            </p>
            <div className='flex flex-row justify-center p-2'>
              {/* date */}
              <div className='flex flex-row justify-beetwen m-2'>
                <div className='flex-none bg-gray-300 rounded-lg'>
                  <ul className='menu menu-horizontal px-1'>
                    <li tabIndex={0}>
                      <a>
                        <Image
                          src='calendar.svg'
                          alt='calendar'
                          className=''
                          width={20}
                          height={20}
                        />
                        21/07/20
                        <svg
                          className='fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                        >
                          <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                        </svg>
                      </a>
                      <ul className='p-2 bg-base-100'>
                        <li>
                          <a>22/07/20</a>
                        </li>
                        <li>
                          <a>23/07/20</a>
                        </li>
                        <li>
                          <a>24/07/20</a>
                        </li>
                        <li>
                          <a>25/07/20</a>
                        </li>
                        <li>
                          <a>26/07/20</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end date */}
              {/* location */}
              <div className='flex flex-row justify-beetwen m-2'>
                <div className='flex-none bg-gray-300 rounded-lg'>
                  <ul className='menu menu-horizontal px-1 z-40'>
                    <li tabIndex={0}>
                      <a>
                        <Image
                          src='location.svg'
                          alt='location'
                          className=''
                          width={20}
                          height={20}
                        />
                        Purwokerto
                        <svg
                          className='fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                        >
                          <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                        </svg>
                      </a>
                      <ul className='p-2 bg-base-100'>
                        <li>
                          <a>Padang</a>
                        </li>
                        <li>
                          <a>Bogor</a>
                        </li>
                        <li>
                          <a>Sumedang</a>
                        </li>
                        <li>
                          <a>Batam</a>
                        </li>
                        <li>
                          <a>Bandung</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end location */}
            </div>

            <div className='flex flex-col mt-4'>
              <div className='flex flex-wrap justify-center'>
                {cinemaData.map((item) => {
                  return (
                    <>
                      <div className='p-4'>
                        <div className='card w-96 bg-base-100 shadow-xl'>
                          <div className='flex flex-row p-2'>
                            <figure>
                              <Image
                                src={imgCinema}
                                alt='ebv.id'
                                className='p-4'
                                width={150}
                                height={150}
                              />
                            </figure>
                            <div className='flex flex-col p-2'>
                              <p className='text-2xl font-bold p-1'>{item.cinema_name}</p>
                              <p className=''>{item.cinema_location}</p>
                            </div>
                          </div>
                          <div className='border-b-2 w-full'></div>
                          <div className='card-body'>
                            <div className='grid grid-rows-2 grid-flow-col gap-2'>
                              <p>08:30am</p>
                              <p>10:30pm</p>
                              <p>12:00pm</p>
                              <p>02:00pm</p>
                              <p>04:30pm</p>
                              <p>07:00pm</p>
                              <p>08:30pm</p>
                              <p>08:32pm</p>
                            </div>
                            <div className='flex flex-row mt-2'>
                              <p>Price</p>
                              <p className='font-bold card-actions justify-end'>$10.00/seat</p>
                            </div>
                            <div className='flex flex-row mt-2 justify-between'>
                              <button className='btn btn-primary'>Buy Now</button>
                              <button className='btn btn-ghost'>
                                <p className='text-primary'>Add To Cart</p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
            <p className='text-primary text-center text-xl font-bold p-2'>
              view more
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
