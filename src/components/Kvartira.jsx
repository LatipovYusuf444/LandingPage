import React, { useState } from 'react';
import { motion } from 'framer-motion';
import son4 from '../assets/04.svg';
import son2 from '../assets/02.svg';
import dom from '../assets/dom.png';

const Kvartira = () => {
  const [floor, setFloor] = useState("");

  return (
    <motion.div 
      className='flex flex-col lg:flex-row items-center lg:items-start'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Panel */}
      <div className='pt-[80px] sm:pt-[100px] lg:pt-[145px] pl-4 sm:pl-10 lg:pl-[124px]'>
        <motion.p 
          className='font-semibold text-[40px] sm:text-[50px] lg:text-[70px] leading-none tracking-[0%] text-white montserrent pb-4 sm:pb-6 lg:pb-[30px]'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Квартиры
        </motion.p>

        <motion.span
          className='text-[#E5BF9B] font-semibold text-[16px] sm:text-[18px] lg:text-[22px] leading-none montserrent'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Шаг 1 из 3
        </motion.span>

        <motion.p
          className='font-semibold text-[20px] sm:text-[24px] lg:text-[32px] leading-none lg:leading-[100%] tracking-[0%] text-white pt-4 sm:pt-6 lg:pt-[30px]'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Выберите этаж
        </motion.p>

        {/* Select */}
        <motion.select
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
          className="
            w-[250px] sm:w-[320px] lg:w-[380px] h-[50px] sm:h-[60px] lg:h-[67px] 
            bg-[#151515] border border-[#3A3A3A] 
            text-white text-[16px] sm:text-[18px] lg:text-[20px] font-medium montserrent 
            rounded-xl px-4 sm:px-5 
            focus:outline-none focus:border-[#E5BF9B] 
            transition-all mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-5
          "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileFocus={{ scale: 1.02, borderColor: "#E5BF9B" }}
        >
          <option value="" disabled>Выберите этаж</option>
          <option value="1">1 этаж</option>
          <option value="2">2 этаж</option>
          <option value="3">3 этаж</option>
          <option value="4">4 этаж</option>
        </motion.select>

        {/* Info */}
        <motion.div 
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-[30px] pb-8 sm:pb-10 lg:pb-[109px]'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className='flex items-center gap-2'>
            <img src={son4} alt="" className="w-5 sm:w-6"/>
            <p className='text-white font-normal text-xs sm:text-sm leading-[150%] tracking-[0%]'>
              Квартиры доступно <br />
              на этаже
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <img src={son2} alt="" className="w-5 sm:w-6"/>
            <p className='text-white font-normal text-xs sm:text-sm leading-[150%] tracking-[0%]'>
              Квартиры <br />
              уже продано
            </p>
          </div>
        </motion.div>

        {/* Button */}
        <motion.button 
          className='font-semibold text-sm sm:text-base lg:text-lg leading-[18px] tracking-[0%] text-white w-[150px] sm:w-[170px] lg:w-[183px] h-[44px] sm:h-[50px] lg:h-[54px] border border-[#E5BF9B]'
          whileHover={{ scale: 1.05, backgroundColor: "rgba(229, 191, 155, 0.2)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Продолжить
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.img 
        className='w-[250px] sm:w-[500px] lg:w-[700px] mt-10 lg:mt-0 ml-0 lg:ml-30'
        src={dom} 
        alt="" 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      />
    </motion.div>
  )
}

export default Kvartira;
