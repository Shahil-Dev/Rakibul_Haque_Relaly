import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-br from-[#1C1C1C] to-[#121212] text-white">
            <div className='max-w-6xl mx-auto'>
                <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 w-full px-6">

                    {/* Right: Image */}
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="w-full lg:w-1/2 flex justify-center"
                        
                    >
                        <img
                            src="/Img/rakib.png-removebg-preview.png"
                            alt="Rakibul Hoque Helaly"
                            className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] h-auto rounded-full shadow-2xl"
                        />
                    </div>

                    {/* Left: Text */}
                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl sm:text-5xl mt-10 lg:text-6xl font-extrabold leading-tight mb-6">
                            Voice for the&nbsp;
                            <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
                                People
                            </span>, Vision for the Future.
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                            Dedicated to empowering communities through impactful social and political leadership.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="#contact"
                                className="px-6 py-3 bg-violet-500 hover:bg-violet-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Connect Now
                            </motion.a>
                            <motion.a
                                href="#portfolio"
                                className="px-6 py-3 border-2 border-gray-300 hover:border-violet-500 transition-all duration-300 text-gray-200 hover:text-violet-400 font-semibold rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Portfolio
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
