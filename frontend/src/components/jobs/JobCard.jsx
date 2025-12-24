const JobCard = ({ job }) => {
  return (
  <div className="bg-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <img src={job.logo} alt="" className="h-10 mb-2" />
      <h3 className="font-bold">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.skills.join(", ")}</p>
      <p className="text-green-600 font-semibold mt-1">{job.salary}</p>
      <a
        href={job.applyLink}
        target="_blank"
        className="block mt-3 bg-blue-600 text-white text-center py-2 rounded-lg"
      >
        Apply
      </a>
    </div>
  );
};

export default JobCard;
