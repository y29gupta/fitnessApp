import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    icon: React.ReactElement,
    title: string,
    description: string
}



const BenefitCard = ({ icon, title, description }: Props) => {
    return (
        <motion.div
            className='w-full  mt-2 border-2 border-gray-100 rounded-sm py-16'
           initial="hidden"
              whileInView="visible"
              variants={
                {
                  hidden: { opacity: 0,y:50 },
                  visible: { opacity: 1,y:0  }

                }
              }
              transition={{ duration: 1, }}
        >
            <div className=''>
                <div className='flex   flex-col gap-3 items-center justify-center'>
                    <div className='rounded-full bg-orange-200 p-3'>

                        {icon}
                    </div>
                    <h4 className='text-md font-bold' >{title}</h4>
                    <p className='text-justify px-4'>{description}</p>
                    <AnchorLink
                        className='underline text-red-500'
                        href='#contactus'
                    >Learn More</AnchorLink>
                </div>

            </div>
        </motion.div>
    )
}

export default BenefitCard