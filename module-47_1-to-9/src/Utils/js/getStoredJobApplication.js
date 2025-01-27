const getStoredJobApplication = () => {
    const storedJobApplication = window.localStorage.getItem('job-application');

    return (storedJobApplication) ? JSON.parse(storedJobApplication) : [];
}

export default getStoredJobApplication;