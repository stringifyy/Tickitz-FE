import herobanner1 from "@/assets/images/png/herobanner1-asset.png"
import Image from "next/image"
import Link from "next/link"
import NowComming from "@/component/nowShowing"
import UpComming from "@/component/upComing"
import movie1 from "@/assets/images/png/movie1.png"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"


export default function Home() {
  return (
    <>
      <Navbar/>
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
      <NowComming />


      {/* Herobanner3 */}
      <UpComming />

      <div className="container">
        <div className="card w-full bg-white rounded-lg shadow-xl my-40">
          <div className="card-body items-center text-center">
            <h2 className="font-normal text-xl mt-10">Be the vanguard of the<br />
              <p className="text-4xl text-purple-600 font-bold">Moviegoers</p>
            </h2>
            {/* <p>We are using cookies for no reason.</p> */}
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

      {/* The button to open modal */}
      {/* Put this part before </body> tag */}
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
      <Footer/>
    </>
  )
}
