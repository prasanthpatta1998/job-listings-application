import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job, }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <article onClick={() => handleNavigate()}>
      <div className="image-container">
        {job?.creatives !== undefined ? (
          <img
            src={job?.creatives[0]?.thumb_url}
            alt="Job Image"
            className="job-image"
          />
        ) : null}
      </div>
      <div className="details-container">
        <h3>{job.title?.slice(0,65)}|</h3>
        <p className="job-detail">
          <span>📍 Location:</span> {job?.primary_details?.Place}
        </p>
        <p className="job-detail">
          <span>💼 Salary:</span>{" "}
          {job?.primary_details?.Salary === "-"
            ? "Depends on experience/work"
            : job?.primary_details?.Salary}
        </p>
        <p className="job-detail">
          <span>📞 Phone: </span> {job?.custom_link?.slice(4)}
        </p>
      </div>
    </article>
  );
};

export default JobCard;
