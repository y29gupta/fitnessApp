import  { forwardRef } from 'react'

type clasType={
  name:string,
  description?:string,
  image:string
}

type Props = {
  
  // sliderRef:React.RefObject<HTMLDivElement>
  classImage:clasType[]
}

const Classes = forwardRef<HTMLDivElement,Props>(({classImage},ref) => {
  return (
   <div ref={ref} className='slider-container flex w-5/6   mx-auto gap-10 overflow-x-auto py-10   '>
          {
            classImage.map((item) => (

              <div key={item.name} className='relative flex-none w-[400px]  h-[300px]  rounded-md'>
                <div className='p-5 flex flex-col items-center justify-center absolute  opacity-0 hover:opacity-70 bg-red-300 w-full h-full hover:scale-110 left-0 top-0 rounded-md  tranisition duration-500  z-30' >
                  <p className='text-2xl'>{item.name}</p>
                  <p className='mt-5 text-justify'>{item.description}</p>
                </div>
                <img src={item.image} className='rounded-md' alt="" />
              </div>
            ))
          }

        </div>
  )
}) 

export default Classes