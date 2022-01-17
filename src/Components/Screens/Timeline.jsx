import React from "react";
import { Chrono } from "react-chrono";
import "../../Styles/Timeline.css";
import google_calendar from "../../Assets/Icons/calendar.svg";
function Timeline() {
  const items = [
    {
      title: "Github",
      cardTitle: "GitHub, Inc.",
      cardSubtitle:
        "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif",
        },
      },
    },
    {
      title: "Github",
      cardTitle: "GitHub, Inc.",
      cardSubtitle:
        "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif",
        },
      },
    },
    {
      title: "Github",
      cardTitle: "GitHub, Inc.",
      cardSubtitle:
        "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif",
        },
      },
    },
    {
      title: "Github",
      cardTitle: "GitHub, Inc.",
      cardSubtitle:
        "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif",
        },
      },
    },
  ];

  return (
    <div className="timeline">
      <div className="timeline-header">
        <div className="title">Timeline</div>
        <div className="add">
          <img src={google_calendar} />
        </div>
      </div>

      <div
        style={{ width: "100%", height: "70vh" }}
        className="timeline-component"
      >
        <Chrono
          timelineCircleDimension={20}
          theme={{
            cardBgColor: "var(--bg-black)",
            primary: "var(--fg-green)",
            secondary: "var(--fg-black)",
            textColor: "green",
            titleColor: "var(--fg-green)",
            cardForeColor: "var(--fg-green)",
          }}
          items={items}
          mode="VERTICAL_ALTERNATING"
          hideControls
          scrollable={{ scrollbar: false }}
          disableClickOnCircle
        >
          <div className="chrono-icons">
            <i className="fa fas-twitter"></i>
            <img
              src="https://img.icons8.com/ios-filled/100/000000/about.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/idea.png"
              alt="twitter"
            />
          </div>
        </Chrono>
      </div>
    </div>
  );
}

export default Timeline;