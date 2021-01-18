import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://64.media.tumblr.com/ad628704fb00a93f7184a4a7cc7339e3/253fd679d0181a60-ea/s540x810/62e273cfa0f8acf86fdf97f0a487e0f21c2f5d9f.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
          <p className="journal__entry-title">Un nuevo dia</p>
          <p className="journal__entry-content">Lorem ipsum, dolor sit amet consectetur.</p>
      </div>

      <div className="journal__entry-date-box">
          <span>Monday</span>
          <h1>28</h1>
      </div>
    </div>
  );
};

export default JournalEntry;
