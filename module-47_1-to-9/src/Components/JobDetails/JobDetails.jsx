import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineSubtitles } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import getStoredJobApplication from "../../Utils/js/getStoredJobApplication";
import savedJobApplication from "../../Utils/js/savedJobApplication";
import { parse } from "postcss";
const JobDetails = () => {
  const jobDetails = useLoaderData();
  const jobId = useParams();
  const jobDetail = jobDetails.find((job) => job.id === parseInt(jobId.id));
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = jobDetail;
  const { phone, email, address } = contact_information;
  //   console.log(phone);

    const handleJobApply = () => {
    
        const storedJobApplication = getStoredJobApplication();
        const exist = storedJobApplication.find(jobId => jobId === parseInt(id));

        if (!exist) {
            const jobApplyMimic = new Promise(resolve => {
                resolve();
            }, 2000);
            
            savedJobApplication(parseInt(id));

            toast.promise(jobApplyMimic, {
                pending: "Applying...",
                success: "Job Applied Successfully",
                error: "Failed to Apply"
            });
        } else {
            toast.error("You have already applied for this job")
        }
}

  return (
    <div>
      <section>
        <div className="grid md:grid-cols-2 w-full gap-8 mb-5">
          <aside className="flex flex-col justify-start text-left">
            <h1>
              <span className="text-black font-semibold">
                Job Description:{" "}
              </span>
              <span>{job_description}</span>
            </h1>
            <h1>
              <span className="text-black font-semibold">
                Job Responsibility:
              </span>
              <span>{job_responsibility}</span>
            </h1>
            <div className="mt-4">
              <h1 className="text-black font-semibold mb-2">
                Educational Requirements:
              </h1>
              <p>{educational_requirements}</p>
            </div>
            <div className="mt-4">
              <h1 className="text-black font-semibold mb-2">Experiences:</h1>
              <p>{experiences}</p>
            </div>
          </aside>

          <aside className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start space-y-4 text-left w-8/12 bg-slate-700 p-5 rounded-sm">
              <div>
                <h1 className="text-xl font-bold">Job Details</h1>
              </div>
              <hr />
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <LuCircleDollarSign className="text-xl text-black" />
                  <h2>
                    <span className="text-black font-semibold">Salary: </span>
                    <span>{salary}</span>
                  </h2>
                </div>
                <div className="flex gap-2 items-center">
                  <MdOutlineSubtitles className="text-xl text-black" />
                  <h2>
                    <span className="text-black font-semibold">
                      Job Title:{" "}
                    </span>
                    <span>{job_title}</span>
                  </h2>
                </div>
              </div>
              <hr />
              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <RiPhoneFill className="text-xl text-black" />
                  <h2>
                    <span className="text-black font-semibold">Phone: </span>
                    <span>{phone}</span>
                  </h2>
                </div>
                <div className="flex gap-2 items-center">
                  <MdEmail className="text-xl text-black" />
                  <h2>
                    <span className="text-black font-semibold">Email: </span>
                    <span>{email}</span>
                  </h2>
                </div>
                <div className="flex gap-2 items-center">
                  <CiLocationOn className="text-xl text-black" />
                  <h2>
                    <span className="text-black font-semibold">Address: </span>
                    <span>{address}</span>
                  </h2>
                </div>
              </div>
            </div>
            <button
              className="w-8/12 mt-5 rounded-lg text-white shadow-lg bg-gradient-to-r from-slate-400 to-blue-950 px-5 py-2 transition-all duration-300 ease-in-out hover:from-violet-300 hover:to-blue-400"
              onClick={handleJobApply}
            >
              Apply Now
            </button>
          </aside>
        </div>
      </section>
      <section>
        <ToastContainer />
      </section>
    </div>
  );
};

export default JobDetails;
