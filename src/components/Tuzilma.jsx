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
    <div className="px-3 sm:px-8 lg:px-14 pt-8">
      <motion.h1
        className="
        text-white font-semibold 
        text-[32px]     /* Mobile */
        sm:text-[45px]  /* Tablet */
        lg:text-[70px]  /* Desktop */
        leading-tight tracking-tight
        text-center sm:text-left
        montserrent
        "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Инфраструктура
      </motion.h1>
      <div className="
        grid 
        grid-cols-1       /* Mobile 480px */
        sm:grid-cols-2    /* Tablet */
        lg:grid-cols-2    /* Desktop */
        gap-4 sm:gap-8 lg:gap-12
        pt-6 sm:pt-10
        "
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * i }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="
                w-full 
                h-[180px]     /* Mobile 480px */
                sm:h-[240px]  /* Tablet */
                lg:h-[300px]  /* Desktop */
                object-cover rounded-xl
              "
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Tuzilma;
