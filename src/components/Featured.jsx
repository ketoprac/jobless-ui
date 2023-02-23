import facebookIcon from "../assets/logo/facebook.svg";
import figmaIcon from "../assets/logo/figma.svg";
import vercelIcon from "../assets/logo/vercel.svg";
import Job from "./Job";

const Featured = () => {
  const jobs = [
    {
      id: 1,
      title: "Front-End Developer",
      company: "Figma",
      logo: figmaIcon,
      description:
        "We are looking for an experienced front-end developer to join our team.",
      skill: "Rust",
      minSalary: 70000,
      maxSalary: 90000,
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Facebook",
      logo: facebookIcon,
      description: "We are seeking a data scientist to join our team.",
      skill: "Python",
      minSalary: 100000,
      maxSalary: 130000,
    },
    {
      id: 3,
      title: "Technical Writer",
      company: "Vercel",
      logo: vercelIcon,
      description: "We are seeking a technical writer to join our team.",
      skill: "Documentation",
      minSalary: 60000,
      maxSalary: 80000,
    },
  ];

  return (
    <div className="flex items-center justify-center pb-24">
      <div className="flex flex-col lg:items-start items-center">
        <p className="font-semibold mb-5 text-left lg:text-base text-3xl">
          Featured Jobs
        </p>
        <div className="flex lg:flex-row md:flex-col flex-col md:gap-y-5 gap-y-5 items-center justify-center gap-x-7">
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
