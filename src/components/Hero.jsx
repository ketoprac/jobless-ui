import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mb-32 mt-32">
      <h1 className="text-4xl font-semibold mb-4">
        Get Connected to the Best Remote
        <br />
        Jobs in Your Field
      </h1>
      <p className="text-black/60 mb-10">
        Discover a wide range of remote opportunities on our platform and
        <br />
        take control of your career
      </p>
      <div className="flex lg:flex-row flex-col gap-y-3 items-center gap-x-5">
        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="font-semibold py-3 px-4 text-white rounded-[100px] bg-newBlue shadow-button">
          Explore Remote Jobs
        </motion.button>
        <a href="#" className="text-newBlue underline font-semibold">
          How it works?
        </a>
      </div>
    </div>
  );
};

export default Hero;
