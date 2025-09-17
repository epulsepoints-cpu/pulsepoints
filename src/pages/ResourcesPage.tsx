import React, { useState } from "react";

// Tab definitions
const TABS = [
  { key: "videos", label: "Videos" },
  { key: "tools", label: "Tools" },
  { key: "news", label: "News" },
  { key: "xray", label: "X-Ray" },
  { key: "courses", label: "Courses" },
  { key: "library", label: "ECG Library" },
];

// Replace these with your actual tab contents
function TabContent({ tab }: { tab: string }) {
  switch (tab) {
    case "videos":
      return <div>Video resources go here.</div>;
    case "tools":
      return <div>Tools resources go here.</div>;
    case "news":
      return <div>News resources go here.</div>;
    case "xray":
      return <div>X-Ray resources go here.</div>;
    case "courses":
      return <div>Courses resources go here.</div>;
    case "library":
      return <div>ECG Library resources go here.</div>;
    default:
      return null;
  }
}

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#f8fafc",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "2rem 1rem 3rem 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            background: "linear-gradient(90deg, #14b8a6 30%, #0ea5e9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "2rem",
            textAlign: "center",
            letterSpacing: "-1px",
          }}
        >
          ECGkid Resources
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                border: "none",
                background:
                  activeTab === tab.key
                    ? "rgba(14,165,233,0.15)"
                    : "rgba(20,184,166,0.08)",
                color: activeTab === tab.key ? "#0ea5e9" : "#134e4a",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow:
                  activeTab === tab.key
                    ? "0 2px 8px rgba(14,165,233,0.08)"
                    : "none",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 16px rgba(20,184,166,0.07)",
            padding: "2rem",
            minHeight: "400px",
            overflow: "visible",
          }}
        >
          <TabContent tab={activeTab} />
        </div>
      </div>
    </div>
  );
}