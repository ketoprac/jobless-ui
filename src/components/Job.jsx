import { motion } from "framer-motion";

const Job = ({ job }) => {
  return (
    <motion.div
      whileInView={{opacity: 1, y: 0, transition: {duration: 1.5}}}
      initial={{opacity: 0, y: -50}}
      key={job.id}
      className="group flex flex-col justify-between p-6 bg-white/60 lg:w-[360px] w-full h-60 shadow-card rounded-xl hover:bg-newBlue hover:text-white"
    >
      <div className="flex items-center gap-x-4">
        <img src={job.logo} alt="logo" />
        <div className="flex flex-col">
          <a href="#" className="font-semibold text-lg">{job.title}</a>
          <a href="#" className="text-sm text-black/60 group-hover:text-white/80">{job.company}</a>
        </div>
      </div>
      <p className="text-black/60 group-hover:text-white/80">{job.description}</p>
      <svg
        className="fill-black/5 group-hover:fill-white/20"
        width="310"
        height="1"
        viewBox="0 0 310 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="310" height="1" fillOpacity="1"/>
      </svg>
      <div className="flex justify-between items-center">
        <p className="px-4 py-1 font-semibold bg-black/5 rounded-[100px] text-xs group-hover:bg-white/20">
          {job.skill}
        </p>
        <span className="text-sm font-semibold">
          ${job.minSalary.toLocaleString()} - ${job.maxSalary.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};

export default Job;
