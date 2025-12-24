import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobsApi";
import JobCard from "../components/jobs/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(res => setJobs(res.data));
  }, []);

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
