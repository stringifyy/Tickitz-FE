import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import CardMovieDetails from '@/component/CardMovieDetails';

const inter = Inter({ subsets: ['latin'] });

const MovieDetails = () => {
  return (
    <>
      <Navbar />
      {/* start first content */}
      <div className='container overflow-x-hidden'>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <div className='rounded-md p-4 m-8'>
              <Image
                src='spiderman-poster.svg'
                alt='spiderman-poster'
                className=''
                width={300}
                height={350}
              />
            </div>
            <div className='flex flex-col p-4'>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold'>Spider-Man: Homecoming</p>
                <p className='text-xl font-medium'>Adventure, Action, Sci-Fi</p>
              </div>

              <div className='flex flex-row mt-4 justify-beetwen'>
                <div className='flex flex-col'>
                  <p>Release date</p>
                  <p className='text-xl font-medium'>June 28, 2017</p>
                </div>
                <div className='flex flex-col ml-16'>
                  <p>Directed by</p>
                  <p className='text-xl font-medium'>Jon Watss</p>
                </div>
              </div>

              <div className='flex flex-row mt-4 justify-beetwen'>
                <div className='flex flex-col'>
                  <p>Duration</p>
                  <p className='text-xl font-medium'>2 hours 13 minutes </p>
                </div>
                <div className='flex flex-col ml-4'>
                  <p>Casts</p>
                  <p className='text-xl font-medium'>
                    Tom Holland, Michael Keaton, Robert Downey Jr., ...
                  </p>
                </div>
              </div>

              <div className='border-b-2  w-full'></div>
              <div className='flex flex-col mt-2'>
                <p className='text-2xl font-bold'>Synopsis</p>
                <p>
                  Thrilled by his experience with the Avengers, Peter returns
                  home, where he lives with his Aunt May, under the watchful eye
                  of his new mentor <br />
                  Tony Stark, Peter tries to fall back into his normal daily
                  routine - distracted by thoughts of proving himself to be more
                  than just your <br />
                  friendly neighborhood Spider-Man - but when the Vulture
                  emerges as a new villain, everything that Peter holds most
                  important will be threatened.
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
          <div className='flex flex-col border'>
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
            </div>
            <div className='flex flex-col mt-4'>
              <div className='flex flex-row'>
                <CardMovieDetails />
                <CardMovieDetails />
                <CardMovieDetails />
              </div>
              <div className='flex flex-row'>
                <CardMovieDetails />
                <CardMovieDetails />
                <CardMovieDetails />
              </div>
            </div>
            <p className='text-primary text-center text-xl font-bold p-2'>
              view more
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
