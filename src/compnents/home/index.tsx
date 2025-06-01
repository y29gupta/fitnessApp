import React from 'react'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import HomePageText from '@/assets/HomePageText.png'
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion, spring } from 'framer-motion'
import ActionButton from '../ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
type Props = {
  setSelectedPage: (value: string) => void
}

const Home = ({ setSelectedPage }: Props) => {
  return ( 
    <>
      <div id='home' className='py-10   md:h-full gap-16 md:pb-0'>
        <motion.div 
         onViewportEnter={()=>setSelectedPage("home")}
        className='md:flex  items-center justify-between  w-5/6 mx-auto md:h-5/6 '>

          <div className='md:basis-3/5 z-10 mt-32'>
            <motion.div

              initial="hidden"
              whileInView="visible"
              variants={
                {
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, scale: [0, 1.2, 1] }

                }
              }
              transition={{ duration: 1 }}
            >

              <div className='relative'>
                <div className={` before:absolute before:-top-20  before:-left-10 md:before:content-evolvetext before:z-[-1] `}>

                  <img src={HomePageText} alt="" />
                </div>

              </div>

              <p className='mt-8 text-sm'>
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
              </p>



            </motion.div>
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton page="ContactUs" setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink 
              className='underline '
              href='#contactus'
              onClick={()=>setSelectedPage("contactus")}
              >Learn More</AnchorLink>
            </motion.div>
          </div>
          <motion.div
            className='basis-3/5 md:ml-40 md:mt-16 flex justify-center md:justify-items-end'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, transform: "easein" }}
          >
            <img src={HomePageGraphic} alt="" />
          </motion.div>

        </motion.div>

        <div className='hidden md:block py-10 bg-primary-100 h-[150px] w-full'>
          <div className='mx-auto  border-red-200 w-5/6 '>
          <div className='flex gap-16 justify-between items-center w-3/5'>


            <img src={SponsorRedBull} alt="" />
            <img src={SponsorForbes} alt="" />
            <img src={SponsorFortune} alt="" />
          </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Home