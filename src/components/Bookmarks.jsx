import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import JobCard from "./JobCard";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("bookmark")) || [];
    setBookmarks(storedJobs);
  }, []);


  return (
    <>
      <Footer />
      <main>
        {bookmarks?.map((job) => (
          <JobCard key={job?.id} job={job} />
        ))}
        {bookmarks?.length === 0 && (
          <div className="loading">
            <h2>No bookmarks yet.</h2>
          </div>
        )}
      </main>
    </>
  );
};

export default Bookmarks;
