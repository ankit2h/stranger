import React from "react";
import SidebarTree from "./structure";

const projectData = [
  {
    name: "frontend",
    type: "folder",
    children: [
      {
        name: "public",
        type: "folder",
        children: [{ name: "index.html", type: "file" }],
      },
      {
        name: "src",
        type: "folder",
        children: [
          { name: "components", type: "folder" },
          { name: "hooks", type: "folder" },
          { name: "redux", type: "folder" },
          { name: "utils", type: "folder" },
          { name: "App.js", type: "file" },
          { name: "App.test.js", type: "file" },
          { name: "index.css", type: "file" },
          { name: "index.js", type: "file" },
          { name: "postcss.config.js", type: "file" },
          { name: "reportWebVitals.js", type: "file" },
          { name: "setupTests.js", type: "file" },
        ],
      },
      { name: "package.json", type: "file" },
      { name: "package-lock.json", type: "file" },
      { name: "tailwind.config.js", type: "file" },
    ],
  },
];

export default function Data() {
  return (
    <div className="flex pt-24 justify-center items-center min-h-screen">
      <SidebarTree data={projectData} />
      {/* <div className="flex-1 p-4">Main content here</div> */}
    </div>
  );
}
