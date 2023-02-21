'use client'
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import { redirect, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

const Payment = () => {
  // Private route
  // const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.id;
  // const userId = Cookies.get('userId')
  // if (!userId || userId == null || userId == undefined) {
  //   redirect('/login')
  // }

  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_API_URL
  // Get data from Cookies
  const userId = Cookies.get('userId')
  const seats = Cookies.get('seats')
  const movies_date = Cookies.get('movies_date')
  const movies_time = Cookies.get('movies_time')
  const movies_name = Cookies.get('movies_name')
  const cinema_name = Cookies.get('cinema_name')
  const ticket_count = parseInt(Cookies.get('ticket_count'))
  const total_payment = parseInt(Cookies.get('total_payment'))

  const handlePayment = async (e) => {
    e.preventDefault();
    await axios.post(`${url}/api/v1/history`, {
      id_user: userId,
      movies_name: movies_name,
      movies_date: movies_date,
      movies_time: movies_time,
      cinema_name: cinema_name,
      ticket_count: ticket_count,
      total_payment: total_payment,
      seats: seats
    })
      .then(res => {
        console.log(res);
        toast.success("Payment success!", {
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
          router.push('/ticket-result')
        }, 1500);
      })
      .catch(err => {
        console.log(err);
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
      })
  }

  return (
    <>
      <ToastContainer />
      {/* navbar */}
      <Navbar />

      {/* card payment info */}
      <div className='bg-[#E5E5E5]'>
        <div className='container'>
          <div className='flex flex-row justify-evenly'>
            <div className='p-8'>
              <div>
                <p className='font-bold text-2xl'>Payment Info</p>
                {/* start payment info */}
                <div className='overflow-x-auto shadow-xl rounded-lg'>
                  <table className='table w-full'>
                    <tbody>
                      <tr>
                        <td>Date & time</td>
                        <td className='font-bold'>
                          {`${movies_date} at ${movies_time}`}
                        </td>
                      </tr>

                      <tr>
                        <td>Movie title</td>
                        <td className='font-bold'>{movies_name}</td>
                      </tr>

                      <tr>
                        <td>Cinema name</td>
                        <td className='font-bold'>{cinema_name}</td>
                      </tr>

                      <tr>
                        <td>Number of tickets</td>
                        <td className='font-bold'>{ticket_count} pieces</td>
                      </tr>

                      <tr>
                        <td>Total payment</td>
                        <td className='font-bold'>{`Rp${total_payment}`}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* end payment info */}

              {/* start choose a payment method */}
              <div className='mt-4'>
                <p className='font-bold text-2xl'>Choose a Payment Method</p>
              </div>
              <div className='card w-[40vw] bg-base-100 shadow-xl'>
                <div className='card-body'>

                  {/* button action */}
                  <div class='grid grid-rows-2 grid-flow-col gap-4'>
                    <button className='btn btn-outline'>
                      <Image
                        src='google-pay.svg'
                        alt='google-pay'
                        className=''
                        width={40}
                        height={40}
                      />
                    </button>
                    <button className='btn btn-outline'>
                      <Image
                        src='visa.svg'
                        alt='visa'
                        className=''
                        width={40}
                        height={40}
                      />
                    </button>
                    <button className='btn btn-outline'>
                      <Image
                        src='gopay.svg'
                        alt='gopay'
                        className=''
                        width={40}
                        height={40}
                      />
                    </button>
                    <button className='btn btn-outline'>
                      <Image
                        src='paypal.svg'
                        alt='paypal'
                        className=''
                        width={20}
                        height={20}
                      />
                    </button>
                    <button className='btn btn-outline'>
                      <Image
                        src='dana.svg'
                        alt='dana'
                        className=''
                        width={40}
                        height={40}
                      />
                    </button>
                    <button className='btn btn-outline'>
                      <Image
                        src='bca.svg'
                        alt='bca'
                        className=''
                        width={40}
                        height={40}
                      />
                    </button>
                    <button className='btn btn-outline'>
                      <Image
                        src='bri.svg'
                        alt='bri'
                        className=''
                        width={40}
                        height={40}
                      />
                    </button>
                    <button className='btn btn-outline'>
                      <Image
                        src='ovo.svg'
                        alt='ovo'
                        className=''
                        width={40}
                        height={40}
                      />
                    </button>
                  </div>
                  {/* end */}
                  <div className=''>
                    <p className='text-center'>or</p>
                  </div>
                  <div className='flex flex-row'>
                    <p className='text-end'>Pay via cash.</p>
                    <p className='text-primary'> See how it work</p>
                  </div>
                </div>
              </div>
              {/* end choose a payment method */}
            </div>

            {/* start right content */}
            <div className='p-8'>
              {/* start personal info */}
              <div className=''>
                <p className='font-bold text-2xl'>Personal Info</p>
              </div>
              <div className='card w-[25vw] bg-base-100 shadow-xl'>
                <div className='card-body'>
                  <div className='form-control w-full max-w-xs'>
                    <div>
                      <label className='label'>
                        <span className='label-text'>Full Name</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Jonas El Rodriguez'
                        className='input input-bordered w-full max-w-xs'
                      />
                    </div>
                    <div>
                      <label className='label'>
                        <span className='label-text'>Email</span>
                      </label>
                      <input
                        type='text'
                        placeholder='jonasrodri123@gmail.com'
                        className='input input-bordered w-full max-w-xs'
                      />
                    </div>
                    <div>
                      <label className='label'>
                        <span className='label-text'>Phone Number</span>
                      </label>
                      <input
                        type='text'
                        placeholder='+62 | 81445687121'
                        className='input input-bordered w-full max-w-xs'
                      />
                    </div>
                    <div className='bg-[#F4B7404D] mt-4 rounded-md h-[8vh] p-2'>
                      <div className='flex flex-row'>
                        <Image
                          src='warning.svg'
                          alt='warning'
                          className=''
                          width={30}
                          height={30}
                        />
                        <p>Fill your data correctly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end personal info */}

              {/* start right bottom button */}
              <div className='flex flex-col p-2 mt-4'>
                <button
                  className='btn btn-primary'
                  onClick={handlePayment}>Pay your order</button>
                <button className='btn btn-outline btn-primary mt-2'>
                  Previous step
                </button>
              </div>
              {/* end right bottom button */}

            </div>

            {/* end right content */}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Payment;
