import React from 'react';
import { motion } from 'framer-motion';
import { pageEffect } from './Animate';

const Wrapper = ({ children, ...rest }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.6 }}
      variants={pageEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;