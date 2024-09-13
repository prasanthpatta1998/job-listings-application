import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import JobCard from "./JobCard";

const Home = () => {
  const [jobsData, setJobsData] = useState({
    jobs: [],
    loading: false,
    error: false,
  });

  const { jobs, loading, error } = jobsData;

  const fetchJobsData = async () => {
    setJobsData({ ...jobsData, loading: true });
    try {
      const response = await fetch(
        "https://testapi.getlokalapp.com/common/jobs?page=1"
      );
      const data = await response.json();
      setJobsData({
        ...jobsData,
        jobs: [...data.results?.slice(0, 4), ...data.results?.slice(5)],
      });
    } catch (error) {
      setJobsData({ ...jobsData, error: true });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

  return (
    <>
      <Footer />
      <main>
        {jobs?.map((job) => (
          <JobCard key={job?.id} job={job} />
        ))}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}
        {error && (
          <div className="loading">
            <h3>Error loading jobs. Please try again after sometime</h3>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
