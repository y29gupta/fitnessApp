
import Logo from "@/assets/Logo.png"
import Link from './Link'
import ActionButton from '../ActionButton'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

type Props = {
    selectedPage: string
    setSelectedPage: (value: string) => void

}



const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [istopPage, setIstopPage] = useState<boolean>(true)
    // const flexBetween = "flex items-center justify-between";

    useEffect(() => {
        const scrolling = () => {

            if (window.scrollY == 0) {
                setIstopPage(true)
                console.log(istopPage, "scrolling not")
            }
            if (window.scrollY !== 0) setIstopPage(false)
        }
        window.addEventListener("scroll", scrolling)

        return window.removeEventListener("scroll", () => {

        })
    }, [])
    return (
        <>

            <nav>
                <div className={`flex transition duration-1000 fixed  top-0 z-30 w-full  py-6 justify-center ${istopPage ? "" : "bg-[#ffe1e0]"} `}>
                    <div className="  flex justify-between items-center gap-16  w-5/6 ">

                        <img src={Logo} alt="" />

                        <div className=" hidden md:flex justify-between w-full ">
                            <div className=" flex justify-between items-center gap-8 text-sm">
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                            <div className="flex justify-between items-center gap-8">
                                <p>Sign in</p>
                                <ActionButton page="Contact Us" setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className=" bg-yellow-500 md:hidden  p-2  rounded-full">

                            <Bars3Icon className="md:hidden h-6 w-6 text-white" />
                        </button>

                    </div>

                </div>

                <div
                    className={`fixed right-0 bottom-0 z-40 h-full w-[250px] bg-primary-100 drop-shadow-2xl shadow-rose-950 transform transition-transform duration-200 ease-in  ${isOpen ? 'translate-x-0' : 'translate-x-full'}  `}
                >
                    <div className="flex justify-end p-8">
                        <button onClick={() => setIsOpen(false)} className="md:hidden rounded-full">
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    <div>
                        <div className="flex flex-col md:hidden justify-between w-full ">
                            <div className="flex flex-col justify-between items-center gap-8 text-sm">
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                        </div>


                    </div>
                </div>



            </nav>

        </>
    )
}
export default Navbar