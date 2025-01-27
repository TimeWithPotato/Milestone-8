import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import getStoredJobApplication from "../../Utils/js/getStoredJobApplication";
import DisplayJob from "../DisplayJob/DisplayJob";

const AppliedJobs = () => {
  const loaderData = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState(appliedJobs);
  const [displayJobsType, setDisplayJobsType] = useState("Empty");
  const handleFilter = (filter) => {
    if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "onsite"
      );
      setDisplayJobs(onsiteJobs);
      setDisplayJobsType("Onsite");
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
      setDisplayJobsType("Remote");
    } else {
      setDisplayJobs(appliedJobs);
      setDisplayJobsType("All");
    }
  };
  useEffect(() => {
    const storedJobApplication = getStoredJobApplication();
    const filteredJobs = loaderData.filter((loaderDatum) =>
      storedJobApplication.includes(loaderDatum.id)
    );
    // console.log(filteredJobs)
    setAppliedJobs(filteredJobs);
    setDisplayJobs(filteredJobs);
  }, [loaderData]);

  return (
    <div>
      <section>{/*  */}</section>
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="btn m-1 bg-gray-400 text-white border-0">
                      {
                          displayJobsType === "Empty" ? <span>Filter By</span> : displayJobsType
            }
            <MdOutlineArrowDropDown className="size-10" />
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <section>
        {displayJobs.map((displayJob) => (
          <DisplayJob key={displayJob.id} displayJob={displayJob} />
        ))}
      </section>
    </div>
  );
};

export default AppliedJobs;
