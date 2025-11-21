import { motion } from "framer-motion";
import React from "react";
import element from '../assets/8element.png'
import son1 from '../assets/14.svg'
import son2 from '../assets/21.svg'
import son3 from '../assets/100.svg'

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
  })
};

const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <motion.div
        className="absolute top-[20%] sm:top-[25%] md:top-[38%] left-4 sm:left-10 md:left-16 z-40"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          custom={0}
          variants={textVariant}
          className="text-[80px] sm:text-[120px] md:text-[170px] montserrent text-[#E5BF9B] leading-none"
        >
          8-я
        </motion.h1>

        <motion.h1
          custom={1}
          variants={textVariant}
          className="text-[50px] sm:text-[80px] md:text-[120px] text-white montserrent leading-[100%] tracking-[0%]"
        >
          СОСНЕВСКАЯ
        </motion.h1>

        <motion.p
          custom={2}
          variants={textVariant}
          className="font-normal text-[12px] sm:text-sm md:text-base leading-[160%] sm:leading-[180%] tracking-[0%] montserrent text-white pt-3 sm:pt-5 max-w-[300px] sm:max-w-[500px] md:max-w-[600px]"
        >
          Удивлять — вот кредо проекта. Давать больше, чем принято стандартами,<br />
          предугадывать желания. Комплекс создается по принципу клубной самодостаточности <br />
          для взыскательных клиентов — здесь предусмотрено все для каждого члена семьи.
        </motion.p>

        <motion.div
          custom={3}
          variants={textVariant}
          className='pt-4 sm:pt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12'
        >
          {[{ icon: son1, title: "Минут", desc: "Пешком до метро\n«Тульская»" },
          { icon: son2, title: "Минута", desc: "Пешком до метро\n«Тульская»" },
          { icon: son3, title: "Минута", desc: "Пешком до метро\n«Тульская»" }].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className='flex items-center gap-3 sm:gap-6'>
                <img src={item.icon} alt="" className="w-6 sm:w-8" />
                <p className='font-semibold text-sm sm:text-lg leading-[18px] tracking-[0%] montserrent text-white'>{item.title}</p>
              </div>
              <p className='text-[#949AA5] text-xs sm:text-sm pt-1 sm:pt-2 whitespace-pre-line'>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
      {/* <img src={element} alt="" className="absolute right-0 bottom-0 w-[150px] sm:w-[250px] md:w-[400px] opacity-20" /> */}
    </div>
  );
};

export default Header;
