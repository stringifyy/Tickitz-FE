import Image from 'next/image';
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CardMovieDetails = () => {
  const path = usePathname();
  const id = path.split("/")[2];

  const [moviesData, setMoviesData] = useState([]);
  const [cinema, setCinema] = useState([])
  useEffect(() => {
    loadMoviesData();
  }, []);

  const loadMoviesData = async () => {
    return axios
      .get(`http://localhost:5000/api/v1/movies/${id}`)
      .then((res) => {
        setMoviesData(res.data.data)
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      {/* start card */}
      <div>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <>
              <div className='p-4'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                  <div className='flex flex-row p-2'>
                    <figure>
                      <Image
                        src='ebv.id.svg'
                        alt='ebv.id'
                        className='p-4'
                        width={150}
                        height={150}
                      />
                    </figure>
                    <div className='flex flex-col p-2'>
                      <p className='text-2xl font-bold p-1'>ebv.id</p>
                      <p className=''>location</p>
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

          {/* end card */ }
        })}
      </div>
    </>

  );
};

export default CardMovieDetails;
