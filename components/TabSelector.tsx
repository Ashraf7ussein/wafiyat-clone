"use client";
import { useState } from "react";

const getFormattedLabel = (date: Date) => {
  return date.toLocaleDateString("ar-EG", {
    weekday: "long",
  });
};

const today = new Date();

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const beforeYesterday = new Date();
beforeYesterday.setDate(today.getDate() - 2);

const beforeBeforeYesterday = new Date();
beforeBeforeYesterday.setDate(today.getDate() - 3);

const tabs = [
  { id: "today", label: "اليوم" },
  { id: "yesterday", label: "أمس" },
  { id: "before-yesterday", label: getFormattedLabel(beforeYesterday) },
  {
    id: "before-before-yesterday",
    label: getFormattedLabel(beforeBeforeYesterday),
  },
];

const TabSelector = () => {
  const [selectedTab, setSelectedTab] = useState("today");

  return (
    <div
      className="flex items-center justify-center
      border-2 border-border rounded-lg p-1 bg-card-background gap-1"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex flex-1 text-sm h-full
          rounded-md items-center justify-center py-2.5 cursor-pointer ${
            selectedTab === tab.id ? "bg-primary font-bold" : ""
          }`}
          onClick={() => setSelectedTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
