import { motion } from 'framer-motion';
import son1 from '../assets/01.svg';
import son2 from '../assets/02.svg';
import son3 from '../assets/03.svg';
import son4 from '../assets/04.svg';
import son5 from '../assets/05.svg';
import son6 from '../assets/06.svg';
import son7 from '../assets/07.svg';
import son8 from '../assets/08.svg';
import son9 from '../assets/09.svg';
import son10 from '../assets/10.svg';
import son11 from '../assets/11.svg';
import uy1 from '../assets/Rectangle2.png';
import uy2 from '../assets/Rectangle21.png';
import uy3 from '../assets/Rectangle26.png';
import uy4 from '../assets/Rectangle27.png';
import uy5 from '../assets/Rectangle3.png';
import uy6 from '../assets/Rectangle4.png';
import uy7 from '../assets/Rectangle6.png';
import kamera from '../assets/Rectangle16.png';
import kamera1 from '../assets/Rectangle161.png';
import kamera2 from '../assets/Rectangle162.png';

const Card = () => {
  return (
    <div className="w-full overflow-x-scroll whitespace-nowrap py-[50px] sm:py-[70px] lg:py-[100px] pl-4 sm:pl-10 md:pl-16 no-scrollbar">
      <div className="flex gap-4 sm:gap-6 md:gap-10 min-w-max">
        <div className="inline-block">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full sm:w-[650px]'>
            {[{ img: uy1, icon: son1, text: 'Индивидуальное\nотопление' },
            { img: uy2, icon: son2, text: 'Индивидуальное\nотопление' }].map((item, i) => (
              <motion.div
                key={i}
                className={`pt-4 sm:pt-7 ${i === 0 ? 'sm:ml-10' : 'sm:pl-10'}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img className='rounded-[20px] w-full h-auto' src={item.img} alt="" />
                <div className='flex items-center gap-3 sm:gap-[15px] pt-[15px] sm:pt-[25px]'>
                  <img src={item.icon} alt="" />
                  <p className='font-semibold text-sm sm:text-lg text-white whitespace-pre-line'>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full sm:w-[650px]'>
            {[{ img: uy3, icon: son3, text: 'Тёплые\nполы' },
            { img: uy4, icon: son4, text: 'Закрытая\nтерритория' }].map((item, i) => (
              <motion.div
                key={i}
                className='pt-4 sm:pt-7 sm:ml-10'
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img className='rounded-[20px] w-full h-auto' src={item.img} alt="" />
                <div className='flex items-center gap-3 sm:gap-[15px] pt-[15px] sm:pt-[25px]'>
                  <img src={item.icon} alt="" />
                  <p className='font-semibold text-sm sm:text-lg text-white whitespace-pre-line'>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className='inline-block w-[250px] sm:w-[400px] md:w-[538px] pt-4 sm:pt-[30px]'
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img className='w-full h-auto sm:h-[580px]' src={kamera} alt="" />
          <div className='pt-4 sm:pt-[25px] flex items-center gap-3 sm:gap-[13px]'>
            <img src={son5} alt="" />
            <p className='font-semibold text-sm sm:text-lg text-white whitespace-pre-line'>
              Видеонаблюдение придомовой\nтерритории и подъезда
            </p>
          </div>
        </motion.div>
        <div className="inline-block">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full sm:w-[650px]'>
            {[{ img: uy5, icon: son6, text: 'Индивидуальное\nотопление' },
            { img: uy3, icon: son7, text: 'Корзины под\nкондиционер' }].map((item, i) => (
              <motion.div
                key={i}
                className={`pt-4 sm:pt-7 ${i === 0 ? 'sm:ml-10' : 'sm:pl-10'}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img className='rounded-[20px] w-full h-auto' src={item.img} alt="" />
                <div className='flex items-center gap-3 sm:gap-[15px] pt-[15px] sm:pt-[25px]'>
                  <img src={item.icon} alt="" />
                  <p className='font-semibold text-sm sm:text-lg text-white whitespace-pre-line'>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full sm:w-[650px]'>
            {[{ img: uy6, icon: son8, text: 'Черновая\nотделка' },
            { img: uy7, icon: son9, text: 'Кладовые\nна этаже' }].map((item, i) => (
              <motion.div
                key={i}
                className='pt-4 sm:pt-7 sm:ml-10'
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img className='rounded-[20px] w-full h-auto' src={item.img} alt="" />
                <div className='flex items-center gap-3 sm:gap-[15px] pt-[15px] sm:pt-[25px]'>
                  <img src={item.icon} alt="" />
                  <p className='font-semibold text-sm sm:text-lg text-white whitespace-pre-line'>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className='inline-block w-[250px] sm:w-[400px] md:w-[538px] pt-4 sm:pt-[30px]'
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img className='w-full h-auto sm:h-[580px]' src={kamera1} alt="" />
          <div className='pt-4 sm:pt-[25px] flex items-center gap-3 sm:gap-[13px]'>
            <img src={son10} alt="" />
            <p className='font-semibold text-sm sm:text-lg text-white whitespace-pre-line'>
              Современные\nпланировки
            </p>
          </div>
        </motion.div>
        <motion.div
          className='inline-block w-[250px] sm:w-[400px] md:w-[538px] pt-4 sm:pt-[30px]'
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img className='w-full h-auto sm:h-[580px]' src={kamera2} alt="" />
          <div className='pt-4 sm:pt-[25px] flex items-center gap-3 sm:gap-[13px]'>
            <img src={son11} alt="" />
            <p className='font-semibold text-sm sm:text-lg text-white whitespace-pre-line'>
              Погреб в квартирах\nпервого этажа
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Card;
