"use client";

import { motion, AnimatePresence } from "framer-motion";
import { properties } from "../../constants/index";
import { Products } from "@/components";

const Product_Services = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <main className=" relative ">
          <Products />
        </main>
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Product_Services;
