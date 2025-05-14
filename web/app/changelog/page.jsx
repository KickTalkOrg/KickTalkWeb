"use client";

import "../page.css";
import "./page.css";

export default function Changelog() {
  const changelogs = [
    {
      date: "May 5th, 2025",
      version: "v. 1.0.3",
      isLatest: true,
      major: "Major Updates:",
      minor: "Smaller Updates:",
    },
    {
      date: "May 3rd, 2025",
      version: "v. 1.0.2",
      isLatest: false,
      major: "Major Updates:",
    },
    {
      date: "May 2nd, 2025",
      version: "v. 1.0.2",
      isLatest: false,
      major: "Major Updates:",
    },
  ];

  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <div className="homeHeaderLeftLogo">
            <img src="/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="homeHeaderRight">
          <div className="homeHeaderRightCreators">
            <p>
              Created by{" "}
              <a href="https://x.com/drkerco" target="_blank" rel="noopener noreferrer">
                DRKNESS_x
              </a>{" "}
              and{" "}
              <a href="https://x.com/ftk789yt" target="_blank" rel="noopener noreferrer">
                ftk789
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="homeDivider" />

      <div className="homeBody">
        <div className="homeBodyHead">
          <div className="homeBodyHeadLeftTitle">
            <h1>What changed?</h1>
            <span>View all changes we’ve made to current version you downloaded.</span>
          </div>
        </div>

        <div className="changelog-container">
          {changelogs.map((entry, index) => (
            <div key={index} className={`changelog-entry ${!entry.isLatest ? "faded" : ""}`}>
              <div className="changelog-entry-header">
                <h2 className={`changelog-date ${entry.isLatest ? "latest" : "old"}`}>{entry.date}</h2>
                <div className="changelog-version">
                  {entry.isLatest && <span className="latest-tag">LATEST</span>}
                  <span className="version-number">{entry.version}</span>
                </div>
              </div>

              <div className="changelog-content">
                <p className="major-update">{entry.major}</p>
                {entry.minor && <p className="minor-update">{entry.minor}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
