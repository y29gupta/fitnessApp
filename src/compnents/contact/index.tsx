import React from 'react'
import contaactusGraphic from  '@/assets/ContactUsPageGraphic.png'
import {motion} from "framer-motion"
import { useForm } from 'react-hook-form'
// import { error } from 'console'

type Props = {
  setSelectedPage:(value:string)=>void
 
}
interface formData{
  name:string,
  email:string,
  message:string
}

const Contact = ({setSelectedPage}: Props) => {
 const {register,formState:{errors},trigger,handleSubmit}=useForm<formData>()

  const inputcss="p-2 w-full focus:outline-none rounded-md focus:ring-0 bg-red-300 text-white placeholder:text-white mb-10"

  const onSubmit=(data:formData)=>{
    console.log(data,"data")
    alert("Contact Details submitted. we will contact you soon")
  }
  return (
    <motion.div
    onViewportEnter={()=>setSelectedPage("contactus")}
    id='contactus' className=' w-full'>
      <div className=' mx-auto w-5/6 mt-16   pb-28'>
        <div className='md:w-3/5 px-2'>
          <h1 className='text-3xl font-bold'>JOIN NOW TO GET IN SHAPE</h1>
          <p className=' my-4'>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis</p>
        </div>
        <div className='md:flex gap-5 z-[10]'>
          <div className=' basis-3/5 z-[10]'>
            <form  onSubmit={handleSubmit(onSubmit)}>
              <input type="text"  id="" {...register('name',{required:true,max:100})}
              className={inputcss} placeholder='Enter Your Name'/>
              {errors.name && <span className="text-red-500">Name is required</span>}
              <input type="text"  id=""
               {...register("email",{
                required:true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })} 
               className={inputcss} placeholder='Enter Your Email'
              />
              {errors.email && (
                <p className='text-red-600'>
                    {errors.email.type==="required"&& "This field cannot be empty"}
                    {errors.email.type==="pattern"&& "Please enter your valid email"}
                </p>
               
              )
            }
             <textarea  id="" rows={3}
               className={inputcss} placeholder='Message'
               {...register("message",{required:true})}
             ></textarea>
             {errors.message && <span className="text-red-500">Message is required</span>}
             <div>

             <button className=' px-10 py-1 mt-2 mb-5 focus:outline-none rounded-md focus:ring-0 bg-[#ffc132]'>
              Submit
             </button>
             </div>
            
             
            </form>
          </div>
          <div className='relative basis-2/5 mt-0 z-10  '>
            <div className='md:before:absolute md:before:content-evolvetext md:before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img className='w-full' src={contaactusGraphic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact