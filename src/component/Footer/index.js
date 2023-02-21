'use client'
import Image from 'next/image';
import { Inter } from '@next/font/google';
import tickitz from "@/assets/images/svg/tickitz-logo.svg"
import ebuid from "@/assets/images/svg/ebuid.svg"
import cineone21 from "@/assets/images/svg/cineone21.svg"
import hiflix from "@/assets/images/svg/hiflix.svg"
import facebook from "@/assets/images/svg/fb.svg"
import instagram from "@/assets/images/svg/ig.svg"
import twitter from "@/assets/images/svg/twit.svg"
import youtube from "@/assets/images/svg/yt.svg"
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  const router = useRouter()

  return (
    <>
      <footer className='footer text-base-content border shadow-xl py-8'>
        <div className='container flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col cursor-pointer'>
            <Image
              src={tickitz}
              alt='tickitz-logo'
              className=''
              width={150}
              height={200}
              onClick={() => router.push('/')}
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
                  src={ebuid}
                  alt='ebv.id-logo'
                  className='mr-5'
                  width={100}
                  height={150}
                />
              </a>
              <a className='link link-hover'>
                <Image
                  src={cineone21}
                  alt='cineone21-logo'
                  className='mt-4 mr-5'
                  width={100}
                  height={150}
                />
              </a>
              <a className='link link-hover'>
                <Image
                  src={hiflix}
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
                src={facebook}
                alt='fb'
                className='mr-1'
                width={20}
                height={20}
              />
              <p>Tickitz Cinema id</p>
            </div>
            <div className='link link-hover flex flex-row'>
              <Image
                src={instagram}
                alt='ig'
                className='mr-2'
                width={20}
                height={20}
              />
              <p>tickitz.id</p>
            </div>
            <div className='link link-hover flex flex-row'>
              <Image
                src={twitter}
                alt='twit'
                className='mr-2'
                width={20}
                height={20}
              />
              <p>tickitz.id</p>
            </div>
            <div className='link link-hover flex flex-row'>
              <Image
                src={youtube}
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
