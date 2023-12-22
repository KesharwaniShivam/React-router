import React from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { FaTruckDroplet } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { motion } from "framer-motion"

function Contact() {
    return (
        <><div>
            <div className='flex flex-col justify-center items-center p-10'>
                <h1 className='font-bold text-4xl'>Contact Us</h1>
            </div>

            <div className=''>
                <ul className=' m-10 flex flex-wrap justify-evenly  '>
                    <motion.li drag whileDrag={{scale:1.2}} className='rounded-xl p-3 flex items-center justify-center w-44 h-44 bg-red-200 cursor-pointer hover:bg-red-300'>
                        <span className='text-6xl'>
                            <IoCloudDownloadOutline />
                        </span>
                    </motion.li>
                    <motion.li drag whileDrag={{scale:1.2}} className='rounded-xl p-3 flex items-center justify-center w-44 h-44 bg-red-200 cursor-pointer hover:bg-red-300'>
                        <span className='text-6xl'>
                            < RiServiceLine />
                        </span>
                    </motion.li>
                    <motion.li drag whileDrag={{scale:1.2}} className='rounded-xl p-3 flex items-center justify-center w-44 h-44 bg-red-200 cursor-pointer hover:bg-red-300'>
                        <span className='text-6xl'>
                            <ImLocation2 />
                        </span>
                    </motion.li>
                    <motion.li drag whileDrag={{scale:1.2}} className='rounded-xl p-3 flex items-center justify-center w-44 h-44 bg-red-200 cursor-pointer hover:bg-red-300'>
                        <span className='text-6xl'>
                            <FaTruckDroplet />
                        </span>
                    </motion.li>
                    <motion.li drag whileDrag={{scale:1.2}} className='rounded-xl p-3 flex items-center justify-center w-44 h-44 bg-red-200 cursor-pointer hover:bg-red-300'>
                        <span className='text-6xl'>
                            <MdSupportAgent />
                        </span>
                    </motion.li>

                </ul>
            </div>
            <div className='p-6 py-20'>
                <p className='text-2xl'>Feel free to reach out to us for any inquiries.</p>

                <div className='mt-5'>
                    <div className=" text-md  font-semibold w-40">
                        +44 1234567890

                        <div className=" text-md  font-semibold w-40">
                            info@acme.org
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact