import getStoredJobApplication from "./getStoredJobApplication"

const savedJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find(jobId => jobId === id);

    if (!exist) {
        storedJobApplication.push(id);
        window.localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
    }
}

export default savedJobApplication;