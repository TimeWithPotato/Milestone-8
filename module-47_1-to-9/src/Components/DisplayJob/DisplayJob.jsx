import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const DisplayJob = ({ displayJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    contact_information,
  } = displayJob;
  return (
    <div className="grid md:grid-cols-3 items-center gap-5 shadow-lg my-5 rounded-md pb-5 md:pb-0">
      <img src={logo} alt="" className="md:pl-3 pl-5 py-4 md:shadow-lg"/>
      <div className="text-left pl-5">
        <h2 className="font-bold text-left text-black text-2xl">{job_title}</h2>
        <h2 className="text-left font-semibold">{company_name}</h2>
        <div className="flex space-x-3 my-3">
          <h3 className="border rounded-md border-violet-800 px-2 py-1 text-violet-800">{remote_or_onsite}</h3>
          <h3 className="border rounded-md border-violet-800 px-2 py-1 text-violet-800">{job_type}</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 text-left -ml-7">
          <div className="flex ml-5 flex-grow">
            <CiLocationOn className="mt-1 w-auto" />
            <h3>{contact_information.address}</h3>
          </div>
          <div className="flex gap-1">
            <AiOutlineDollarCircle className="mt-1" />
            <h3>
              <span>Salary:</span>
              {salary}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/jobdetails/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayJob;
