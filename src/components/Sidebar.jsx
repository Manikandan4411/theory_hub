import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import javaTopics from "../data/javaTopics";
import springBootTopics from "../data/springBootTopics";
import dsaTopics from "../data/dsaTopics";

function Sidebar({ activeMenu, open, onClose }) {
  const [expanded, setExpanded] = useState({});
  const location = useLocation();

  // ✅ Extract current topic from URL
  const currentPath = location.pathname.split("/").pop();

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderTopics = (topics, categoryName) => (
    <ul className="sidebar-list">
      {topics.map((item) =>
        item.children ? (
          <li key={`${categoryName}-${item.title}`}>
            <div
              className="sidebar-subheader"
              onClick={() => toggleExpand(item.title)}
            >
              {item.title}
            </div>
            {expanded[item.title] && renderTopics(item.children, categoryName)}
          </li>
        ) : (
          <li key={`${categoryName}-${item.title}`}>
            {item.path ? (
              <Link
                to={`/${categoryName.toLowerCase().replace(" ", "-")}/${item.path}`}
                onClick={onClose}
                className={`sidebar-link ${
                  currentPath === item.path ? "active" : ""
                }`}
              >
                {item.title}
              </Link>
            ) : (
              <span className="sidebar-link">{item.title}</span>
            )}
          </li>
        )
      )}
    </ul>
  );

  const getTopicsByMenu = () => {
    switch (activeMenu) {
      case "java":
        return renderTopics(javaTopics, "Java");
      case "springboot":
        return renderTopics(springBootTopics, "Spring Boot");
      case "dsa":
        return renderTopics(dsaTopics, "DSA");
      default:
        return <p>Select a category from the top menu.</p>;
    }
  };

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {getTopicsByMenu()}
    </aside>
  );
}

export default Sidebar;
