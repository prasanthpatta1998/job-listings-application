import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJob] = useState({
    loading: false,
    job: {},
    error: false,
  });

  const { loading, job, error } = jobDetails;

  const fetchJobDetails = async () => {
    setJob({ ...jobDetails, loading: true });
    try {
      const response = await fetch(
        "https://testapi.getlokalapp.com/common/jobs?page=1"
      );
      const data = await response.json();
      const details = data.results.find((eachjob) => eachjob.id === Number(id));
      setJob({ ...jobDetails, job: details });
    } catch (error) {
      setJobsData({ ...jobDetails, error: true });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const handleBookMark = () => {
    const storedJobs =
      localStorage.getItem("bookmark") !== null
        ? JSON.parse(localStorage.getItem("bookmark"))
        : [];
    const checking = storedJobs?.find((eachJob) => eachJob.id === job.id);
    if (!checking) {
      const updatedJobs = [...storedJobs, job];
      localStorage.setItem("bookmark", JSON.stringify(updatedJobs));
      alert("Job bookmarked!");
    }
  };

  return (
    <>
      <Footer />
      <main className="main-container">
        {Object.keys(job)?.length !== 0 ? (
          <div>
            <h1>{job?.title}</h1>
            <h3>Company: {job.company_name}</h3>

            <div className="primary-details">
              <h2>Primary Details</h2>
              <ul>
                <li>
                  <strong>Location: </strong> {job.primary_details?.Place}
                </li>
                <li>
                  <strong>Salary:</strong> {job.primary_details?.Salary}
                </li>
                <li>
                  <strong>Job Type:</strong> {job.primary_details?.Job_Type}
                </li>
                <li>
                  <strong>Experience:</strong> {job.primary_details?.Experience}
                </li>
                <li>
                  <strong>Qualification:</strong>{" "}
                  {job.primary_details?.Qualification}
                </li>
              </ul>

              {job.job_tags?.length > 0 && (
                <div>
                  <span
                    style={{
                      backgroundColor: job.job_tags[0]?.bg_color,
                      color: job.job_tags[0]?.text_color,
                      padding: "4px",
                    }}
                  >
                    {job.job_tags[0]?.value}
                  </span>
                </div>
              )}

              <h2>Other Details</h2>
              <p>{job.other_details}</p>

              <div>
                <h3>Contact Information</h3>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href={job.custom_link}>{job.whatsapp_no}</a>
                </p>
              </div>

              <button
                style={{ marginTop: "20px" }}
                className="bookmark-btn"
                onClick={() => handleBookMark()}
              >
                Bookmark
              </button>
            </div>
          </div>
        ) : null}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}
        {error && (
          <div className="loading">
            <h3>Error loading job. Please try again after sometime</h3>
          </div>
        )}
      </main>
    </>
  );
};

export default JobDetails;
