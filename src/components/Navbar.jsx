import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/icons.svg';
import telefon from '../assets/telefon.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 py-2 bg-transparent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="logo"
          className="w-[120px] sm:w-[150px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-lg">
          {['Преимущества', 'Инфраструктура', 'Квартиры', 'Ипотека', 'Контакты'].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#d1d5db" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Link to="/"><p>{link}</p></Link>
            </motion.li>
          ))}
        </ul>

        {/* Contact */}
        <motion.div
          className="hidden md:flex gap-2 items-center text-white cursor-pointer"
          whileHover={{ scale: 1.05, color: "#d1d5db" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={telefon} alt="telefon" className="w-5 sm:w-6" />
          <p className="text-sm sm:text-base">+7(495)255-48-24</p>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1"
          >
            <span className={`w-8 h-[2px] bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-8 h-[2px] bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-8 h-[2px] bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-2 bg-[#151515] rounded-xl p-4 flex flex-col gap-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['Преимущества', 'Инфраструктура', 'Квартиры', 'Ипотека', 'Контакты'].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, color: "#d1d5db" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/"><p>{link}</p></Link>
            </motion.div>
          ))}

          <motion.div
            className="flex gap-2 items-center mt-2"
            whileHover={{ scale: 1.05, color: "#d1d5db" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={telefon} alt="telefon" className="w-5" />
            <p className="text-sm">+7(495)255-48-24</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
