import Image from 'next/image';

const CardAdmin = () => {
  return (
    <>
      {/* start card */}
      <div className='p-1'>
        <div className='card w-70 bg-base-100 shadow-xl'>
          <div className='flex flex-col'>
            <figure>
              <Image
                src='chart.svg'
                alt='chart'
                className=''
                width={700}
                height={700}
              />
            </figure>
          </div>
        </div>
      </div>
      {/* end card */}
    </>
  );
};

export default CardAdmin;
