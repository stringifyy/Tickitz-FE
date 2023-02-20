import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import CardAdmin from '@/component/CardAdmin';

const inter = Inter({ subsets: ['latin'] });

const Admin = () => {
  return (
    <>
      <Navbar />
      {/* start first content */}
      <div className='bg-[#E5E5E5]'>
        <div className='container'>
          <div className='flex flex-row justify-evenly'>
            <div className='p-8'>
              <div>
                <p className='font-bold text-2xl'>Movie Description</p>
                {/* start movie description */}
                <div className='card w-[45vw] bg-base-100 shadow-xl'>
                  <div className='card-body'>
                    <div className='flex flex-row'>
                      <div>
                        <div className='border rounded-md p-2 m-2'>
                          <Image
                            src='spiderman-poster.svg'
                            alt='spiderman-poster'
                            className=''
                            width={300}
                            height={350}
                          />
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
                          />
                        </div>
                        <div>
                          <label className='label'>
                            <span className='label-text'>Category</span>
                          </label>
                          <input
                            type='text'
                            placeholder='Comedy'
                            className='input input-bordered w-full max-w-xs'
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
                      ></textarea>
                    </div>
                  </div>
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
