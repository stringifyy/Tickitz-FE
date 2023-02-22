'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import CardAdmin from '@/component/CardAdmin';
import imagePlaceHolder from '@/assets/placeholder.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

const Admin = () => {
  // Private route
  const userId = Cookies.get('userId')
  if (!userId || userId == null || userId == undefined) {
    redirect('/login')
  }
  const router = useRouter()
  const url = 'http://localhost:5000/api/v1/movies';

  const [imagePreview, setImagePreview] = useState('')

  const [movies_name, setMoviesName] = useState('');
  const [movies_genre, setMoviesGenre] = useState('');
  const [movies_release, setMoviesRelease] = useState('');
  const [movies_directed, setMoviesDirected] = useState('');
  const [movies_cast, setMoviesCast] = useState('');
  const [movies_synopsis, setMoviesSynopsis] = useState('');
  const [movies_image, setMoviesImage] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  // console.log(movies_image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append('movies_name', movies_name);
    body.append('movies_genre', movies_genre);
    body.append('movies_release', movies_release);
    body.append('movies_directed', movies_directed);
    body.append('movies_cast', movies_cast);
    body.append('movies_synopsis', movies_synopsis);
    body.append('duration', duration);
    body.append('movies_image', movies_image);
    body.append('date', date);

    try {
      await axios.post(`${url}`, body, {
        method: 'POST',
        headers: {
          'Content-type': 'multi/form-data',
        },
      });
      toast.success("Movie Release!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("Sorry, something was wrong", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  };
  const onImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setMoviesImage(file)
    setImagePreview(URL.createObjectURL(file))
  }
  return (
    <>
      <ToastContainer />
      <Navbar />
      {/* start first content */}
      <div className='bg-[#E5E5E5]'>
        <div className='container'>
          <div className='flex flex-row justify-evenly'>
            <div className='p-8'>
              <div>
                <p className='font-bold text-2xl'>Movie Description</p>
                {/* start movie description */}
                <div>
                  <div className='card w-[45vw] bg-base-100 shadow-xl'>
                    <div className='card-body'>
                      <div className='flex flex-row'>
                        <div>
                          <div className='border rounded-md p-2 m-2'>
                            {imagePreview ? <Image src={imagePreview} width={160} height={160} className='w-[160px] h-[160px]' alt='profile' /> : <Image src={imagePlaceHolder} width={160} height={160} className='w-[160px] h-[160px]' alt='profile' />}
                            {/* <Image src={imagePlaceHolder} /> */}
                            <h2 className='cursor-pointer btn btn-primary' onClick={() => document.querySelector(".input-field").click()}>Upload Image</h2>
                            <input type='file' className='input-field file-input w-full max-w-xs' multiple hidden onChange={(e) => onImageUpload(e)} />
                          </div>
                        </div>
                        <div className='flex flex-col'>
                          <div>
                            <label className='label'>
                              <span className='label-text'>Movie Name</span>
                            </label>
                            <input
                              type='text'
                              placeholder='Spider-Man: Homecoming'
                              className='input input-bordered w-full max-w-xs'
                              name='movies_name'
                              value={movies_name}
                              onChange={(e) => setMoviesName(e.target.value)}
                            />
                          </div>
                          <div>
                            <label className='label'>
                              <span className='label-text'>Genre</span>
                            </label>
                            <input
                              type='text'
                              placeholder='Comedy'
                              className='input input-bordered w-full max-w-xs'
                              name='movies_genre'
                              value={movies_genre}
                              onChange={(e) => setMoviesGenre(e.target.value)}
                            />
                          </div>
                          <div className='flex flex-row'>
                            <div>
                              <label className='label'>
                                <span className='label-text'>Release date</span>
                              </label>
                              <input
                                type='date'
                                placeholder='07/05/2020'
                                className='input input-bordered w-full max-w-xs'
                                name='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                              />
                            </div>
                            <div>
                              <label className='label'>
                                <span className='label-text'>Duration</span>
                              </label>
                              <input
                                type='text'
                                placeholder='2 13'
                                className='input input-bordered w-full max-w-xs'
                                name='duration'
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-row w-full'>
                        <div className='flex flex-row'>
                          <div>
                            <label className='label'>
                              <span className='label-text'>Director</span>
                            </label>
                            <input
                              type='text'
                              placeholder='Jon Watts'
                              className='input input-bordered w-full max-w-xs'
                              name='movies_directed'
                              value={movies_directed}
                              onChange={(e) =>
                                setMoviesDirected(e.target.value)
                              }
                            />
                          </div>
                          <div className='ml-4'>
                            <label className='label'>
                              <span className='label-text'>Casts</span>
                            </label>
                            <input
                              type='text'
                              placeholder='Tom Holland, Michael Keaton, Robert Dow..'
                              className='input input-bordered w-full max-w-xs'
                              name='movies_cast'
                              value={movies_cast}
                              onChange={(e) => setMoviesCast(e.target.value)}
                            />
                          </div>
                          <div className='ml-4'>
                            <label className='label'>
                              <span className='label-text'>Movies Release</span>
                            </label>
                            <input
                              type='text'
                              placeholder='Movies Release'
                              className='input input-bordered w-full max-w-xs'
                              name='movies_release'
                              value={movies_release}
                              onChange={(e) => setMoviesRelease(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className=''>
                        <label className='label'>
                          <span className='label-text'>Synopsis</span>
                        </label>
                        <textarea
                          className='textarea w-full textarea-bordered'
                          placeholder="'Thrilled by his experience with the Avengers, Peter returns home, where he
                        lives with his Aunt May, | '"
                          name='movies_synopsis'
                          value={movies_synopsis}
                          onChange={(e) => setMoviesSynopsis(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {/* start button add movies  */}
                  <div>
                    <button
                      className='btn btn-primary w-full mt-2'
                      onClick={handleSubmit}
                    >
                      Add Movies
                    </button>
                  </div>
                  {/* end button add movies  */}
                </div>
              </div>
            </div>

            <div className='p-8'>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <p className='font-bold text-2xl'>Premiere Location</p>
                  {/* start premiere location */}
                  <div className='card w-[30vw] bg-base-100 shadow-xl'>
                    <div className='card-body'>
                      {/* location */}
                      <div className='flex flex-row justify-beetwen m-2'>
                        <div className='flex-none bg-gray-300 rounded-lg'>
                          <ul className='menu menu-horizontal px-1'>
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
                      <div className='grid grid-rows-3 grid-flow-col gap-3'>
                        <button className='btn btn-ghost'>
                          <Image
                            src='ebv.id.svg'
                            alt='paypal'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='ebv.id.svg'
                            alt='paypal'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='ebv.id.svg'
                            alt='paypal'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='hiflix.svg'
                            alt='hiflix'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='hiflix.svg'
                            alt='hiflix'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='hiflix.svg'
                            alt='hiflix'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='cineone21.svg'
                            alt='cineone21'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='cineone21.svg'
                            alt='cineone21'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                        <button className='btn btn-ghost'>
                          <Image
                            src='cineone21.svg'
                            alt='cineone21'
                            className=''
                            width={80}
                            height={80}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* start showtimes */}
              <div className=''>
                <div>
                  <p className='font-bold text-2xl'>Showtimes</p>
                  <div className='card w-[30vw] bg-base-100 shadow-xl'>
                    <div className='card-body'>
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
                      <div className='card-actions justify-start p-2'>
                        <button className='btn btn-outline btn-primary w-1/3'>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* start button add movies  */}
              {/* <div>
                <button className='btn btn-primary w-full mt-2' type='submit'>
                  Add Movies
                </button>
              </div> */}
              {/* end button add movies  */}
            </div>
          </div>
        </div>
        {/* end first content */}

        {/* start second content */}
        <div className=' bg-[#E5E5E5]'>
          <div className='container'>
            <div className='flex flex-col border'>
              <div className='flex flex-row justify-between'>
                <p className='text-2xl font-bold'>Sales Charts</p>
                <div className='flex flex-row'>
                  <p className=''>08:30am</p>
                  <p className=''>10:30pm</p>
                  <p className=''>12:00pm</p>
                </div>
              </div>

              <div class='flex flex-col mt-4'>
                <div className='card w-full bg-base-100 shadow-xl'>
                  <div className='flex flex-row justify-evenly'>
                    <p className='text-bold'>Based on Movie</p>
                    <p className='text-bold'>Based on Location</p>
                  </div>
                  <div class='flex flex-row'>
                    <CardAdmin />
                    <CardAdmin />
                    <CardAdmin />
                  </div>
                  <div class='flex flex-row'>
                    <CardAdmin />
                    <CardAdmin />
                    <CardAdmin />
                  </div>
                </div>
                <p className='text-primary text-center text-xl font-bold p-2'>
                  view more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
