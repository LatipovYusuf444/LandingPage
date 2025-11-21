import { motion } from "framer-motion";
import kutubxona from '../assets/kutubxona.png';
import bassen from '../assets/bassen.png';
import parkovka from '../assets/parkovka.png';
import fitnes from '../assets/fitnes.png';

const Tuzilma = () => {
  const images = [
    { src: kutubxona, alt: "Кутубхона" },
    { src: bassen, alt: "Бассейн" },
    { src: parkovka, alt: "Парковка" },
    { src: fitnes, alt: "Фитнес" },
  ];

  return (
    <div className="px-4 sm:px-10">
      <motion.h1
        className='text-white font-semibold text-[70px] sm:text-5xl leading-[100%] tracking-[0%] montserrent pl-0 sm:pl-[124px] pt-10'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Инфраструктура
      </motion.h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pt-10 sm:pl-7'>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * i }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tuzilma;
