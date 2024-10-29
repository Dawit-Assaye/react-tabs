import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchTabContent = async () => {
  const response = await axios.get("http://localhost:5000/api/loripsum");
  return response.data.split("\n\n");
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const {
    data: tabContent = [],
    isLoading,
    error,
  } = useQuery("tabContent", fetchTabContent, {
    staleTime: 60000,
    cacheTime: 300000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading content.</div>;

  return (
    <div className="container">
      <div className="tabs">
        {["Tab 1", "Tab 2", "Tab 3", "Tab 4"].map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="content">
        <h1>Title {activeTab + 1}</h1>
        {tabContent[activeTab] ? (
          <div dangerouslySetInnerHTML={{ __html: tabContent[activeTab] }} />
        ) : (
          "Loading content..."
        )}
      </div>
    </div>
  );
};

export default Tabs;
