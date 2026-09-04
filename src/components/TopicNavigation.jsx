import React from "react";
import { Link, useParams } from "react-router-dom";
import javaTopics from "../data/javaTopics";
import springBootTopics from "../data/springBootTopics";
import dsaTopics from "../data/dsaTopics";

function flattenTopics(topics) {
  return topics.flatMap((topic) =>
    topic.children ? flattenTopics(topic.children) : [topic]
  );
}

function TopicNavigation() {
  const { category, topic } = useParams();

  let topics = [];
  if (category === "spring-boot") topics = flattenTopics(springBootTopics);
  else if (category === "dsa") topics = flattenTopics(dsaTopics);
  else topics = flattenTopics(javaTopics);

  const index = topics.findIndex((t) => t.path === topic);
  const prevTopic = index > 0 ? topics[index - 1] : null;
  const nextTopic = index < topics.length - 1 ? topics[index + 1] : null;

  return (
    <div className="topic-navigation">
      {prevTopic ? (
        <Link to={`/${category}/${prevTopic.path}`} className="nav-button">
          &lt; Previous: {prevTopic.title}
        </Link>
      ) : (
        <span className="nav-button disabled">&lt; Previous</span>
      )}

      {nextTopic ? (
        <Link to={`/${category}/${nextTopic.path}`} className="nav-button">
          Next: {nextTopic.title} &gt;
        </Link>
      ) : (
        <span className="nav-button disabled">Next &gt;</span>
      )}
    </div>
  );
}

export default TopicNavigation;
