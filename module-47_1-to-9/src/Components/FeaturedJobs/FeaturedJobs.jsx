import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionDetails from "../SectionDetails/SectionDetails";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { data } from "react-router-dom";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const details = 'Explore thousands of job opportunities with all the information you need. Its your future';
    useEffect(() => {
            fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    },[])
    return (
        <div className="my-5">
            <SectionTitle title={'Featured Jobs'} />
            <SectionDetails details={details} />
            <div className="grid md:grid-cols-2 my-5 gap-5">
                {
                    featuredJobs.slice(0,dataLength).map((featuredJob,idx)=><FeaturedJob key={idx} featuredJob={featuredJob} />)
                }
            </div>
            <div className={`${dataLength === featuredJobs.length && 'hidden'}`}>
                <button className="py-3 px-5 rounded-md bg-[#9873FF] text-white hover:bg-slate-800" onClick={()=>setDataLength(featuredJobs.length)}>Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;