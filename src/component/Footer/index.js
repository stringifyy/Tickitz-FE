import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  return (
    <>
      <footer className='footer text-base-content border shadow-xl py-8'>
        <div className='container flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col w-'>
            <Image
              src='tickitz-logo.svg'
              alt='tickitz-logo'
              className=''
              width={150}
              height={200}
            />
            <p>
              Stop waiting in line. Buy tickets
              <br />
              conveniently, watch movies quietly.
            </p>
          </div>
          <div className='flex flex-col '>
            <span className='footer-title'>Explore</span>
            <div className='flex flex-wrap md:flex-col w-full'>
              <a className='link link-hover w-1/3'>Cinemas</a>
              <a className='link link-hover w-1/3'>Movies List</a>
              <a className='link link-hover w-1/3'>My Ticket</a>
              <a className='link link-hover w-1/3'>Notification</a>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='footer-title'>Our Sponsor</span>
            <div className='flex md:flex-col '>
              <a className='link link-hover'>
                <Image
                  src='ebv.id.svg'
                  alt='ebv.id-logo'
                  className='mr-5'
                  width={100}
                  height={150}
                />
              </a>
              <a className='link link-hover'>
                <Image
                  src='cineone21.svg'
                  alt='cineone21-logo'
                  className='mt-4 mr-5'
                  width={100}
                  height={150}
                />
              </a>
              <a className='link link-hover'>
                <Image
                  src='hiflix.svg'
                  alt='hiflix-logo'
                  className='mt-4 mr-5'
                  width={100}
                  height={150}
                />
              </a>
            </div>
          </div>

          <div className='flex flex-col'>
            <span className='footer-title'>Legal</span>
            <div className='link link-hover flex flex-row'>
              <Image
                src='fb.svg'
                alt='fb'
                className='mr-1'
                width={20}
                height={20}
              />
              <p>Tickitz Cinema id</p>
            </div>
            <div className='link link-hover flex flex-row'>
              <Image
                src='ig.svg'
                alt='ig'
                className='mr-2'
                width={20}
                height={20}
              />
              <p>tickitz.id</p>
            </div>
            <div className='link link-hover flex flex-row'>
              <Image
                src='twit.svg'
                alt='twit'
                className='mr-2'
                width={20}
                height={20}
              />
              <p>tickitz.id</p>
            </div>
            <div className='link link-hover flex flex-row'>
              <Image
                src='yt.svg'
                alt='yt'
                className='mr-2'
                width={20}
                height={20}
              />
              <p>Tickitz Cinema id</p>
            </div>
          </div>
        </div>
      </footer>
      {/* <p className='text-center'>test</p> */}
    </>
  );
}
