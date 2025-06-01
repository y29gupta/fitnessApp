import React from 'react'
import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer w-full bg-[#ffe1e0]'>
      <div className=' md:flex w-5/6  mx-auto py-14 gap-14  justify-between'>
        <div className='basis-[40%] mb-20'>
          <div className='w-full'>
            <img src={Logo} alt="" />
          </div>
          <p className='my-4'>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className='mb-20'>
          <h3 className='mb-4 font-bold'>Links</h3>
          <div className='flex flex-col gap-8'>

            <p>Massa orci senectus</p>
            <p>Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
          </div>
        </div>
        <div>
          <h3 className='mb-4 font-bold'>Contact Us</h3>
          <div className='flex flex-col gap-8'>

            <p>Tempus metus mattis risus volutpat egestas.</p>
            <p>(333)425-6825</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer