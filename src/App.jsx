import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import uy from '../src/assets/uy.png';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Carousel from './components/Carusel';
import Kvartira from './components/Kvartira';
import Tuzilma from './components/Tuzilma';

function App() {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="overflow-x-hidden"
    >

      <motion.div
        className="w-full h-[1222px] bg-cover bg-center bg-no-repeat pl-16"
        style={{ backgroundImage: `url(${uy})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Header />
        </motion.div>
      </motion.div>
      <motion.div
        className='container mx-auto bg-[#2B3958] w-full py-10'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Card />
      </motion.div>
      <motion.div
        className='container mx-auto pt-10 pb-10 bg-[#223C56]'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Kvartira />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Tuzilma />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;
