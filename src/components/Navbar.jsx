import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../assets/icon/hamburger.svg";
import { ReactComponent as CloseIcon } from "../assets/icon/close.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center pt-14">
        <p className="text-2xl font-semibold">Jobless</p>
        <div className="justify-center items-center gap-x-12 hidden md:flex">
          <a href="#" className="font-medium">
            Home
          </a>
          <a href="#" className="text-black/80">
            Discover
          </a>
          <a href="#" className="text-black/80">
            Post a Job
          </a>
          <a href="#" className="text-black/80">
            Contact Us
          </a>
        </div>
        <button className="px-6 py-2.5 font-semibold rounded-sm border border-black/20 hidden md:flex cursor-pointer">
          Sign Up
        </button>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.6 }}
          className="block md:hidden"
        >
          {showNavbar ? (
            <CloseIcon onClick={() => setShowNavbar(false)} />
          ) : (
            <HamburgerIcon onClick={() => setShowNavbar(true)} />
          )}
        </motion.div>
      </nav>
      {showNavbar && (
        <motion.div
          animate={{ y: 0, scale: 1 }}
          initial={{ y: -50, scale: 0.8 }}
          exit={{ y: -50, scale: 0 }}
          className="bg-dark font-body text-newWhite px-3 pb-6 flex flex-col gap-y-3 mt-6"
        >
          <div className="gap-y-3 flex flex-col md:hidden">
            <a href="#" className="font-medium">
              Home
            </a>
            <a href="#" className="text-black/80">
              Discover
            </a>
            <a href="#" className="text-black/80">
              Post a Job
            </a>
            <a href="#" className="text-black/80">
              Contact Us
            </a>
          </div>
          <div className="gap-y-3 flex flex-col md:hidden">
            <button className="px-6 py-2.5 font-semibold rounded-sm border border-black/20">
              Sign Up
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
