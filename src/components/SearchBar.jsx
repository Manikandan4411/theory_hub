import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import javaTopics from "../data/javaTopics";
import springBootTopics from "../data/springBootTopics";
import dsaTopics from "../data/dsaTopics";

function flattenTopics(topics, category) {
  return topics.flatMap((topic) =>
    topic.children
      ? flattenTopics(topic.children, category)
      : [{ title: topic.title, path: topic.path, category }]
  );
}

const allTopics = [
  ...flattenTopics(javaTopics, "Java"),
  ...flattenTopics(springBootTopics, "Spring Boot"),
  ...flattenTopics(dsaTopics, "DSA"),
];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const matches = allTopics.filter((t) =>
      t.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(matches);
  };

  const handleSelect = (path) => {
    setQuery("");
    setResults([]);
    navigate(`/${r.category.toLowerCase().replace(" ", "-")}/${r.path}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search topics..."
        value={query}
        onChange={handleSearch}
      />
      {query && (
        <div className="search-results">
          {results.length > 0 ? (
            results.map((r) => (
              <div
                key={r.path}
                className="search-result"
                onClick={() => handleSelect(r.path)}
              >
                <strong>{r.title}</strong> <span>({r.category})</span>
              </div>
            ))
          ) : (
            <div className="search-result">No topics found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
