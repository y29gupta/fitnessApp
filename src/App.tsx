import '@/index.css'
import Navbar from './compnents/navBar'
import Home from './compnents/home'
import { useState } from 'react'
import OurClassess from './compnents/classes'
import Benefit from './compnents/benefit'
import Contact from './compnents/contact'
import Footer from './compnents/footer'


function App() {

  const [selectedPage,setSelectedPage]=useState<string>("home")
  

  return (
    <>
     <div className='app bg-gray-20 '>
     
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefit setSelectedPage={setSelectedPage}/>
      <OurClassess setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
      <Footer/>
     </div>
    </>
  )
}

export default App
