import  { type ReactNode } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type props={
    page:string
    children:ReactNode
    setSelectedPage:(value:string)=>void
}
const ActionButton = ({page,children,setSelectedPage}:props) => {
  const tolowercasePage = page.toLowerCase().replace(/ /g, "");
  console.log(page)
  return (
    <>
    <AnchorLink
    href={`#${tolowercasePage}`}
    onClick={()=>setSelectedPage(tolowercasePage)}
    >


    <button className='py-2 px-8 bg-yellow-500 rounded-md border-[1px]  hover:bg-red-400 hover:text-white'>
      {children}
    </button>
    </AnchorLink>
   
    </>
  )
}

export default ActionButton