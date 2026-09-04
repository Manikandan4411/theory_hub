import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import TopicNavigation from "./TopicNavigation";

function Content() {
  const { category, topic } = useParams();
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category && topic) {
      setLoading(true);

      // Normalize category name (e.g., springboot → springboot)
      const normalizedCategory = category.toLowerCase().replace(" ", "-");

      // ✅ Correct path for Vite public folder
      const filePath = `${import.meta.env.BASE_URL}content/${normalizedCategory}/${topic}.md`;

      fetch(filePath)
        .then((res) => {
          if (!res.ok) throw new Error("File not found");
          return res.text();
        })
        .then((text) => {
          setMarkdown(text);
          setLoading(false);
        })
        .catch(() => {
          setMarkdown(`# ${topic}\nTopic not found.`);
          setLoading(false);
        });
    }
  }, [category, topic]);

  return (
    <main className="content">
      {loading ? (
        <p>Loading content...</p>
      ) : topic ? (
        <>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
          <TopicNavigation category={category} />
        </>
      ) : (
        <div>
          <h2>Welcome to Java Learning Hub</h2>
          <p>Select a topic from the sidebar to begin learning.</p>
        </div>
      )}
    </main>
  );
}

export default Content;
