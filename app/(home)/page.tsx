"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components";
import Iframe from "react-iframe";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <main className="relative">
          <div className=" relative h-screen home-image overflow-hidden  ">
            <h1 className="main-title ">Get Your First AI Employee Today</h1>
            <div className=" main-subtitle">
              <p>
                Engage like never before with other customers and other
                businesse
              </p>
              <p>
                Real-Time Updates:  Capture Crucial Data: Enhanced Engagement: 
              </p>
              <p>
                Experience the AI revolution. Because it's time your website
                talked back.
              </p>
            </div>
            <Button
              title="Explore More"
              containerStyles=" rounded-full z-10  absolute left-[50%] top-[50%] mt-[200px] sm:mt-[240px] -translate-y-1/2 -translate-x-1/2 shadow-sm"
              textStyles=""
            />
          </div>
          <div className=" bg-slate-200 relative h-screen">
            <Iframe
              url={"https://smartemployee-2imn7pfmma-uc.a.run.app/"}
              width="100%"
              height="100%" // Adjust the height as needed
              display="initial"
              position="absolute"
            />
          </div>
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
}
