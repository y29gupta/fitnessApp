import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import React from 'react'
import BenefitCard from './BenefitCard';
import { motion } from 'framer-motion'
import benefitpageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from '../ActionButton';

interface BenefitType {
  icon: React.ReactElement;
  title: string;
  description: string;
}
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
]
type Props = {
  setSelectedPage:(value:string)=>void
}

const Benefit = ({setSelectedPage}: Props) => {

  return (

    <div className='w-full gap-16 '>
      <motion.div
    
    id='benefits' className='w-5/6  mx-auto flex flex-col'>
    
      <div className='  md:w-3/5 my-16 font-montserrat  '>
        <h1 className='text-2xl font-bold'>MORE THAN JUST GYM.</h1>
        <p className='my-2 text-sm'>
          We provide world class fitness equipment, trainers and classes to
          get you to your ultimate fitness goals with ease. We provide true
          care into each and every member.
        </p>
      </div>
      <motion.div
       onViewportEnter={()=>setSelectedPage("benefits")}
      className='md:flex gap-4 w-full   justify-center '>
        {
          benefits && benefits.map((item) => (

            <BenefitCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))
        }
      </motion.div>
      <div className=' md:mt-25 w-full mt-16 items-center md:flex justify-between  py-20 '>

        <img src={benefitpageGraphic} alt="" className='max-w-full h-auto' />
        <div>
          <div className='relative  mt-3'>
            <div className='before:absolute before:content-abstractwaves before:-top-[100px] before:-left-10'>

            </div>

          <h1 className='text-4xl items-center  mx-2 font-bold md:mt-10 mt-16'>MILLIONS OF HAPPY MEMBERS GETTING <span className="text-red-300">FIT</span></h1>
          </div>
          <div className='text-justify p-2'>
            <p className='mb-10'>

            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
            </p>
          <p className='mb-10'>

            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
          </p>
          </div>
          <div className='relative'>
        <div className='before:absolute before:content-sparkles before:-top-[45px] md:before:-top-[10px] before:right-[100px]'>

          <ActionButton page="contactus" setSelectedPage={setSelectedPage}>Join Now</ActionButton>
        </div>
          </div>
        </div>

        <div></div>
      </div>
    </motion.div>

    </div>
  )
}

export default Benefit