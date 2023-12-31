import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
       
      export default function Home() {
        const ref = useRef(null)
    return (
        <motion.div drag whileDrag={{scale :1.1}} dragConstraints={ref}>
      <div ref={ref} className="mx-auto w-full max-w-7xl">
            <div className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-52 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hell YEAH!
                            <span className="hidden sm:block text-4xl">Lustrous HAIR</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; GET IT now
                        </Link>
                    </div>
                </div>
               
               
                <div className="absolute inset-0 w-full sm:my-10 sm:pt-1 4  h-full ">
                    <img className="w-96" src="https://i.pinimg.com/236x/f7/ee/d9/f7eed96c7bbdd5ba8d639ca0bfcf8931.jpg" alt="image1" />
                </div>
          
                </div>
            <div className="grid  place-items-center sm:mt-8">
                <img className="sm:w-96 w-48" src="https://i.pinimg.com/236x/b3/20/6d/b3206d84aa3714b4a7bb3d74da868ba4.jpg" alt="image2" />
            </div>
           
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Never F Up!</h1>
            </div>
        </motion.div>
        
    );
}
 