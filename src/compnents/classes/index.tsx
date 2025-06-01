import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Classes from './Classes';
import {motion} from 'framer-motion'
type Props = {
  setSelectedPage:(value:string)=>void
}

const OurClassess = ({setSelectedPage}: Props) => {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [leftDisable, setLeftDisable] = useState<boolean>(false)

  const disable=()=>{
 if (sliderRef.current) {
      sliderRef.current.scrollLeft!==0?setLeftDisable(false):setLeftDisable(true)
      console.log("clicked")
      
    }
  }


  const scrollLeft = () => {

    if (sliderRef.current) {
      console.log(sliderRef.current.scrollLeft)
      sliderRef.current.scrollLeft -= 350
      disable()
    }
    
  }
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 350
      console.log(sliderRef.current.scrollLeft)
      console.log(sliderRef.current, "scroll end")
      disable()



    }
  }
  useEffect(() => {

   disable()
  }, [])

  type clasType = {
    name: string,
    description?: string,
    image: string
  }
  const classImage: Array<clasType> = [
    {
      name: "Weight Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image1,
    },
    {
      name: "Yoga Classes",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image6,
    },
  ]
  return (
    <motion.div
      onViewportEnter={()=>setSelectedPage("ourclasses")}
    id='ourclasses' className='w-full    bg-primary-100  py-32'>
      <div className='md:w-5/6 mx-auto '>

        <div className='md:w-3/5  w-5/6 mx-auto md:mx-0'>
          <h1 className='text-3xl font-bold '>OUR CLASSES</h1>
          <p className=' mt-3'>
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
          </p>
        </div>

      </div>
      <div className=' relative w-full bg-primary-100  mt-3 '  >
        <div className='absolute left-5  top-[50%] translate-y-[-50%] z-90'>
          <button onClick={scrollLeft} className={`${leftDisable ? "opacity-30" : "opacity-90"} bg-black  text-white opacity-60 rounded-full`}><ArrowLeftIcon className='h-8 w-12  p-2' /> </button>
        </div>
        <Classes ref={sliderRef}  classImage={classImage}/>
      
        <div className='absolute right-5 top-[50%] translate-y-[-50%]'>
          <button onClick={scrollRight} className='bg-black  text-white opacity-60 rounded-full'><ArrowRightIcon className='h-8 w-12  p-2' /> </button>
        </div>
      </div>
    </motion.div>

  )
}

export default OurClassess